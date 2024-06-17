---
layout: default
title: "ssh fingerprint"
date: 2022-08-24 03:22:48 +0100
categories: ssh
comments: true
thumbnail: /assets/img/thumbnails/2.jpg
---

Today is a small SSH fingerprint cheatsheet

# The fingerprint

## Why

It's pretty hard to read SSH keys. So fingerprints is a unique shortcut to give a "name" to a public key. It's mainly used to identify or verify servers you are connecting to.

## How

The fingerprint is based on the host's public key, like /etc/ssh/rsa_key.pub  
Here is how to generate one :  
`ssh-keygen -l -E md5 -f ~/.ssh/id_rsa.pub`  
You should see

```txt
00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff
```

Note : the fingerprint can be SHA-256 or hexadecimal MD5, depending on the exact command and version of your ssh-keygen

## Tip

Copy a ssh key to your clipboard using command line `pbcopy < rsa_key.pub`

# Reference

Stackoverflow [fingerprint](https://superuser.com/questions/421997/what-is-a-ssh-key-fingerprint-and-how-is-it-generated)  
Copy to [clipboard](https://coderwall.com/p/osbzzq/copy-files-to-clipboard-using-command-line-on-osx)
