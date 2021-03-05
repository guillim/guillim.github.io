---
layout: default
title:  "First weeks as CTO"
date:   2021-03-03 03:22:48 +0100
categories: cto
comments: true
---

In the process of onboarding a new startup, I had to question myself on what to do at the very begining. Like everyone, I did some research, talked to friends who are CTOs or dev. Here is a quick list of topics and areas the new CTO should tackle first.  

One important thing to consider : the size and maturity of the startup you are onboarding, since you'll have very different approaches regarding the maturity of the already existing tech. In my case, **the prodcut doesn't exist yet**, we are still at a very **early stage**. If you are onboarding a more mature team, some topics might be not appropriate/missing (ex: code audit & upgrading technologies)

# You are part of something
First, understand your position & its boundries

* **list your responsabilities** and what's not
  * tech (technos used, archi, infra, software, devops, security, application support, team management)
  * product (roadmap, priorisation, UX, UI)
  * data (Data engineering, science & viz)
* **meet everyone**: your associates, your team members, cutomers & listen to their **opinions/feedbacks**
* get **closer to other CTOs**: they have been through all the topics already
* write down your **knowledge** : write a blog, notes on notion... you must be able to read it later, and share it to someone


# Organisation
It is your role to create the **structure for your tech team to be efficient**. Subsequently, it defines the **managmenent style** you aim for. At a very ealry stage, don't overthink it: 3 devs don't require well-defined organisations. But soon, you'll have to **split your tech team** into smaller crews, and you better have anticipated this. Main reason: an organisation require **cultural values** _(ex: autonomy)_ shared by your team. To give an example: one of the reason Agile methods fail is when people don't identify themselves to its values. Sometimes you can't change people, so better recruit them carefully with this topic in mind. Keep in mind that the organisation is alive: it evolves with your team size.

**Values**: on top of your enterprise culture, try to find pilars for your product and they will drive its development.  
_ex: reliability & velocity  

* create a process for **people dispatching** into teams with clear scopes, setup a routine for **team refactoring**. Check the holacracy ideas in the ref bellow: true freedom ends where another begins, so clarify bounderies.
* clarify your **hierarchy mode**:
  for instance
  * Vertical   => CTO > lead dev > dev (harder to stimulate your team when your CTO looks distant, at N+4 level)
  * Horizontal => CTO = dev (prefered)
* make it nice for your team to work _(ex: fun, food, afterwork...)_
* Set up a list of tools for work & communication (chat on Slack, important structural decision on GitHub, knowledge base on Notions, brainstorm online with a post-it app, use template for meetings request). See this [list of tool proposal](assets/Tools-for-CTO.md)

Note: asynchronous communication (as cultural values) has impact on your orgniastion. you will then choose appropriates tools and decision making process for this to operate. It brings great values, allowing anyone to be listened to and maturing its opinion before sharing it. It also avoids interruptions.

### Product Managment - Agility
This goes down to handling project managmenent. Most of the time the CTO tries to gather crew of maximum size 8 persons. Then you have two options :
* trust self-organisation for your crews (my prefered)
* impose a fixed organisation.

There are two big method I know of :
* Kanban
* Scrum

Before detailing, let's talk about a few concepts:
- roadmap: For your crew, the main features to be developed in the next weeks/months (timeline depends on the CTO)
- ticket backlog: next tasks to be developed (taking less than 1 day, otherwise split it), sort by **priority**, **assigned** to a dev
- ticketing tool : Trello, Notions... The main tool you are happy to work with for dealing with your tasks. Enables transparent and painless report. Usually on the format : todo | doing | pb | done

Main differences between Kanban and scrum:
-  _sprint for scrum_ : work is released every two weeks (timeframe can change) in Scrum. It's a continuous release for Kanban
- _composition of the crew_ : only devs in Kanban (one of them takes ownership of the project managment) while in Scrum you have typically 1 coach, 1 product owner, 1 designer and 3 devs.

Some methods can't apply to your team, or will require recruitements. Pay attention to that.  

Also, be very careful to avoid a systemic micro-management

There are many documentation online for Agile methodology. Feel free to dig.

