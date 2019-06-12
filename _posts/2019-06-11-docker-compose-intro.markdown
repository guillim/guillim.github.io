---
layout: default
title:  "Docker Compose: a short introduction"
date:   2019-06-11 19:22:48 +0100
categories: docker
comments: true
---

This is a short hands-on introduction to docker-compose. If you want to know what docker is, check this [link](https://guillim.github.io/docker/2018/11/18/docker-hands-on-intro.html) out. This is simply a commented version of the official [django with docker-compose](https://docs.docker.com/compose/django/).



Tested Configuration:  
`MacOS:  Sierra 10.12.06`  
`Docker: 18.09.2 CE`  
`Docker-compose: 1.23.2`  

# 1. Requirements

Make sure you have docker and docker-compose installed on your machine. To do this, simply type
```bash
docker --version
```

and make sure you have something like ```Docker version 18.09.2-ce, build 6247962```  

Then type

```bash
docker-compose --version
```

and make sure you have something like ```docker-compose version 1.23.2, build 1110ad01```

# 2. Dockerfile

First, create your Dockerfile, please type :
```bash
mkdir docker_folder
cd docker_folder
touch Dockerfile
```

### Edit your Dockerfile
You are still in the `/docker_folder`, type
```bash
sudo nano Dockerfile
```

It will open your Dockerfile. Now copy the following code in your Dockerfile :  

```
FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
```

What is happening in the Dockerfile:  

**FROM python:3** _will import the python 3 image from the docker hub_  
**ENV PYTHONUNBUFFERED 1** _define an environment variable. Later in the script, it will tell python to print STDOUT without buffering anything. that's useful when you want to print something before the machine crashes_  
**RUN mkdir /code** _will create a folder on the Image_  
**WORKDIR /code** _will set the current directory as /code   -> acts like a ``` cd /code``` on the image_  
**COPY requirements.txt /code/** _copies the file requirements.txt to the image at the location /code/requirements.txt_  
**RUN pip install -r requirements.txt** _install all python packages on the image_  
**COPY . /code/** _copy the rest of the folder to the folder code_  


# 3. Create your requirements


Create your requirements.txt in your folder `/docker_folder` and then edit it:
```bash
sudo nano requirements.txt
```
Inside, you can write this:
```txt
Django>=2.0,<3.0
psycopg2>=2.7,<3.0
```

This will tell Docker to install Django and psycopg2 on the image


# 4. Create docker-compose.yaml

Create a file called docker-compose.yaml in your project directory `/docker_folder` and then edit it:
```bash
sudo nano docker-compose.yaml
```
Inside, you can write this:
```yaml
version: '3'

services:
  db:
    image: postgres
  web:
    build: .
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/code
    ports:
      - "8000:8000"
    depends_on:
      - db
```


##### From the documentation:  
_The docker-compose.yml file **describes the services** that make your app. In this example those services are a web server and database.  
The compose file also describes **which Docker images** these services use, how they **link** together, any **volumes** they might need mounted inside the containers.   
Finally, the docker-compose.yml file describes which **ports** these services expose._

##### Short analysis:
* we create two services: `web` & `db`
* we use format version 3 (different from the docker-compose version...). You can see the [Compatibility matrix](https://docs.docker.com/compose/compose-file/compose-versioning/)
* service `db` has an image based on the `postgres` image (from docker hub)
* service `web` has an image based on the `Dockerfile` we wrote earlier: that's the `build: .`
* service `web` launches the command: `python manage.py runserver 0.0.0.0:8000` after the image is built
* service `web` mounts the folder `/docker_folder` to the image folder `/code` (ex: modify the code on the fly)
* service `web` mounts the ports 8000 [container] to 8000 [image] (simple)



# 5. Create a Django project

in your terminal type:  
```bash
sudo docker-compose run web django-admin startproject composeexample .
```

#### Explanations:

**compose** will run `django-admin startproject composeexample` in a container, using the web service’s image and configuration. This command instructs Django to create a set of files and directories representing a Django project.

Now, if you look at the files in the `/docker_folder`, you have:  
**Dockerfile** _(was here before)_  
**composeexample**  
**docker-compose.yaml** _(was here before)_  
**manage.py**  
**requirements.txt** _(was here before)_


# 6. Connect the database

In the `composeexample/settings.py` file, replace `DATABASES = ...` with:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'postgres',
        'USER': 'postgres',
        'HOST': 'db',
        'PORT': 5432,
    }
}
```

To know more about the database: [docker & postgres](https://github.com/docker-library/docs/blob/master/postgres/README.md)
# 7. Run

Simply run your docker project using
```bash
docker-compose up
```

and see you server working by clicking [http://localhost:8000](http://localhost:8000)


##### Monitor
Prints all the running containers
```
docker container ls
```

##### Stop
Two method:

1. `Ctrl-C` in the same shell in where you started it

2. open a new shell, go to `/docker_folder` directory, and run `docker-compose down`


# Notes:
#### docker-compose.yaml VS docker-compose.yml
Shall we use the extension .yml or .yaml ? **IT DOESN'T MATTER**  
Everyone could use .yaml but some Windows developer are afraid of using more than 3 letters extensions...

#### file ownership
After runnig `sudo docker-compose run web django-admin startproject composeexample .` several files were created. Running `ls -l` will show who is owning the files. You may need to change their ownership back to you (espcially Linux users) using `sudo chown -R $USER:$USER .`


# Ressources:

docker-compose.yaml VS docker-compose.yml: [stackoverflow link](https://stackoverflow.com/questions/22268952/what-is-the-difference-between-yaml-and-yml-extension)  
More about [PYTHONUNBUFFERED](https://github.com/awslabs/amazon-sagemaker-examples/issues/319)  
the official docker-compose [tuto](https://docs.docker.com/compose/gettingstarted/)
