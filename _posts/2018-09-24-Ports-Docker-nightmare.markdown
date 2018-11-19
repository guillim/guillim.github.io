---
layout: default
title:  "Ports binding in Docker is a nightmare"
date:   2018-09-24 19:22:48 +0100
categories: docker
comments: true
---

I had a simple app running on [http://localhost:8000][http://localhost:8000]  

After Dockerization, I can't access my app using my browser as before.  
The objecive is that going to [http://localhost:8081][http://localhost:8081] I access my app again. I could choose 8000 again but it would be confusing.

Tested Configuration:  
`MacOS:  Sierra 10.12`  
`Docker: 18.03 CE`  
`Docker-compose: 1.21.1`  

# 1.  The configuration Before:

Easy, a simple nodeJs API with only one endpoint: a GET request on port 8000 ```/status```  
It's used to check if the API works.  

I launch it with
``` bash
npm run dev
```

And when you go to [http://localhost:8000/status][http://localhost:8000/status]  
The answer is "connected"

What is looks like:  
![screenshot](https://ibin.co/4Gq2OIbmT3jR.png)


_Note: It is a simplyfied version of [this repo][repo]_  

# 2.  The configuration after:  

I simply encaplusate the app in a Docker.  

What is looks like now:  
![screenshot](https://ibin.co/4GvI3khqhbLk.png)

And it works ! Easy to check: [http://localhost:8081/status][http://localhost:8081/status].  

But there has been a bit of trouble on the way ! Ports can be defined at many places and it isn't clear which one is which.

_Note: Makefile is simply to avoid to type in the terminal every time the docker componse commands_

# 3.  What you need to understand:

As you can see, there are 4 "ports" written in this project.  

1- Makefile:  

```
export PORT=80  
```  
Here you define as variable, so that the rest of the project knows on which port you plan to deploy you app  

2- Dockerfile:   

```
EXPOSE 8081  
```  
We look at the container that will be built. Here we define the port on which it will be accessible on the docker network. What it means if that if other container want to talk to him, they will have to do it on this  port.  

3- docker-compose-backend.yml:   

```
ports:  
    - 8081:8000  
```  

The main part ! Here you tell your container to bind the IP 8081 to the IP 8000 inside it. Without this, your app is running perfectly inside the container but no one can see it. Because it isn't _exposed_ to the rest of the network, containers...

Tip: when you want to check inside the container when it isn't exposed yet to the network, here is a useful command:

```bash
docker exec -it 86168b927131 bash -c 'curl http://localhost:8000'
```

# Ressources

Port VS Expose: [StackOverFlow issue][po]   

A similar configuration, but more complex: [github][similar]   

A guy that struggled as well, and has good tips: [answer 8/8, by dundych][dund]  

[dund]: https://forums.docker.com/t/how-can-i-navigate-to-container-website-from-host-browser/25035/8

[similar]: https://github.com/asishrs/node-express-docker
[po]: https://stackoverflow.com/questions/40801772/what-is-the-difference-between-docker-compose-ports-vs-expose
[repo]: https://github.com/guillim/nodejs-API-starterkit
[http://localhost:8000/status]: http://localhost:8000/status
[http://localhost:8000]: http://localhost:8000
[http://localhost:8081]: http://localhost:8081
