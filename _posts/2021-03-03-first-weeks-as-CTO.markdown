---
layout: default
title:  "First weeks as CTO"
date:   2021-03-03 03:22:48 +0100
categories: cto
comments: true
---

In the process of onboarding a new startup, I had to question myself on what to do at the very beginning. Like everyone, I did some research, talked to friends who are CTOs or dev. Here is a quick list of topics and areas the new CTO should tackle first. This is not a story: it's literally an **unsorted list of points you should think in advance before day one**.  

One important thing to consider : the size and maturity of the startup you are onboarding, since you'll have very different approaches regarding the maturity of the already existing tech. In my case, **the product doesn't exist yet**, we are still at a very **early stage**. If you are onboarding a more mature team, some topics might be not appropriate/missing (ex: code audit & upgrading technologies)

# You are part of something
First, understand your position & its boundaries

* **list your responsibilities** and what's not
  * tech (technos used, archi, infra, software, devops, security, application support, team management)
  * product (roadmap, prioritization, UX, UI)
  * data (Data engineering, science & viz)
* **meet everyone**: your associates, your team members, customers & listen to their **opinions/feedbacks**
* get **closer to other CTOs**: they have been through all the topics already
* write down your **knowledge** : write a blog, notes on notion... you must be able to read it later, and share it to someone


# Organization
It is your role to create the **structure for your tech team to be efficient**. Subsequently, it defines the **management style** you aim for. At a very early stage, don't overthink it: 3 devs don't require well-defined organizations. But soon, you'll have to **split your tech team** into smaller crews, and you better have anticipated this. Main reason: an organization require **cultural values** _(ex: autonomy)_ shared by your team. To give an example: one of the reason Agile methods fail is when people don't identify themselves to its values. Sometimes you can't change people, so better hire them carefully with this topic in mind. Keep in mind that the organization is alive: it evolves with your team size.

**Values**: on top of your enterprise culture, try to find pillars for your product, and they will drive its development.  
_ex: reliability & velocity  

* create a process for **people dispatching** into teams with clear scopes, set up a routine for **team refactoring**. Check the holacracy ideas in the ref bellow: true freedom ends where another begins, so clarify boundaries.
* clarify your **hierarchy mode**:
  for instance
  * Vertical   => CTO > lead dev > dev (harder to stimulate your team when your CTO looks distant, at N+4 level)
  * Horizontal => CTO = dev (preferred)
* make it nice for your team to work _(ex: fun, food, afterwork...)_
* Set up a list of tools for work & communication (chat on Slack, important structural decision on GitHub, knowledge base on Notions, brainstorm online with a post-it app, use template for meetings request). See this [list of tool proposal](/assets/Tools-for-CTO.md)

Note: asynchronous communication (as cultural values) has impact on your organization. You will then choose appropriates tools and decision-making process for this to operate. It brings great values, allowing anyone to be listened to and maturing its opinion before sharing it. It also avoids interruptions.

### Product Management - Agility
This goes down to handling project management. Most of the time the CTO tries to gather crew of maximum size 8 persons. Then you have two options :
* trust self-organization for your crews (my preferred)
* impose a fixed organization.

There are two big method I know of :
* Kanban
* Scrum

Before detailing, let's talk about a few concepts:
- roadmap: For your crew, the main features to be developed in the next weeks/months (timeline depends on the CTO)
- ticket backlog: next tasks to be developed (taking less than 1 day, otherwise split it), sort by **priority**, **assigned** to a dev
- ticketing tool : Trello, Notions... The main tool you are happy to work with for dealing with your tasks. Enables transparent and painless report. Usually on the format :  
| todo/backlog | doing | pb | done |

Main differences between Kanban and scrum:
-  _sprint for scrum_ : work is released every two weeks (timeframe can change) in Scrum. It's a continuous release for Kanban
- _composition of the crew_ : only devs in Kanban (one of them takes ownership of the project management) while in Scrum you have typically 1 coach, 1 product owner, 1 designer and 3 devs.

Some methods can't apply to your team, or will require hiring. Pay attention to that.  

Also, be very careful to avoid a systemic micro-management

There are many documentation online for Agile methodology. Feel free to dig.

### Product roadmap
Keep in mind you are still early stage, so you need to find a market fit as fast as possible for your product. **Focus on the essential**.  

