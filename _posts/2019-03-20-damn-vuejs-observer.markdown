---
layout: default
title: "Damn VueJs Observer"
date: 2019-03-20 19:22:48 +0100
categories: vue
comments: true
thumbnail: /assets/img/thumbnails/3.jpg
---

This is a short note on handling VueJS Observer inside a component.

Tested Configuration:  
`VueJS: 2.6`

# The problem

Let's say you are inside a VueJS component (or in VueX component) and you make a `console.log(obj)`. Instead of the expectd result you see `[__ob__: Observer]`

### What is an Observer ?

> _That’s a special property added by Vue, it’s part of the Reactivity system which allows Vue to track data changes and react to them_  
> -- <cite> LinusBorg</cite>

You can read more [here](https://vuejs.org/v2/guide/reactivity.html).

### So when does this happen ?

It could happen that you are trying to use a reactive _props_, _computed_ or even trying to access _$store_ elements (without using _$getters_ for instance).

# The solution

This should be a quick fix (From Evan You, creator of VueJS):

```
var parsedyourElement = JSON.parse(JSON.stringify(this.yourElement))
console.log(parsedyourElement)
```

Note that you obviously loose reactivity doing so 😅

# Ressources:

[Evan You solution](https://github.com/vuejs/Discussion/issues/292)
