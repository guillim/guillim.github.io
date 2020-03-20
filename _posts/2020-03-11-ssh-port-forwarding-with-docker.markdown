---
layout: default
title:  "ssh port forwarding with docker"
date:   2020-03-11 03:22:48 +0100
categories: ssh, docker
comments: true
---

You have a installed an application on a remote server, and you want to connect using SSH ? Here is what you can do  
Tested Configuration:  
`MacOS:  Sierra 10.15`  

## Local port forwarding

### 1. Definition  
Forwards a port on a computer to another port on the remote server  

### 2. Explanation
Basically, the SSH client (on the computer 192.10.10.10) listens for connections on a configured port (4000 on the picture). When it receives a connection like _Please connect to the application "App" on port 5000 hosted on 192.11.11.11_, it tunnels the connection to the SSH server on the remote machine (at 192.11.11.11). On the remote machine, the SSH server connects to the configurated destination port (5000, our App).

![result2](/assets/img/ssh_local_port_forwarding.png)  

NB: I mention "computer" but any client machine will do  

### 3. Code
``` bash
ssh -L 4000:127.0.0.1:5000 root@82.11.11.11
```

Compared to the ususal ssh command like `ssh root@82.11.11.11` for connecting to a SSH server hosted on 82.11.11.11, we add `-L` for Local forwarding.

Here, 127.0.0.1 refers to localhost on the remote server!

### 4. More options
1. On the remote machnie, the SSH server connects to the configurated destination port, but it can also be on a different machine than the SSH server.
``` bash
ssh -L 4000:192.11.11.12:5000 root@82.11.11.11
```

![result2](/assets/img/ssh_local_port_forwarding2.png)  

see this [ssh example](https://www.supinfo.com/articles/single/567-port-forwarding-avec-ssh) for more details.


2. By default, anyone (even on different machines of the intranet, if your computer is on an intrant for instance) can connect to the specified port on the SSH client machine. However, this can be restricted to programs on the same host by supplying a bind address:

```bash
ssh -L 127.0.0.1:4000:192.11.11.12:5000 root@82.11.11.11
```  

### 5. Troubleshooting  
If you encounter this issue : `bind [127.0.0.1]:5000: Address already in use` it can be that another process is already using your port. It can be because your SSH port is already runnging in the background, maybe as a zombie process ! You can kill it using this command (change port 5000 if needed) :

```bash
 lsof -ti:5000 | xargs kill -9
```  



### useful SSH options  
`-N` : no remote command to execute  
`-f` : run in the background  
`-4` : force IPV4 (maybe useeful if you have 'Cannot assign requested address')  
`-6` : if you need to force IPV6 (you shouldn't need it)  

# Reference

ssh : [ssh example](https://www.ssh.com/ssh/tunneling/example)  
french version : [ example](https://www.supinfo.com/articles/single/567-port-forwarding-avec-ssh)  
Basics and Tips : [hackertarget](https://hackertarget.com/ssh-examples-tunnels/)  
ssh options : [explainshell](https://explainshell.com/explain?cmd=ssh+-L+-N+-f+-l)  
ssh IPs : [ipv4 VS ipv6](https://www.linux.com/tutorials/7remote-sessions-over-ipv6-ssh-scp-and-rsync/)  
troublshooting : [Address already in use](https://askubuntu.com/questions/447820/ssh-l-error-bind-address-already-in-use)
