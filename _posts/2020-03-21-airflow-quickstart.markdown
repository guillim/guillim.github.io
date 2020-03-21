---
layout: default
title:  "Airflow quickstart"
date:   2020-03-21 03:22:48 +0100
categories: python
comments: true
---

A short introduciton to **Airflow** and quick list of useful references.  
Tested Configuration:  
`Linux:  Ubuntu 18.04`  


# Quickstart
I recommend the [official documentation](https://airflow.apache.org/docs/stable/start.html).  

But, you may also find this tutorial a good complementary : [towardsdatascience](https://towardsdatascience.com/getting-started-with-apache-airflow-df1aa77d7b1b)  

What to do next, well you can have a look at the [Airflow example pipeline](https://airflow.apache.org/docs/stable/tutorial.html) or check their "[how to](https://airflow.apache.org/docs/stable/howto/index.html)" out.

# Change the SQLite default database for airflow

As a first step you will need to install some airflow plugins. Ariflow maintains a list plugin [here](https://airflow.apache.org/docs/stable/installation.html).  
The official documentation is pretty good BUT : you may find these two ressources useful in order to do it  
1. about `sql_alchemy_conn` : [medium](https://medium.com/@xnuinside/quick-guide-how-to-run-apache-airflow-cluster-in-docker-compose-615eb8abd67a)
2. don't forget to change the _LocalExecutor_

# TroubleShooting

During the launch of `airflow scheduler`  if you encounter the bug like “Cannot allocate memory”   :  
I suggest the answer 2 (SWAP) as a first testing measuer [stackoverflow](https://stackoverflow.com/questions/1367373/python-subprocess-popen-oserror-errno-12-cannot-allocate-memory). However note that in production it will slow down a lot.



# Reference

Official tutorial : [airflow](https://airflow.apache.org/docs/stable/start.html)  
“Cannot allocate memory”   : [stackoverflow -> allow swap](https://stackoverflow.com/questions/1367373/python-subprocess-popen-oserror-errno-12-cannot-allocate-memory)  
sql_alchemy_conn issue : [medium](https://medium.com/@xnuinside/quick-guide-how-to-run-apache-airflow-cluster-in-docker-compose-615eb8abd67a)  
Another interesting quickstart : [rosiehoyem](https://gist.github.com/rosiehoyem/9e111067fe4373eb701daf9e7abcc423)
