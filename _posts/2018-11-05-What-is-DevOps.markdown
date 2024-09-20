---
layout: blog
title: "What is DevOps"
date: 2018-11-05 19:22:48 +0100
categories: devops
comments: true
thumbnail: /assets/img/devops_1.jpg
---

Want to get **an overview of DevOps**, this article is for you. We will cover basic description of what it is, and the main advantages.

# What is DevOps

When your startup gets bigger, your tech team probably becomes a two person team:
One dev for the **software development** [he creates the frontend of your app for instance], and one ops for the **IT operations** [he pushes the frontend app online making sure it works fine. In case the app has a problem, it needs to report it to the dev]

A few words about the IT operations guy: deploying features is part of his job, so is monitoring the production version of the app (CPU usage of your servers, the MEM cache, runtime errors...)

![devops](/assets/img/devops_1.jpg "dev VS ops")

There is one issue here: the dev always want to push new features, and fast. On the other end, the ops kind of think differently: the more push = the more potential live problems

### Here is the solution: **the devops**

**The main objective is simple**: shorten the time between a new feature creation, and the moment the feature is live. In other words, devops aims to push a new release in production faster than before.

Question, devops = method or person ? Well, if your team is small the DevOps will be this guy. When your team grows, DevOps refers to the methods, principles and the team in charge of it.

![devops](/assets/img/devops_0.jpg "dev VS ops")

# DevOps tools

First, the must have: **Docker**
It will help to set up dev environment quickly (quicker productivity for new employee for instance)
It will allow you to choose your IT Infrastructure for the good reasons since your dev app aren't related any longer to the environement

Then there are a few tools you can look at:

### Deploy

- Ansible
- Puppet
- Chef + Docker (tell your machine to setup python + mysql)
- **Kubernetes + Docker** (most effective in my opinion, at that time, since it can even launch a new machine itself in case CPU gets to high on you machines for instance, or kill a machine when you don't need it anymore)

### Continuous Integration

- Jenkins CI
- CircleCI
- Travis CI
- GitLab CI

# DevOps classic environments

1. **Dev** : development of new features
2. **Test** : test the integration with latest Prod code
3. **Staging** : test the integration with latest Prod code + context (database etc...). closer to the prod env
4. **Prod** : live version
