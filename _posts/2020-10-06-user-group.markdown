---
layout: default
title: "User & Group"
date: 2020-10-06 03:22:48 +0100
categories: linux
comments: true
thumbnail: /assets/img/thumbnails/1.jpg
---

If you heard about **users and groups** in linux... and you keep forgetting the essentials command, here is a cheatsheet.

# User

List all existing users in ubuntu (prefered)  
`getent passwd`

Another alternative method :  
`less /etc/passwd`

# Group

List all existing groups (prefered)  
`getent group`

Another alternative method :  
`less /etc/group`

### Create a new group

Let's create a docker group:  
`sudo groupadd docker`  
And add us ($USER) to this new group:  
` sudo usermod -aG docker $USER`

Tip : Logout & login again for the previous lines to be taken into account.

# Note

You can always filter the output usgin grep. So for instance if you are looking every group for a user type  
`getent group | grep username`

# Modifiying sudo rights

If you want to deal with sudo (admin priviledges) then you will have to modify a file located here `/etc/sudoers` which looks like this :

```md
# User privilege specification

root ALL=(ALL:ALL) ALL

# Allow members of group sudo to execute any command

%sudo ALL=(ALL:ALL) ALL

# See sudoers(5) for more information on "#include" directives:

#includedir /etc/sudoers.d
```

Note: sudo rules can also be defined in files under the `/etc/sudoers.d/` directory in case "#includedir /etc/sudoers.d" is not commented out.

### Removing password prompt for users in the sudo group

You will need to modifiy the file like this :

```
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) NOPASSWD: ALL
```

### Removing password prompt for a specific app

Let's say you want sudo users not to have to type `sudo` every time they run any docker command. Then you will need to add this line in our file:

```
%sudo ALL=(ALL:ALL) NOPASSWD: /sbin/docker
```

Note for more security, you could simply create a `docker` group and grant this privilege to user member of the docker group only :

```
docker ALL=(ALL:ALL) NOPASSWD: /sbin/docker
```

# Reference

Show users and group : [stackoverflow](https://serverfault.com/questions/355292/show-all-users-and-their-groups-vice-versa)  
Modifiy sudo : [askubuntu](https://askubuntu.com/questions/814758/user-in-admin-group-still-being-prompted-for-password-to-sudo)
