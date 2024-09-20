---
layout: blog
title: "Airflow quickstart"
date: 2020-03-21 03:22:48 +0100
categories: python
comments: true
thumbnail: /assets/img/thumbnails/4.jpg
---

A short introduciton to **Airflow** and quick list of useful references.  
Tested Configuration:  
`Linux:  Ubuntu 18.04`

# Quickstart

I recommend the [official documentation](https://airflow.apache.org/docs/stable/start.html).

But, you may also find this tutorial a good complementary : [towardsdatascience](https://towardsdatascience.com/getting-started-with-apache-airflow-df1aa77d7b1b)

What to do next, well you can have a look at the [Airflow example pipeline](https://airflow.apache.org/docs/stable/tutorial.html) or check their "[how to](https://airflow.apache.org/docs/stable/howto/index.html)" out.

### Tip:

in production you will want to use the demonized version of airflow scheduler. It's easy, simply do `airflow scheduler -D` instead of `airflow scheduler`

# Change the SQLite default database for airflow

As a first step you will need to install some airflow plugins. Airflow maintains a list plugin [here](https://airflow.apache.org/docs/stable/installation.html).  
The official documentation is pretty good BUT : you may find these two ressources useful in order to do it

1. about `sql_alchemy_conn` : [medium](https://medium.com/@xnuinside/quick-guide-how-to-run-apache-airflow-cluster-in-docker-compose-615eb8abd67a)
2. don't forget to change the _LocalExecutor_

# TroubleShooting

### bug with airflow scheduler

- During the launch of `airflow scheduler` if you encounter the bug like “Cannot allocate memory”   :  
  I suggest the answer 2 (SWAP) as a first testing measuer [stackoverflow](https://stackoverflow.com/questions/1367373/python-subprocess-popen-oserror-errno-12-cannot-allocate-memory). However note that in production it will slow down a lot.

- During the launch of `airflow scheduler`, if nothing happens (When you open your webserver, it says the scheduler isn't running):  
  got to your airflow folder and remove airflow-scheduler.pid as explained [here](https://stackoverflow.com/questions/46476246/issues-running-airflow-scheduler-as-a-daemon-process)

### Airflow logs take a lot of space on my disk

If you decide to keep your logs on your server (you can store them online instead, like on S3 for instance) you may encounter this issue : disk full. Indeed Airflow produces a lot of logs, and they can fill quickly your disk. On solution for that is to create DAGs to remove old logs. This issue was described and solved [here](https://stackoverflow.com/questions/49783850/remove-airflow-scheduler-logs).
Note: you'll find other interesting scripts for Airflow maintenance [here] (https://github.com/teamclairvoyant/airflow-maintenance-dags/).

# Reference

Official tutorial : [airflow](https://airflow.apache.org/docs/stable/start.html)  
“Cannot allocate memory”   : [stackoverflow -> allow swap](https://stackoverflow.com/questions/1367373/python-subprocess-popen-oserror-errno-12-cannot-allocate-memory)  
sql_alchemy_conn issue : [medium](https://medium.com/@xnuinside/quick-guide-how-to-run-apache-airflow-cluster-in-docker-compose-615eb8abd67a)  
Another interesting quickstart : [rosiehoyem](https://gist.github.com/rosiehoyem/9e111067fe4373eb701daf9e7abcc423)  
remove PID of airflow scheduler : [stackoverflow](https://stackoverflow.com/questions/46476246/issues-running-airflow-scheduler-as-a-daemon-process)  
Further tips : [airflow maintenance dags](https://github.com/teamclairvoyant/airflow-maintenance-dags)