### Product roadmap
Keep in mind you are still early stage, so you need to find a market fit as fast as possible for your product. Focus on the essential.  

There are different methods for doing so. But they all end up with you facing a backlog of ideas for your product. Choose the main areas (group of ideas) that you want in production in 3 months. The Scrum fans will use a userStoryMap, but any other ways exist. The person in charge of this job can be called by different names : product owner, product manager, and also CTO at the begining.


# Recruitement
Crucial, especially for the first core team ! You **cannot mess the 5 first recruits**. They must:
- be aligned with your **culture of work**
- **fit with you team**
- excel **technically** & same Level as the rest of your team  

Use it to bring missing abilities from the outside world  

Recruitement is a huge topic, please refer to link below or dig on specific ressources. I cannot write more here. In one sentence: _can you see in them as CTO in 5 years ?_

My opinion : after the first devs, hire a fullstack designer (confident to do UX & UI). In the meantime, use freelances before you get the appropriate one (can also be a way to find your proper candidate).

For Early stage startups, the main concern will be **sourcing good candidates**. Find what makes you sexy for them (, working with you, your company value proposition), and where they can hear about you (meetups, podcast, blog...).

# Technology

That's entirely up to you.

* Be the **architect**
* Choose appropriate **technologies**
* Decide to **make or Buy**  (see my [List of tools](/assets/Tools-for-CTO.md))

# Communicate

* **Lead**. Fill your team with **energy** _ex: work with your team, inspire them every week, create common goals, excitement, challenges, rewards_
* **Spread your vision** do regular all-hands meeting (every quarter for instance) for a **tech vision and strategy update** : explain how your tech choices can implement it
* ask for advice, including leadership, from your colleagues, regardless of their level or experience. You can learn from anyone. This also encourages your colleagues to become leaders.


# Culture

* list **3 keywords** defining your way of work _ex: autonomy, kindness, asynchronous & transparent communication_, even better create a manifest (see References). This has a huge impact on **recruitment**. We could have picked efficiency, proximity... : but you need to make choose the most important for your organisation.
* ask ppl how happy they are & how to improve it
* respect a good life/work balance.

# Be Business focused
In the end, you report to your shareholders. Make sure you can provide the numbers they expect.

* List the **success metrics** for your company, and make sure you can calculate them.
* List sub-metrics if applicable, so that your team can identify better to it

This should be a regular process : after a few months it's time for an update => drop outdated metrics, add new ones !


# Other topics
* Measure run vs build
* control your time:
  * try a weekly routine (begining with a chat with your associates ? Reserve friday afternooon for recruitment interviews...)
  * try a daily routine (with blocks of time, and using the pomodoro technique for instance)
  * trust people and give you free time to think
* Implement a performance evaluation and career development system.

# In 3 words
If I have to give only 3 words, to summarize an early stage CTO:
* architect (team & tech)
* recruiter
* inspire

# Reference
curated list of ressources [Awsome CTO on GitHub](https://github.com/kuchin/awesome-cto)  
@Spotify Agile organisation [Praveen blog](https://blog.praveen.science/my-experience-on-spotify-agile-methodology/#squads)  
Manifest of enterprise culture [toucantoco](https://toucantoco.com/blog/nos-5-valeurs-startup-dataviz/)  
Examples of cultural values & recruitment tips [Alab blog](https://blog.alan.com/conference/people-talks-1-culture-dentreprise-definir-vos-valeurs-pour-recruter)  
Rajiv Pant's Linkdin post [90 Day Plan for a CTO in a New Job](https://www.linkedin.com/pulse/90-day-plan-cto-new-job-rajiv-pant/)  
Rajiv Pant's blog [career chart example](https://www.rajiv.com/blog/2012/12/17/tech-career-tracks-v2/)  
Roadmap using Story mapping [by Andrea Gigante](https://medium.com/@andrea.gigante/creating-an-agile-roadmap-using-story-mapping-b823c0a41da1)  
Book Frederic Laloux [reinventing organizations on koober](https://koober.com/fr/fiche/r%C3%A9sum%C3%A9-de-reinventing-organizations)  
Holacracy introduction for new management style [Brian Robertson's Tedx](https://www.youtube.com/watch?v=tJxfJGo-vkI)
