---
layout: default
title:  "Lambda function in python"
date:   2018-04-15 03:22:48 +0100
categories: python
comments: true
---

You heard about **Lambda function** in python, but you don't know what it is, and when to use them ? Here is a short explanation.  

##  What is a Lambda function

_"The lambda keyword in Python provides a shortcut for declaring small anonymous functions. Lambda functions behave just like regular functions declared with the  def keyword. They can be used whenever function objects are required."_  
[Dan Bader][dan]  


To sum up the difference for declaring the same function:
* this is a regular function  

      def example_function(x):  
          return x


* this is a lambda function  

      example_function = lambda x: x  


## When to use Lambda functions

Good practise is to use lambda function only for:  
* **super simple** functions  
AND  
* functions that **won't be reused** elsewhere

So a good example of a use of a Lambda function is inside _map_ definitions:

      numbers = [1, 2, 3]  
      squared_numbers = list(map(lambda x: x**2, numbers))  


[dan]: https://dbader.org/blog/python-lambda-functions
