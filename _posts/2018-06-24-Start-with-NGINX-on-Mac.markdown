---
layout: blog
title: "Start with NGINX on Mac"
date: 2018-06-24 03:22:48 +0100
categories: nginx
comments: true
thumbnail: /assets/img/nginx1.png
---

I have an app running on http://localhost:3000 and I now want to use NGINX as a webserver, so that going to http://localhost or http://localhost:80
will redirect me to the same app. Here is how:

Tested Configuration:  
`MacOS:  Sierra 10.12`  
`Terminal: nginx 1.15.0`

# 1. Install NGINX:

Freaking easy, type in your terminal

```bash
brew install nginx
```

You will see this:

![terminal](/assets/img/nginx1.png)

# 2. Start NGINX:

Simply type:

```bash
sudo nginx
```

Now open your browser (like google Chrome for instance) and go to [http://localhost:8080][http://localhost:8080]

You will see this, congratulation !

![8080](https://ibin.co/46UcKMjFa3eF.png){:class="img-responsive"}

You can stop NGINX using this command

```bash
sudo nginx -s stop
```

# 3. Configuration tips:

Everything is in `/usr/local/etc/nginx/nginx.conf`

## 3.1 Backup

First thing, before we mess up, make a backup of this file. Once done, you can modify it as long as you want !

```bash
cp /usr/local/etc/nginx/nginx.conf /usr/local/etc/nginx/nginx_backup.conf
```

## 3.2 Change port to listen to

```bash
sudo nano /usr/local/etc/nginx/nginx.conf
```

And replace (line 36)
`listen       8080;`
by
`listen       80;`

Now, restart NGINX

```bash
sudo nginx -s stop
sudo nginx
```

And go to [http://localhost:8080][http://localhost:8080] -> it doesn't work ! That's great, because we said to nginx to listen to port 80
So go to [http://localhost:80][http://localhost:80] -> perfect, the Nginx Homepage. you can also go to [http://localhost][http://localhost] since it is the same

#### Problems you may have

- port 8080 still works --> on your browser, you may need to Ctrl + R to remove the cache
- ERROR 403 Forbidden --> you may need to kill the app already using port 80, like Skype for instance.

## 3.3 Serve multiple apps

Let's say you wanna serve not only [http://localhost:80][http://localhost:80] but also [http://localhost:8081][http://localhost:8081] and [http://localhost:8080][http://localhost:8080]

### Organise your nginx

You don't want to write everything in this _mother file_ so you will simply create a folder for all apps, and we will tell nginx to look at this folder.

Create the folder called `conf.d` for all your apps:

```bash
mkdir /usr/local/etc/nginx/conf.d
```

Tell nginx to look at this file:

```bash
sudo nano /usr/local/etc/nginx/nginx.conf
```

By adding `include conf.d/*.conf;` before the end of the http object:

```bash
http {
  # DO NOT TOUCH
  include conf.d/*.conf;
}
```

### Create app [http://localhost:8080]

From now on, whenever you create a new server, or an app, just place them into your conf.d directory.

```bash
sudo nano /usr/local/etc/nginx/conf.d/8080.conf
```

and write this

```bash
server {
    listen       8080;
    server_name  localhost;

    location / {
        root   html;
        index  index.html index.htm;
    }

    # redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

### Create app [http://localhost:8081]

```bash
sudo nano /usr/local/etc/nginx/conf.d/8081.conf
```

and write this

```bash
server {
    listen       8081;
    server_name  localhost;

    location / {
        root   html;
        index  index.html index.htm;
    }

    # redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

### Try

Restart NGINX

```bash
sudo nginx -s stop
sudo nginx
```

And go to the 3 apps [http://localhost:80] - [http://localhost:8081] - [http://localhost:8080]  
They all work together !

# 4. Re-root to apps

### 4.1 from URL1 to URL2

Let's say one of your app is already running on port [http://localhost:4000][http://localhost:4000] (like a [Jekyll project][Jekyll project]) and you want to access it through your browser on port [http://localhost:8082][http://localhost:8082]

Same thing as before, create an app. The only difference is the location: `proxy_pass http://127.0.0.1:4000;`

```bash
sudo nano /usr/local/etc/nginx/conf.d/8082.conf
```

and write this

```bash
server {
    listen       8082;
    server_name  localhost;

    location / {
        proxy_pass http://127.0.0.1:4000;
    }

    # redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

Don't forget to stop and start nginx again, and then go to [http://localhost:8082][http://localhost:8082] !

### 4.2 Rewrite URL

In some cases, you want to rewrite the url between [http://localhost:4000][http://localhost:4000]
and [http://localhost:8082][http://localhost:8082]

Let's say you want that [http://localhost:8082/blog][http://localhost:8082/blog] goes simply to [http://localhost:4000][http://localhost:4000]

it's easy to do: add a block for the url /blog

```bash
server {
    listen       8082;
    server_name  localhost;

    location / {
        proxy_pass http://127.0.0.1:4000;
    }

    location /blog {
        rewrite ^/blog(.*) /$1 break;
        proxy_pass http://127.0.0.1:4000;
    }

    # redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

Don't forget to stop and start nginx again, and then go to [http://localhost:8082/blog][http://localhost:8082/blog] !

# 5. Test with real domain name

In case you want to test with real domain names, but you don't own a domain name yet, there is a trick you can use. We will tell your browser to behave like if it was on a real domain name, while going straight to localhost. This is useful to for testing. But remember to remove this after you're finished! Otherwise you will never go to the real websites

```bash
sudo nano /private/etc/hosts
```

```bash
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##

127.0.0.1 localhost

127.0.0.1 mywebsite.com
```

Note: you can as well replace 127.0.0.1 with a server you own, before the you make your dns point to this server for instance

### Then create the mywebsite.com app

As usual:

```bash
sudo nano /usr/local/etc/nginx/conf.d/mywebsite.com.conf
```

and write this

```bash
server {
    listen       80;
    server_name  mywebsite.com;

    location / {
        proxy_pass http://127.0.0.1:4000;
    }

    # redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

Don't forget to stop and start nginx again, and then go to [http://mywebsite.com][http://mywebsite.com] !

# Other notes

Make sure the Nginx configuration is correct:

```bash
sudo nginx -t
```

Should return

```bash
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

# Ressources

Blog: [coderwall][coderwall]  
Reverse-proxy & https setup: [scaleway](https://www.scaleway.com/en/docs/how-to-configure-nginx-reverse-proxy/#targetText=Nginx%20HTTPs%20Reverse%20Proxy%20Overview,response%20back%20to%20the%20client.)

[Jekyll project]: https://guillim.github.io/jekyll/2018/02/10/Start-with-jekyll.html
[http://localhost:8082/blog]: http://localhost:8082/blog
[http://mywebsite.com]: http://mywebsite.com
[http://localhost:4000]: http://localhost:4000
[http://localhost:8082]: http://localhost:8082
[http://localhost]: http://localhost
[http://localhost:8080]: http://localhost:8080
[http://localhost:8081]: http://localhost:8081
[http://localhost:80]: http://localhost:80
[coderwall]: https://coderwall.com/p/dgwwuq/installing-nginx-in-mac-os-x-maverick-with-homebrew
