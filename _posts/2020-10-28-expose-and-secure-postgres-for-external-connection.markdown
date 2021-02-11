---
layout: default
title:  "Expose and secure postgres for external connection"
date:   2020-10-28 03:22:48 +0100
categories: database
comments: true
---

If you host a postgres database on your server, and you need to **expose** it to the web, so that other application can connect to it... you will need to secure it, and here is a quick recap.  

# Summary
There will be three main steps :
- Firewall => prevent anything from getting into the server. First defence shield.
- pg_hba.conf => who (users) can connect to postgres
- postgresql.conf => which addresses to listen to (default to localhost, we will need to allow some external)

As a pre-requisite, it is recommended to create a dedicated user for these remote connection. You can do this by logging into postgresql `sudo -i -u postgres psql` and then typing `CREATE USER userremoteconnexion WITH PASSWORD 'mypassword';`. Check it was created by typing `\du`

## Firewall

Check that your Firewall settings :
```bash
sudo ufw status
```
If it's `incative` juste activate it by typing `sudo ufw enable`  

Allow access to the PostgreSQL port (usually 5432) for connection coming from your authorized host :
```bash
sudo ufw allow from authorized_client_ip_address to any port 5432
```
Make sure everything is fine by typing again `ufw status`  


Note: if trying to connect from google data.studio app, the list of IPs you need to allow are listed [here](https://support.google.com/datastudio/answer/7288010?hl=fr)  

Troubleshooting: remember that the rule order is important in your firewall !  

## pg_hba.conf
Here we will configure the allowed hosts

```bash
sudo nano /etc/postgresql/10/main/pg_hba.conf
```
Note : **10** is my version of postgresql, replace with your hosted version. Don't know your postgres version ? Type `postgres -V` or look at the link in the Reference bellow.

You'll need to add this line
```md
host mydatabase userremoteconnexion authorized_client_ip_address/32 md5
```
More explanations on these parameters :  
- **host** says that a TCP/IP connection will be used.
- **database** mydatabase indicates the database the host can connect to (several databases can be separated with commas)
- **user** userremoteconnexion is the user allowed to make the connection (several users can be separated with commas)
- **address** client machine address: may contain a hostname, IP address range or other special key words. Here, we’ve allowed just the single IP address of our client.
- **auth-method** md5 indicates a double-MD5-hashed password will be supplied for authentication. => 'mypassword' will be required

## postgresql.conf
Here we will set the listen address
```bash
sudo nano /etc/postgresql/10/main/postgresql.conf
```
Note: same as before with the **10** version

```md
#listen_addresses = 'localhost'         # what IP address(es) to listen on;
listen_addresses = 'localhost,server_ip_address_hosting_this_database'
```
Note: server_ip_address_hosting_this_database is the IP of the server you are currently executing this tutorial = the server that has postgres installed on. It may sound strange, but you are actually telling postgres to listen to the IP of its server.

# Restart & test
### Restart
```bash
sudo systemctl restart postgresql
```
And make sure it is working `sudo systemctl status postgresql`  


### Test
Let's try the following: from our laptop, we will try to connect to psql.

We have to execute this tutorial from the begining replacing `authorized_client_ip_address` by our laptop IP.  

Note: If you don't know your own IP you can go to https://www.whatsmyip.org/ or typing `ifconfig` in your terminal (but if you have a box internet  provider, it connect you through a proxy, in case only whatsmyip will work)

And let's test :
```bash
psql -U userremoteconnexion -h server_ip_address_hosting_this_database -d mydatabase
```
If it works, you should see a prompt for your password. Please fill it with `mypassword` !

Good !!!


# Reference
secure postgresql againt attacks : [digitalocean](https://www.digitalocean.com/community/tutorials/how-to-secure-postgresql-against-automated-attacks)    
get postgres user list : [postgresqltutorial](https://www.postgresqltutorial.com/postgresql-list-users/)  
google datastudio : [process](https://support.google.com/datastudio/answer/7288010?hl=fr)  
pg version [chartio](https://chartio.com/resources/tutorials/how-to-view-which-postgres-version-is-running/)  
pg_hba.conf [official doc](https://www.postgresql.org/docs/10/auth-pg-hba-conf.html)  
pg_hba.conf: Ip range not working [stackoverflow](https://stackoverflow.com/questions/44730013/postgres-pg-hba-conf-ip-range-not-working)  
