---
layout: default
title:  "Set up Github Pages with your own domain, and SSL"
date:   2018-02-14 03:22:48 +0100
categories: github
comments: true
---

You want to set up **your own domain** on github pages using **SSL** ? Here is what you can do  

## Prerequisite

You have a **STATIC** website stored on github.io  
And you can access your website through the url    
https://mywebsite.github.io

# 1.  Go to cloudflare.com and register

Why : cloudflare provides free universal SSL _(and other nice things we don't really care right now)_

What to do:
*  create your account
*  add your website
*  follow their instructions ([link to cloudflare 'get started' instructions][cloudflareStart])

At the end, Cloudflare will give you two nameservers. They will look like  

> bob.ns.cloudflare.com  
> tia.ns.cloudflare.com

Copy them.

# 2.  Go to your Registrar (the company you paid in order to register your domain)

*  Inside your Registrar admin panel, change the original nameservers to the two new nameservers from Cloudflare
   Note that sometimes, the **nameservers** are also called **DNS servers**.  

From now on, the DNS zone of your registrar admin panel is useless.  
Only the DNS zone from Cloudflare admin panel matters. It means that any DNS modification like adding TXT record, or CNAME... will have to be done through Cloudflare.

Note: Confuse about the difference between DNS servers and DNS zone ? [click here][dnsexplanation]

# 3.  Go back to Cloudflare, only this matters now.

Check that Cloudflare has imported every configuration from your registrar DNS zone  

Don't forget to activate Cloudflare for each row, by clicking the grey cloud until it turns orange !
![turn cloudflare on]( https://ibin.co/3runyY12D8iw.png){:class="img-responsive"}

Set up the 2 CNAME redirections to your github.io static website as bellow:  
![screenshot]( https://ibin.co/3rvU9gapmYpi.png){:class="img-responsive"}


# 4. In Cloudflare admin, Go to _"Crypto"_

And click Flexible:  
![screenshot]( https://ibin.co/w800/3rvGKxYsQvoX.png){:class="img-responsive"}

Note that the status of the certificate is _"Authorizing Certificate"_ which stands for _pending_. Until it goes to _"Active Certificate"_
you should enable http connection so that there is no downtime to your service. Once it is Active, you will switch to _"Full"_ and only https will be available.



# 5. In Cloudflare admin, Go to _"Page Rules"_

Set up the rule that will force redirection from http to https. Exemple for the website goyllo.com is bellow  

![screenshot]( https://ibin.co/w800/3rvIGqqgUmY6.png){:class="img-responsive"}


# 6. Go to Github

Create a CNAME file

![screenshot]( https://ibin.co/3rvRmwYjjMsd.png){:class="img-responsive"}

Write the url of your website. If you want people to go on your website without www, write: mywebsite.com

![screenshot]( https://ibin.co/3rvWZrYlA4TA.png){:class="img-responsive"}

# 7.  **WAIT** for a long time...

It may take 1 or 2 days before everything is fully operational. So if you errors like "ERR_SSL_VERSION_OR_CIPHER_MISMATCH" or "SSL_ERROR_NO_CYPHER_OVERLAP" just WAIT.
DNS propagation in the network can take a while, and registrar usually take it slow...


## Ressources

[cvan blog][cvan blog]: Tutorial I followed for the most part  

[cloudflare tuto][cloudflare tuto]: Official ressource from Cloudflare on how to do this  

[dns help][dns help]: What you need to know about DNS is in their FAQ  


[dnsexplanation]: https://www.infomaniak.com/en/support/faq/search?q=dns
[cvan blog]: https://gist.github.com/cvan/8630f847f579f90e0c014dc5199c337b
[cloudflare tuto]: https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/
[dns help]: https://support.dnsimple.com/articles/differences-between-a-cname-alias-url/
[cloudflareStart]: https://support.cloudflare.com/hc/en-us/articles/201720164-Step-2-Create-a-Cloudflare-account-and-add-a-website
