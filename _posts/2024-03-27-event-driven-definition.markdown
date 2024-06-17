---
layout: default
title: "Event Driven Definitions"
date: 2024-03-26 03:22:48 +0100
categories: event-driven
comments: true
thumbnail: /assets/img/thumbnails/3.jpg
---

Getting into event-driven architecture, you may have heard the term "event" a lot. Uncle bob highlitghted the differences behind the same concept in his [article](https://martinfowler.com/articles/201701-event-driven.html). Let's have a look

## Event Notification

You just pass the event, no payload. Light, simple, and efficient. It's like a notification where you don't need to know the details. If you want the details, check the database.

## Event-Carried State Transfer

You pass the event & the payload. It's like a notification with the details attached to it. You don't need to check the database. Reduces requests between services, and keeps track of the state by attaching the state as a payload.

## Event-Sourcing

All events are in the event store. Single source of truth. To be honest, I don't know much on this one, but I know there is a learning curve, and it adds complexity.

## CQRS

Reading the DB is done differently than writing to the DB. Could be different languages. Could even be different DB. You can scale them independently

### Resources

- 👨🏻‍💻 [uncle bob](https://martinfowler.com/articles/201701-event-driven.html)
- Define an aggregate: too big ? too short ? entity & value object [kalele](https://kalele.io/wp-content/uploads/2019/01/DDD_COMMUNITY_ESSAY_AGGREGATES_PART_1.pdf)
- Value Object [by Martin Fowler](https://martinfowler.com/bliki/ValueObject.html)
- [Demeter Law](https://medium.com/vattenfall-tech/the-law-of-demeter-by-example-fd7adbf0c324)
