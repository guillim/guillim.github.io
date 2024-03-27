---
layout: default
title:  "Orchestration VS Choregraphy"
date:   2024-03-26 03:22:48 +0100
categories: domain-driven-design
comments: true
---

Once you reached a point where you want to decouple your services, you have to choose between orchestration and choregraphy. This article will explain the difference between the two. And try to highlight pros / cons.


## Orchestration vs Choreography

Let's agree on a definition here : we are going to refer as services the decoupled **parts of my codebase** (ex: 2 microservices).  

In software development, Orchestration and choreography are two different architectural approaches commonly used with **loosely coupled services**. Decoupling services  end up with the following question : 
> How do my two **services communicate** with each other? 

##  Orchestration: 

Main difference : **Sync**, **Centralized**

Key points: 
   - Involves a centralized component (often called an orchestrator or coordinator) that coordinates the interactions between different services within a system.
   - There is a single point of control that manages the sequencing, scheduling, and invocation of services, typically based on predefined workflows or business logic.
   - The orchestrator is responsible for initiating actions, monitoring their progress, handling errors, and ensuring that the overall process or workflow is completed successfully.

Popular tools :
- [Apache Airflow](https://airflow.apache.org/), probably the most famous one
-  Kubernetes (with its ability to manage containers and services)
- [GCP workflows](https://cloud.google.com/workflows).
- AWS Step Functions (for orchestrating serverless functions)

## Choreography

Main difference : **Async**, **Collective intelligence**

Key points: 

   - Decentralized approach where a service communicates directly with other services.
   - There is no central controller or orchestrator. Instead, each service is responsible for reacting to events or messages it receives and taking appropriate actions.
   - Services publish events or messages to an event bus or a message broker. Other services subscribe to these events.
   - More loosely coupled approach, as services have more autonomy and can evolve independently without relying on a central point of control.
   
   
Popular tools for event-driven architectures / message brokers :
- Apache Kafka 
- RabbitMQ
- [Pub/Sub](https://cloud.google.com/pubsub) (GCP)

### Summary :
- Orchestration provides centralized control and visiblity, making it easier to manage complex workflows and enforce business rules. Error tracking is also simpler. It suits well for services that communicates very frequently together. However, it may introduce a single point of failure and can be less flexible as changes may require modifying the orchestrator.
- Choreography offers greater autonomy and flexibility for individual services, promoting loose coupling and scalability. However, it can be more complex (hard to understand) and reason about the system's behavior, especially as the number of services grows. It's definitly more scalable.

The choice between them depends on factors such as the complexity of the system, the level of control required, and the organization's constraints. A combination of both approaches may be used within a single system to achieve the desired balance between control and autonomy, but it adds a double complexity.



### Resources

- 👨🏻‍💻 [wallarm](https://www.wallarm.com/what/orchestration-vs-choreography)
- 🦁 [NestJS](https://docs.nestjs.com/microservices/basics)  microservices implementation