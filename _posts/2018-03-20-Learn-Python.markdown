---
layout: default
title:  "Learn Python"
date:   2018-03-20 03:22:48 +0100
categories: python
---

You want to learn **Python 3** ? Here is what you can do  
Tested Configuration:  
`MacOS:  Sierra 10.12`  
`Python: 3`  
`Jupyter notebook: 5.4.0`  

#  Note

[comment]: <> https://gist.githubusercontent.com/kenjyco/69eeb503125035f21a9d/raw/learning-python3.ipynb
The guide we will follow is available as a [Jupyter Notebook][guide]  
It is highly recommended to swith to the Jupyter Notebook, since it enables interactions with Python and therefore will show your the Result of the code.


## Python objects & Python variables

 * Everything in Python is an **object**

 * A **variable** is a name you specify in your code that maps to a particular **object**, object **instance**, or **value**.


Why using variables:
So that we can refer to things by names that make sense.

Variables names:
Only letters, `_`, or numbers (no spaces or other characters).
Must start with a letter or underscore

<hr>

## Objects types

Some of the basic python object types include:

- **int** ex: `10`, `-3`
- **float** ex: `7.41`, `-0.006`
- **str** ex: `'string with single quotes'`, `"string with double quotes"`
- **bool** ex: `True`, `False`
- **NoneType** ex: `None`

<hr>

## Basic operators

Some of the basic Python operators include:

