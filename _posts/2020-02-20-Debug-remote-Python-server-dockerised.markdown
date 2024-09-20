---
layout: blog
title: "How to debug a Python server running inside a remote docker container"
date: 2020-02-20 03:22:48 +0100
categories: python, docker, django
comments: true
thumbnail: /assets/img/thumbnails/3.jpg
---

You have a remote python server, and your project is dockerised. Suddenly you need to debug something onine ? Here is what you can do  
Tested Configuration:  
`MacOS:  Sierra 10.15`  
`Python: 3`  
`Python server: Django 2.2.4`

## 1. Connect to your server

```bash
ssh username@198.300.206.18
```

Replace with your server IP, and your username of course

## 2. Connect to your docker container

```bash
docker exec -it CONTAINERNAME bash
```

If you don't know the name of your container, type `docker container ls`

You will see the CLI opening from inside your container. if you type `ls` for instance, you should see every file at the root of your docker image.

Then go inside your project main folder, usually under _src_

```bash
cd src
```

## 3. Install the tools

#### VENV

If you don't have VENV install already, please install it ([check this link](https://docs.python.org/3/library/venv.html))

Now activate VENV

```bash
source ./venv/bin/activate
```

You will see the CLI prompt changing a bit : **(venv)** will appear at the begining of the prompt. Note that to exit, you simply type `deactivate`

#### IPython

IPython will be the tools to use for debugging. Let's install it (more info [here](https://ipython.org/install.html)) :

```bash
pip install ipython
```

## 4. Debug

since we are using Django, we can ask for a python prompt pretty easily now by typing :

```bash
./src/manage.py shell
```

You should see a new kind of prompt, looking like this :

```Python
In [1]:
```

That's it, you are using python now. Time to debug !

# Reference

More about the [Django shell and ipython](https://stackoverflow.com/questions/47170049/run-django-shell-in-ipython)
