---
layout: default
title:  "Makefile is useful"
date:   2018-10-16 19:22:48 +0100
categories: docker
comments: true
---

## Why ?

I have a simple frontend dockerised app on [http://localhost:8000](http://localhost:8000)  
I have a simple backend dockerised API on [http://localhost:8001](http://localhost:8001) serving my frontend   
I need to start a database for my backend

How to launch all this at once, in one cmd line ?

Tested Configuration:  
`MacOS:  Sierra 10.12`  
`Docker: 18.03 CE`  
`Docker-compose: 1.21.1`


# Makefile + Docker


## What is a Makefile:
**Make** is a tool which controls the generation of executables from the program's source files. Make knows how to build your program by reading a file called the **makefile**.  

When you write a program, you should write a makefile for it, so that it is possible to use Make to build and install the program. _Many automation UI's for build processes use makefiles (or similar) behind the scenes._


## When do I use a Makefile:
* When I have several micro-services, and they work together. Especially useful When stored on a public github repo: avoid many conf pb


## Makefile Example:

```bash
#env variable definition

export PORT_FRONTEND=8000
export PORT_BACKEND=8001
export APP=myappname
export DC_DIR=${APP_PATH}
export DC_PREFIX=${DC_DIR}/docker-compose

#other variable definition

date  := $(shell date -I)
DC    := 'docker-compose'

#secret env variable definition in a .gitignore file called artifacts

include ./artifacts

# commands definition

## docker network commands definition

network:
        @docker network create ${APP} 2> /dev/null; true

# Note: you may wonder what @ stands for ? in makefile, adding @ before a command means "don't print the command in the output"


network-stop:
        @echo cleaning ${APP} docker network
        docker network rm ${APP}

## backend commands definition

backend: network
        ${DC} -f ${DC_PREFIX}-backend.yml up --build -d

backend-log:
        ${DC} -f ${DC_PREFIX}-backend.yml logs --build -d

backend-stop:
        ${DC} -f ${DC_PREFIX}-backend.yml down

## frontend commands definition

frontend: network
        ${DC} -f ${DC_PREFIX}-frontend.yml up --build -d

frontend-log:
        ${DC} -f ${DC_PREFIX}-frontend.yml logs --build -d

frontend-stop:
        ${DC} -f ${DC_PREFIX}-frontend.yml down

## database commands definition

database: network
        ${DC} -f ${DC_PREFIX}-database.yml up -d

database-stop:
        ${DC} -f ${DC_PREFIX}-database.yml down



## useful commands definition

up: network database backend frontend

down: frontend-stop backend-stop database-stop network-stop  

## access the LIUNX current user value. 
## $USER won't work since it refers to a Makefile variable we haven't defined

printLinuxUser:
        echo $$USER

```

Note: all configuration lays inside the different docker-compose-XXX files.

## How to use ?

1. Go to your project folder (where the makefile is stored)
2. Run ``` make up ```
3. That's it, you can go to your browser and see that you frontend works, your backend is actually serving your frontend using the data from your database.

## One problem: 
Makefile command may be different on the OS you run. For instance, between MacOS and Ubuntu, some command may be different; The reason is the unix shell that will execute the makefile can be different.  
Here is a list of unix shells:

| Unix shell        | name           | explanation  |
| ------------- |:-------------:| -----:|
| sh      | The original Bourne shell | Present on every unix system |
| ksh      | Original Korn shell | Richer shell programming environment than sh |
| csh      | Original C-shell | C-like syntax; early versions buggy  |
| tcsh      | Enhanced C-shell | User-friendly and less buggy csh implementation  |
| bash      | GNU Bourne-again shell | Enhanced and free sh implementation  |
| zsh      | Z shell | Enhanced, user-friendly ksh-like shell |

you can try to add this line at the top of your makefile in order to force the use of bash (for instance):
``` SHELL := /usr/bin/env bash ```  


## Notes :
* There is no difference between () and {} for Make
* If you use $$ in a recipe, then $ is "escaped" and passed to the shell
* Using $${dir} will send ${dir} to the shell, and the shell will replace it using the env ‘dir’


# Ressources

make reference: [gnu.org]([https://www.gnu.org/software/make/])

Docker + CircleCI: [straight-to-production-with-docker-ansible-and-circleci](https://blog.theodo.fr/2016/05/straight-to-production-with-docker-ansible-and-circleci/)

$() VS ${}: [function-and-difference-between-and-in-makefile](https://stackoverflow.com/questions/19475037/function-and-difference-between-and-in-makefile/19476225)

Useful commands: [gl.developpez.com](https://gl.developpez.com/tutoriel/outil/makefile/)

unix shell details: [stackoverflow.com](https://stackoverflow.com/questions/8051145/what-are-the-differences-between-using-the-terminal-on-a-mac-vs-linux)