- arithmetic operators: **+**, **-**, **\***, **/**, __\*\*__ (exponent)
- assignment operators **=**, **+=**, **-=**, **\*=**
- comparison operators **==**, **!=**, **<=**, **>=**, **>**, **<**


Operators with **higher precedence** are evaluated **first**, and operators with the **same precedence** are evaluated from **left to right**.

See https://docs.python.org/3/reference/expressions.html#operator-precedence


```python
# Assigning some numbers to different variables
num1 = 10
num2 = -3
num3 = 7.4
num4 = -.6
num5 = 3
num6 = 7
num7 = 70.70
```


```python
# Addition
num1 + num2
```


```python
# Subtraction then multiplication
( num3 - num4 ) * num5

```


```python
# Exponent
num5 ** num6
```


```python
# Increment existing variable
num7 += 4
num7
```


```python
# Decrement existing variable
num6 -= 2
num6
```


```python
# Multiply & re-assign
num3 *= 5
num3
```


```python
# Assign the value of an expression to a variable
num8 = num1 + num2 * num3
num8
```


```python
# Are these two expressions equal to each other?
num1 + num2 == num5
```


```python
# Are these two expressions not equal to each other?
num3 != num4
```


```python
# Is the first expression less than the second expression?
num5 < num6
```


```python
# Is this expression True?
5 > 3 > 1
```


```python
# Is this expression True?
5 > 3 < 4 == 3 + 1
```


```python
# Assign some strings to different variables
simple_string1 = 'an example'
simple_string2 = "oranges "
```


```python
# Addition
simple_string1 + ' of using the + operator'
```


```python
# Notice that the string was not modified
simple_string1
```


```python
# Multiplication
simple_string2 * 4
```


```python
# This string wasn't modified either
simple_string2
```


```python
# Are these two expressions equal to each other?
simple_string1 == simple_string2
```


```python
# Are these two expressions equal to each other?
simple_string1 == 'an example'
```


```python
# Add and re-assign
simple_string1 += ' that re-assigned the original string'
simple_string1
```


```python
# Multiply and re-assign
simple_string2 *= 3
simple_string2
```


```python
# Note: Subtraction, division, and decrement operators
# do not apply to strings.
```

## Basic containers

Note: **mutable** objects can be modified after creation. **immutable**  cannot  
Note: Containers are objects used to group other objects

The basic container types include:

- **str** (immutable; indexed by integers; items are stored in the order they were added)
- **list** (mutable; indexed by integers; items are stored in the order they were added)  
ex: `[3, 5, 6, 3, 'dog', 'cat', False]`
- **tuple** (immutable; indexed by integers; items are stored in the order they were added)  
ex: `(3, 5, 6, 3, 'dog', 'cat', False)`
- **set** (mutable; not indexed at all; items are NOT stored in the order they were added; can only contain immutable objects; does NOT contain duplicate objects)  
ex: `{3, 5, 6, 3, 'dog', 'cat', False}`
- **dict** (mutable; key-value pairs are indexed by immutable keys; items are NOT stored in the order they were added)  
ex: `{'name': 'Jane', 'age': 23, 'fav_foods': ['pizza', 'fruit', 'fish']}`


Strings, lists, and tuples are all **sequence types** that can use the `+`, `*`, `+=`, and `*=` operators.


```python
# Assign some containers to different variables
list1 = [3, 5, 6, 3, 'dog', 'cat', False]
tuple1 = (3, 5, 6, 3, 'dog', 'cat', False)
set1 = {3, 5, 6, 3, 'dog', 'cat', False}
dict1 = {'name': 'Jane', 'age': 23, 'fav_foods': ['pizza', 'fruit', 'fish']}
```


```python
# Items in the list object are stored in the order they were added
list1
```


```python
# Items in the tuple object are stored in the order they were added
tuple1
```


```python
# Items in the dict object are not stored in the order they were added
dict1
```


```python
# Items in the set object are not stored in the order they were added
# Also, notice that the value 3 only appears once in this set object
set1
```


```python
# Items in the dict object are not stored in the order they were added
dict1
```


```python
# Add and re-assign
list1 += [5, 'grapes']
list1
```


```python
# Add and re-assign
tuple1 += (5, 'grapes')
tuple1
```


```python
# Multiply
[1, 2, 3, 4] * 2
```


```python
# Multiply
(1, 2, 3, 4) * 3
```


```python
num10 = 10
```


```python
# Add and re-assign
tuple1 += (num10, 'test')
tuple1
```


```python
#re assign num10
num10 = 189
```


```python
# see that tupl didn't change: it is immutable
tuple1
```

## Access data: containers**[subscript notation]**

- **strings**, **lists**, and **tuples** are indexed by integers, **starting at 0**
  - also support accesing a range of items: **slicing**
  - also support **negative indexing** to start at the back
- **dicts** are indexed by their keys
- **sets** are not indexed, so we cannot use subscript notation to access data elements.


```python
# Access the first item in a sequence
list1[0]
```


```python
# Access the last item in a sequence
tuple1[-1]
```


```python
# Access a range of items in a sequence
simple_string1[3:8]
```


```python
# eevrything until le last 3rd element (not including it)
tuple1[:-3]
```


```python
# everything from the 4th element, including it
list1[4:]
```


```python
# Access an item in a dictionary
dict1['name']
```


```python
# Access an element of a sequence in a dictionary
dict1['fav_foods'][2]
```

## Python functions

A **function** is a Python object that **performs an action** or / and **return another object**.   
You can pass **arguments** to it: these arguments are treated like variables.

## Python built-in functions

Here is a small sample of them:

- **`type(obj)`** to determine the type of an object
- **`len(container)`** to determine how many items are in a container
- **`callable(obj)`** to determine if an object is callable
- **`sorted(container)`** to return a new list from a container, with the items sorted
- **`sum(container)`** to compute the sum of a container of numbers
- **`min(container)`** to determine the smallest item in a container
- **`max(container)`** to determine the largest item in a container
- **`abs(number)`** to determine the absolute value of a number
- **`repr(obj)`** to return a string representation of an object

Complete list of built-in functions: https://docs.python.org/3/library/functions.html


```python
# Determine the type of an object
type(simple_string1)
```


```python
# Determine how many items are in a container
print( len(dict1) )
print( len(simple_string2) )
```


```python
# Use the callable() function to determine if an object is callable
print(' callable(len)   is ', callable(len) )

# Use the callable() function to determine if an object is callable
print(' callable(dict1) is ', callable(dict1) )
```


```python
# Return a new list from a container, number sorted
sorted([10, 1, 3.6, 7, 5, 2, -3])
```


```python
# Return a new list from a container, strings sorted
# Note: Capitalized strings come first
sorted(['dogs', 'cats', 'zebras', 'Chicago', 'California', 'ants', 'mice'])
```


```python
# Return a bug for mixed type 'str' and 'int' :  you cannot mix those
sorted([3, 'cats', 'zebras', 5, 'California', 'ants', 'mice'])
```


```python
# Sum of numbers
sum([10, 1, 3.6, 7, 5, 2, -3])
```


```python
# Smallest number
min([10, 1, 3.6, 7, 5, 2, -3])
```


```python
# First with alphabet order
min(['g', 'z', 'a', 'y'])
```


```python
# Largest number
max([10, 1, 3.6, 7, 5, 2, -3])
```


```python
# Largest item in a string container: returns the last letter in the alphabet order
max('gibberish')
```


```python
# Absolute value of a number
print ( abs(10) )
print ( abs(-12) )
```


```python
# Use the repr() function to return a string representation of an object
repr(set1)
```

## Python object attributes

How  to access an attribute of an object: `obj.attribute`

Object attribute which is a callable, is called a **method**. Same as a function, but bounded to an object.

Object attribute which isn't a callable, is called a **property**. It's just a piece of data about the object, that is itself another object.

The built-in function **`dir()`**  returns a list of an object's attributes.

<hr>


```python
a_string = 'tHis is a sTriNg'

# list all atributes, including pre-defined methods from python like __method__
dir(a_string)
```

**\_\_method\_\_**: the double underscore methods are special method names used by Python.   
As far as one’s concerned, this is just a convention. It's a way for the Python system to use names that won’t conflict with user-defined names. You will typically override these methods.
For example, you often override the __init__ method when writing a class.

## Some methods on string objects

- **`.capitalize()`** to return a capitalized version of the string (only first char uppercase)
- **`.upper()`** to return an uppercase version of the string (all chars uppercase)
- **`.lower()`** to return an lowercase version of the string (all chars lowercase)
- **`.count(substring)`** to return the number of occurences of the substring in the string
- **`.startswith(substring)`** to determine if the string starts with the substring
- **`.endswith(substring)`** to determine if the string ends with the substring
- **`.replace(old, new)`** to return a copy of the string with occurences of the "old" replaced by "new"


```python
# Return a capitalized version of the string
a_string.capitalize()
```


```python
# Return an uppercase version of the string
a_string.upper()
```


```python
# Return a lowercase version of the string
a_string.lower()
```


```python
# Notice that the methods called have not actually modified the string
a_string
```


```python
# Count number of occurences of a substring in the string
a_string.count('i')
```


```python
# Count number of occurences of a substring in the string after a certain position
a_string.count('i', 7)
```


```python
# Count number of occurences of a substring in the string
a_string.count('is')
```


```python
# Does the string start with 'this'?
a_string.startswith('this')
```


```python
# Does the lowercase string start with 'this'?
a_string.lower().startswith('this')
```


```python
# Does the string end with 'Ng'?
a_string.endswith('Ng')
```


```python
# Return a version of the string with a substring replaced with something else
a_string.replace('is', 'XYZ')
```


```python
a_string
```


```python
# Return a version of the string with a substring replaced with something else
a_string.replace('i', '!')
```


```python
# Return a version of the string with the first 2 occurences a substring replaced with something else
a_string.replace('i', '!', 2)
```

## Some methods on list objects

- **`.append(item)`** to add a single item to the list
- **`.extend([item1, item2, ...])`** to add multiple items to the list
- **`.remove(item)`** to remove a single item from the list
- **`.pop()`** to remove and return the item at the end of the list
- **`.pop(index)`** to remove and return an item at an index


```python
a_list = ['string1',45,100,'another string',1000]
type(a_list)
```


```python
# note that is actually modifies the original object, and does not return a copy
a_list.remove(100)
a_list
```


```python
a_list.pop()
```


```python
a_list
```

## Some methods on set objects

- **`.add(item)`** to add a single item to the set
- **`.update([item1, item2, ...])`** to add multiple items to the set
- **`.update(set2, set3, ...)`** to add items from all provided sets to the set
- **`.remove(item)`** to remove a single item from the set
- **`.pop()`** to remove and return a random item from the set
- **`.difference(set2)`** to return items in the set that are not in another set
- **`.intersection(set2)`** to return items in both sets
- **`.union(set2)`** to return items that are in either set
- **`.symmetric_difference(set2)`** to return items that are only in one set (not both)
- **`.issuperset(set2)`** does the set contain everything in the other set?
- **`.issubset(set2)`** is the set contained in the other set?


```python
a_set = {'string1',45,100,'another string',1000}
type(a_set)
```


```python
a_set.update(['newItem1','newIte2'])
```


```python
a_set
```


```python
a_set.issuperset({45})
```


```python
dir(a_set)
```

## Some methods on dict objects

- **`.update([(key1, val1), (key2, val2), ...])`** to add multiple key-value pairs to the dict
- **`.update(dict2)`** to add all keys and values from another dict to the dict
- **`.pop(key)`** to remove key and return its value from the dict (error if key not found)
- **`.pop(key, default_val)`** to remove key and return its value from the dict (or return default_val if key not found)
- **`.get(key)`** to return the value at a specified key in the dict (or None if key not found)
- **`.get(key, default_val)`** to return the value at a specified key in the dict (or default_val if key not found)
- **`.keys()`** to return a list of keys in the dict
- **`.values()`** to return a list of values in the dict
- **`.items()`** to return a list of key-value pairs (tuples) in the dict


```python
a_dict = {'key1': 'value1','key2': 'value2','key3': 'value3'}
```


```python
a_dict.keys()
```


```python
a_dict.values()
```


```python
a_dict.get('key2')
```


```python
a_dict['key2'] = 'value2_modified'
```


```python
a_dict
```

## Arguments : Positional VS keyword

**positional arguments**: you must provide them in the order that the function defined them  
**keyword arguments**: you provide the arguments in any order, as long as you specify each argument's name

You can call a function or a method like this:

- `func()`: Call with no arguments
- `func(arg)`: Call with one positional argument
- `func(arg1, arg2)`: Call with two positional arguments
- `func(kwarg=value)`: Call with one keyword argument
- `func(kwarg1=value1, kwarg2=value2)`: Call with two keyword arguments
- `func(arg1, arg2, kwarg1=value1)`: Call with positonal arguments and keyword arguments
- `obj.method()`: Same thing as for `func()`


Important: when using positional & keyword arguments, **positional arguments must come first**.


```python
def sum(arg1,arg2):
    return arg1 / arg2
sum(1,2)
```


```python
# changing the order changes the result
sum(2,1)
```


```python
def sum(kwarg1, kwarg2):
    return kwarg1 / kwarg2
sum(kwarg1 = 2, kwarg2 = 1)
```


```python
# changing the order does not changes the result
sum(kwarg2 = 1, kwarg1 = 2)
```


```python
sum(kwarg2 = 2, kwarg1 = 1)
```

# Loops

## for


```python
# Note: xrange no longer exist in python 3
for x in range(0, 3):
    print( "iteration number %d" % (x) )
```

## for Else


```python
# exits with something
for x in range(0, 3):
    print( "iteration number %d" % (x) )
else:
    print('end %d' % x)
```

## for in


```python
collection = ['hey', 5, 'd']
for x in collection:
    print(x)
```

## for in - sub List


```python
list_of_lists = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
for list in list_of_lists:
    for x in list:
        print(x)
    else:
        print('end of sublist at x = %d' % x)
```

## while


```python
x = 1
while x < 5:
    print ("iteration number %d" % (x))
    x += 1
```

## Convert objects

The basic types and containers we have used so far all provide **type constructors**:

- `int()`
- `float()`
- `str()`
- `list()`
- `tuple()`
- `set()`
- `dict()`

To convert to another type, use the **type constructor** for the type you want, and pass in the object you have.


```python
a_num = 32
```


```python
str(a_num)
```


```python
a_string = 'string'
```


```python
# will fail because this conversion can't be done
int(a_string)
```

## Classes: Creating your own objects


```python
# Define a new class called `Thing` that is derived from the base Python object
class Thing(object):
    my_property = 'I am a "Thing"'


# Define a new class called `DictThing` that is derived from the `dict` type
class DictThing(dict):
    my_property = 'I am a "DictThing"'
```


```python
print(Thing)
print(type(Thing))
print(DictThing)
print(type(DictThing))
print(issubclass(DictThing, dict))
print(issubclass(DictThing, object))
```


```python
# Create "instances" of our new classes
t = Thing()
d = DictThing()
print(t)
print(type(t))
print(d)
print(type(d))
```


```python
# Interact with a DictThing instance just as you would a normal dictionary
d['name'] = 'Sally'
print(d)
```


```python
d.update({
        'age': 13,
        'fav_foods': ['pizza', 'sushi', 'pad thai', 'waffles'],
        'fav_color': 'green',
    })
print(d)
```


```python
print(d.my_property)
```

## References

- https://try.jupyter.org
- https://docs.python.org/3/tutorial/index.html
- https://docs.python.org/3/tutorial/introduction.html
- https://daringfireball.net/projects/markdown/syntax

<hr>




[guide]: https://anaconda.org/guillim/learning-python3/notebook