There are **different methods** for doing so. But they all end up with you facing a **backlog of ideas** for your product. Choose the main areas (group of ideas) that you want in production in 3 months. The Scrum fans will use a userStoryMap, but other ways exist. The person in charge of this job can be called by different names : product owner, product manager, and also CTO at the beginning.

Ultimately, **share** your roadmap construction with your associates, and your team. This defines the purpose of the company, and everyone must adhere to it. You don't have to decide, but to organize the process defining the roadmap.  

# Hiring
Crucial, especially for the first core team ! You **cannot mess the 5 first recruits**. They must:
- be aligned with your **culture of work**
- **fit with your team**
- excel **technically** & same Level as the rest of your team, at least for the same grade (_ex: dev senior_)  

Use it to bring missing abilities from the outside world  

Hiring is a huge topic, please refer to link below or dig on specific resources. I cannot write more here. In one sentence: _can you see in them as CTO in 5 years ?_

My opinion : after the first devs, hire a fullstack designer (confident to do UX & UI). In the meantime, use freelances before you get the appropriate one (can also be a way to find your proper candidate).

For Early stage startups, the main concern will be **sourcing good candidates**. Find what makes you sexy for them (, working with you, your company value proposition), and where they can hear about you (meetups, podcast, blog...).

# Technology

That's entirely up to you.

* Be the **architect**
* Choose appropriate **technologies**
* Decide to **make or Buy**  (see my [List of tools](/assets/Tools-for-CTO.md))

# Lead

Fill your team with **energy** ! There are numerous ways : work with them, inspire them every week, create common goals, excitement, challenges, rewards...

**Spread your vision**, by doing regular all-hands meeting (every quarter for instance) for a **tech vision and strategy update** : explain how your tech choices can implement it

### Communicate
* **ask for advice**, including in your leadership, from your colleagues, regardless of their level or experience. You can learn from anyone. This also encourages your colleagues to step up.
* in the end, you report to your shareholders. Make sure you can provide the numbers they expect. **List the success metrics**, and sub-metrics, for your company, and make sure you can calculate them.
* implement a **feedback culture**. Dig into "Radical Candor" for instance _(see Bellow for a link)_ and use tools like [officevibe](https://officevibe.com/) for instance  


# Culture

* list **3 keywords** defining your way of work _ex: autonomy, kindness, asynchronous & transparent communication_, even better create a manifest (see References). This has a huge impact on **hiring**. We could have picked efficiency, proximity... : but you need to make choose the most important for your organization.
* ask people how happy they are & how to improve it
* respect a good life/work balance.


# Other topics
* Measure run vs build
* control your time:
  * try a weekly routine (beginning with a chat with your associates ? Reserve Friday afternoon for hiring interviews...)
  * try a daily routine (with blocks of time, and using the pomodoro technique for instance)
  * trust people and give you free time to think
* Implement a performance evaluation and career development system.

# In 3 words
If I have to give only 3 words, to summarize an early stage CTO:
* architect (team & tech)
* hire
* inspire

# Reference
curated list of resources [Awesome CTO on GitHub](https://github.com/kuchin/awesome-cto)  
@Spotify Agile organization [Praveen blog](https://blog.praveen.science/my-experience-on-spotify-agile-methodology/#squads)  
Manifest of enterprise culture [toucantoco](https://toucantoco.com/blog/nos-5-valeurs-startup-dataviz/)  
Examples of cultural values & hiring tips [Alab blog](https://blog.alan.com/conference/people-talks-1-culture-dentreprise-definir-vos-valeurs-pour-recruter)  
Rajiv Pant's Linkdin post [90 Day Plan for a CTO in a New Job](https://www.linkedin.com/pulse/90-day-plan-cto-new-job-rajiv-pant/)  
Rajiv Pant's blog [career chart example](https://www.rajiv.com/blog/2012/12/17/tech-career-tracks-v2/)  
Roadmap using Story mapping [by Andrea Gigante](https://medium.com/@andrea.gigante/creating-an-agile-roadmap-using-story-mapping-b823c0a41da1)  
Book Frederic Laloux [reinventing organizations on koober](https://koober.com/fr/fiche/r%C3%A9sum%C3%A9-de-reinventing-organizations)  
Holacracy introduction for new management style [Brian Robertson's Tedx](https://www.youtube.com/watch?v=tJxfJGo-vkI)  
Article about the [feedback culture](https://www.radicalcandor.com/introduce-radical-candor-feedback/)  
