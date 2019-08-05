---
layout: default
title:  "Separate Docker & Data"
date:   2019-07-29 19:22:48 +0100
categories: docker
comments: true
---

This is a short explanation on how to setup a postgres database using Docker, in a way that even if you kill Docker and remove the docker volumes, the data will still exist: we talk about **persistent data**. And that's what you want for a database. If you want to know what docker is, check this [link](https://guillim.github.io/docker/2018/11/18/docker-hands-on-intro.html) out.



Tested Configuration:  
`MacOS:  Sierra 10.12.06`  
`Docker: 18.09.2 CE`  
`Docker image version of postgres: 9.6`  
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

# 2. Using the Postgres Image

First, create a new folder by typing :
```bash
mkdir docker_folder
cd docker_folder
```


Create a file called docker-compose.yml and then edit it:
```bash
sudo nano docker-compose.yaml
```
Inside, you can write this:
```yaml
version: '3'

services:
  db:
    image: postgres:9.6
    environment:
      PGDATA: /var/lib/postgresql/data/test_pgdata
      POSTGRES_USER: yourusername
      POSTGRES_PASSWORD: yourpassword
      POSTGRES_DB: test
    ports:
      - 5432:5432
```


##### PGDATA:  
This environment variable modifies the postgres container: inside the container, it will tell postgres where to store the data. In this case, inside the docker container of postgres, you will be able to see the data at the location `/var/lib/postgresql/data/test_pgdata`. So no worries if you don't have `/var/lib` defined on your machine -> it doesn't matter :)

# 3. Run your DATABASE

```bash
docker-compose run --service-ports db
```

Now you can access your database using a GUI like [psequel](http://www.psequel.com/)

![psquel](/assets/img/psequel1.png)

In the GUI, you can click on the tab "query", and Run this query:
```SQL
CREATE TABLE test_table
(
    id INT PRIMARY KEY NOT NULL,
    email VARCHAR(255)
)
```

refresh the GUI and you should see the Table. Good. It's working: you cas see `test_table` on the left!

![psquel](/assets/img/psequel2.png)


## So, what's the problem ?
Well, if you exit your docker, and launch it again, you will see that your table disapeared: all data was deleted -> that's because data isn't persistent yet.

![psquel](/assets/img/psequel3.png)

#### Why is it important?
If you want to keep your data, you need to bypass this issue:
- In case your docker crashes
- You want to update postgres from version 9 to version 10
- You want to restart your docker_folder
- ...

#### Is my data really lost ?

Well, not exactly. The postgres image comes with a default [_docker VOLUME_](https://docs.docker.com/storage/volumes/). So, when you run a postgres container, it creates its own volume and stores data in there.  
If you want to see the name of the volume attached to your container, type `docker container inspect db`

You will see a big all the configuration for your container. Look for this part:
```bash
"Mounts": [
            {
                "Type": "volume",
                "Name": "d57756a458346d0f5727278ea0b5a688b5b591c1c79dbb1c6791969c8f1402e8",
                "Source": "/var/lib/docker/volumes/d57756a458346d0f5727278ea0b5a688b5b591c1c79dbb1c6791969c8f1402e8/_data",
                "Destination": "/var/lib/postgresql/data",
                "Driver": "local",
                "Mode": "",
                "RW": true,
                "Propagation": ""
            }
        ],
```

Three important elements:
- Source: your machine path, where it is physically stored on your machine
- Destination: your PGDATA
- Name: the name of the volume (you should see it also typing `docker volume ls`)

So you data stays inside the volume attached to your container. But Each new container has its new volume, that's why it looks like you lost your data. In case you need to get a volume back, you can attach a new container to an existing volume using this  
`docker run -v d57756a458346d0f5727278ea0b5a688b5b591c1c79dbb1c6791969c8f1402e8:/var/lib/postgresql/data`  
Learn more by reading the [offical doc](https://docs.docker.com/storage/volumes/)



# 4. Persistent Data

There are two options for having data persistent.

### 1 - Use a nemed Docker Volume
Requirement: Please read the paragraph _Is my data really lost ?_ above.   

You want to create a _docker VOLUME_ with a specific name (for instance _datavolume_), instead of an auto-generated name like _d57756a458346d0f5727278ea0b5a688b5b591c1c79dbb1c6791969c8f1402e8_

Now, to every new created container, you attach the same volume _datavolume_ containing your data. This is how: in our docker-compose file we define the volume inside db, and we declare the volume in the volumes area (otherwise you'll have an error `no declaration was found in the volumes section`).

```yaml
version: '3'

services:
  db:
    image: postgres:9.6
    environment:
      PGDATA: /var/lib/postgresql/data/test_pgdata
      POSTGRES_USER: yourusername
      POSTGRES_PASSWORD: yourpassword
      POSTGRES_DB: test
    volumes:
      - datavolume:/var/lib/postgresql/data/test_pgdata
    ports:
      - 5432:5432

volumes:
  datavolume:
    driver: local
```

Note: The last line “driver: local” is completely optional.

Advantage of this way:   
you can reuse a docker volume, and share it across multiple services.



### 2 - File mount

This time, no need to define the last part of the yml file: the top level _volumes_ key

```yaml
version: '3'

services:
  db:
    image: postgres:9.6
    environment:
      PGDATA: /var/lib/postgresql/data/test_pgdata
      POSTGRES_USER: yourusername
      POSTGRES_PASSWORD: yourpassword
      POSTGRES_DB: test
      volumes:
        - /usr/local/var/postgres/data/test_pgdata:/var/lib/postgresql/data/test_pgdata
    ports:
      - 5432:5432
```
Note: you can also specify relative paths, but they should always begin with `.` or `..`


# 5. Full volumes definition
There is a more complete, detailed way to define volumes. The docker documentation is pretyy clear, here is a sample:

```yaml
version: "3.7"
services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - type: volume
        source: mydata
        target: /data
        volume:
          nocopy: true
      - type: bind
        source: ./static
        target: /opt/app/static

networks:
  webnet:

volumes:
  mydata:
```

As you can see on this example there is one file bind (static) and one volume definition (mydata)  
type: volume or bind (other options exists but are less used)  
target: always a path (refers to path inner the container)  
source: path if bind, name of volume otherwise  

# Ressources:

Guide: [linuxhint](https://linuxhint.com/run_postgresql_docker_compose/)  
