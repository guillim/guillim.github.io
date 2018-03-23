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

- combining: **and**, **or**, **not**  
- occurence operators: **in** and **not in**


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




    7




```python
# Subtraction then multiplication
( num3 - num4 ) * num5

```




    24.0




```python
# Exponent
num5 ** num6
```




    2187




```python
# Increment existing variable
num7 += 4
num7
```




    74.7




```python
# Decrement existing variable
num6 -= 2
num6
```




    5




```python
# Multiply & re-assign
num3 *= 5
num3
```




    37.0




```python
# Assign the value of an expression to a variable
num8 = num1 + num2 * num3
num8
```




    -101.0




```python
# Are these two expressions equal to each other?
num1 + num2 == num5
```




    False




```python
# Are these two expressions not equal to each other?
num3 != num4
```




    True




```python
# Is the first expression less than the second expression?
num5 < num6
```




    True




```python
# Is this expression True?
5 > 3 > 1
```




    True




```python
# Is this expression True?
5 > 3 < 4 == 3 + 1
```




    True




```python
# Assign some strings to different variables
simple_string1 = 'an example'
simple_string2 = "oranges "
```


```python
# Addition
simple_string1 + ' of using the + operator'
```




    'an example of using the + operator'




```python
# Notice that the string was not modified
simple_string1
```




    'an example'




```python
# Multiplication
simple_string2 * 4
```




    'oranges oranges oranges oranges '




```python
# This string wasn't modified either
simple_string2
```




    'oranges '




```python
# Are these two expressions equal to each other?
simple_string1 == simple_string2
```




    False




```python
# Are these two expressions equal to each other?
simple_string1 == 'an example'
```




    True




```python
# Add and re-assign
simple_string1 += ' that re-assigned the original string'
simple_string1
```




    'an example that re-assigned the original string'




```python
# Multiply and re-assign
simple_string2 *= 3
simple_string2
```




    'oranges oranges oranges '




```python
# Note: Subtraction, division, and decrement operators
# do not apply to strings.
```


```python
list_45_56 = [45,56]
num46 = 454
num46 in list_45_56
```




    False




```python
num46 = 45
num46 in list_45_56
```




    True



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




    [3, 5, 6, 3, 'dog', 'cat', False]




```python
# Items in the tuple object are stored in the order they were added
tuple1
```




    (3, 5, 6, 3, 'dog', 'cat', False)




```python
# Items in the dict object are not stored in the order they were added
dict1
```




    {'age': 23, 'fav_foods': ['pizza', 'fruit', 'fish'], 'name': 'Jane'}




```python
# Items in the set object are not stored in the order they were added
# Also, notice that the value 3 only appears once in this set object
set1
```




    {3, 5, 6, False, 'cat', 'dog'}




```python
# Items in the dict object are not stored in the order they were added
dict1
```




    {'age': 23, 'fav_foods': ['pizza', 'fruit', 'fish'], 'name': 'Jane'}




```python
# Add and re-assign
list1 += [5, 'grapes']
list1
```




    [3, 5, 6, 3, 'dog', 'cat', False, 5, 'grapes']




```python
# Add and re-assign
tuple1 += (5, 'grapes')
tuple1
```




    (3, 5, 6, 3, 'dog', 'cat', False, 5, 'grapes')




```python
# Multiply
[1, 2, 3, 4] * 2
```




    [1, 2, 3, 4, 1, 2, 3, 4]




```python
# Multiply
(1, 2, 3, 4) * 3
```




    (1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4)




```python
num10 = 10
```


```python
# Add and re-assign
tuple1 += (num10, 'test')
tuple1
```




    (3, 5, 6, 3, 'dog', 'cat', False, 5, 'grapes', 10, 'test')




```python
#re assign num10
num10 = 189
```


```python
# see that tupl didn't change: it is immutable
tuple1
```




    (3, 5, 6, 3, 'dog', 'cat', False, 5, 'grapes', 10, 'test')



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




    3




```python
# Access the last item in a sequence
tuple1[-1]
```




    'test'




```python
# Access a range of items in a sequence
simple_string1[3:8]
```




    'examp'




```python
# evrything until le last 3rd element (not including it)
tuple1[:-3]
```




    (3, 5, 6, 3, 'dog', 'cat', False, 5)




```python
# everything from the 4th element (including it)
list1[4:]
```




    ['dog', 'cat', False, 5, 'grapes']



Note: the **start is always included**, and the **end always excluded**. This makes sure that s[:i] + s[i:] is always full s


```python
# Access an item in a dictionary
dict1['name']
```




    'Jane'




```python
# Access an element of a sequence in a dictionary
dict1['fav_foods'][2]
```




    'fish'



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




    str




```python
# Determine how many items are in a container
print( len(dict1) )
print( len(simple_string2) )
```

    3
    24



```python
# Use the callable() function to determine if an object is callable
print(' callable(len)   is ', callable(len) )

# Use the callable() function to determine if an object is callable
print(' callable(dict1) is ', callable(dict1) )
```

     callable(len)   is  True
     callable(dict1) is  False



```python
# Return a new list from a container, number sorted
sorted([10, 1, 3.6, 7, 5, 2, -3])
```




    [-3, 1, 2, 3.6, 5, 7, 10]




```python
# Return a new list from a container, strings sorted
# Note: Capitalized strings come first
sorted(['dogs', 'cats', 'zebras', 'Chicago', 'California', 'ants', 'mice'])
```




    ['California', 'Chicago', 'ants', 'cats', 'dogs', 'mice', 'zebras']




```python
# Return a bug for mixed type 'str' and 'int' :  you cannot mix those
sorted([3, 'cats', 'zebras', 5, 'California', 'ants', 'mice'])
```


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-100-8ebd0f4060aa> in <module>()
          1 # Return a bug for mixed type 'str' and 'int' :  you cannot mix those
    ----> 2 sorted([3, 'cats', 'zebras', 5, 'California', 'ants', 'mice'])


    TypeError: '<' not supported between instances of 'str' and 'int'



```python
# Sum of numbers
sum([10, 1, 3.6, 7, 5, 2, -3])
```




    25.6




```python
# Smallest number
min([10, 1, 3.6, 7, 5, 2, -3])
```




    -3




```python
# First with alphabet order
min(['g', 'z', 'a', 'y'])
```




    'a'




```python
# Largest number
max([10, 1, 3.6, 7, 5, 2, -3])
```




    10




```python
# Largest item in a string container: returns the last letter in the alphabet order
max('gibberish')
```




    's'




```python
# Absolute value of a number
print ( abs(10) )
print ( abs(-12) )
```

    10
    12



```python
# Use the repr() function to return a string representation of an object
repr(set1)
```




    "{False, 3, 5, 6, 'dog', 'cat'}"



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




    ['__add__',
     '__class__',
     '__contains__',
     '__delattr__',
     '__dir__',
     '__doc__',
     '__eq__',
     '__format__',
     '__ge__',
     '__getattribute__',
     '__getitem__',
     '__getnewargs__',
     '__gt__',
     '__hash__',
     '__init__',
     '__init_subclass__',
     '__iter__',
     '__le__',
     '__len__',
     '__lt__',
     '__mod__',
     '__mul__',
     '__ne__',
     '__new__',
     '__reduce__',
     '__reduce_ex__',
     '__repr__',
     '__rmod__',
     '__rmul__',
     '__setattr__',
     '__sizeof__',
     '__str__',
     '__subclasshook__',
     'capitalize',
     'casefold',
     'center',
     'count',
     'encode',
     'endswith',
     'expandtabs',
     'find',
     'format',
     'format_map',
     'index',
     'isalnum',
     'isalpha',
     'isdecimal',
     'isdigit',
     'isidentifier',
     'islower',
     'isnumeric',
     'isprintable',
     'isspace',
     'istitle',
     'isupper',
     'join',
     'ljust',
     'lower',
     'lstrip',
     'maketrans',
     'partition',
     'replace',
     'rfind',
     'rindex',
     'rjust',
     'rpartition',
     'rsplit',
     'rstrip',
     'split',
     'splitlines',
     'startswith',
     'strip',
     'swapcase',
     'title',
     'translate',
     'upper',
     'zfill']



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




    'This is a string'




```python
# Return an uppercase version of the string
a_string.upper()
```




    'THIS IS A STRING'




```python
# Return a lowercase version of the string
a_string.lower()
```




    'this is a string'




```python
# Notice that the methods called have not actually modified the string
a_string
```




    'tHis is a sTriNg'




```python
# Count number of occurences of a substring in the string
a_string.count('i')
```




    3




```python
# Count number of occurences of a substring in the string after a certain position
a_string.count('i', 7)
```




    1




```python
# Count number of occurences of a substring in the string
a_string.count('is')
```




    2




```python
# Does the string start with 'this'?
a_string.startswith('this')
```




    False




```python
# Does the lowercase string start with 'this'?
a_string.lower().startswith('this')
```




    True




```python
# Does the string end with 'Ng'?
a_string.endswith('Ng')
```




    True




```python
# Return a version of the string with a substring replaced with something else
a_string.replace('is', 'XYZ')
```




    'tHXYZ XYZ a sTriNg'




```python
a_string
```




    'tHis is a sTriNg'




```python
# Return a version of the string with a substring replaced with something else
a_string.replace('i', '!')
```




    'tH!s !s a sTr!Ng'




```python
# Return a version of the string with the first 2 occurences a substring replaced with something else
a_string.replace('i', '!', 2)
```




    'tH!s !s a sTriNg'



#### string manipulations with format:


```python
# format function
print('We are the {} who say "{}!"'.format('knights', 'hi'))

print('{1} and {0}'.format('spam', 'eggs'))
print('{0} and {1}'.format('spam', 'eggs'))

print('This {food} is {adjective}.'.format(food='spam', adjective='absolutely horrible'))
```

    We are the knights who say "hi!"
    eggs and spam
    spam and eggs
    This spam is absolutely horrible.



```python
# '!a' (apply ascii()), '!s' (apply str()) and '!r' (apply repr()) can be used to convert the value
contents = 'eels'
print('My hovercraft is full of {}.'.format(contents))
print('My hovercraft is full of {!r}.'.format(contents))
```

    My hovercraft is full of eels.
    My hovercraft is full of 'eels'.



```python
# ':' + format allows greater control over how the value is formatted. Here, only three places after the decimal.
import math
print('The value of PI is approximately {0:.3f}.'.format(math.pi))

# print('The value of PI is approximately %5.3f.' % math.pi) is deprecated in python 3
```

    The value of PI is approximately 3.142.


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




    list




```python
# note that is actually modifies the original object, and does not return a copy
a_list.remove(100)
a_list
```




    ['string1', 45, 'another string', 1000]




```python
a_list.pop()
```




    1000




```python
a_list
```




    ['string1', 45, 'another string']



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




    set




```python
a_set.update(['newItem1','newIte2'])
```


```python
a_set
```




    {100, 1000, 45, 'another string', 'newIte2', 'newItem1', 'string1'}




```python
a_set.issuperset({45})
```




    True




```python
dir(a_set)
```




    ['__and__',
     '__class__',
     '__contains__',
     '__delattr__',
     '__dir__',
     '__doc__',
     '__eq__',
     '__format__',
     '__ge__',
     '__getattribute__',
     '__gt__',
     '__hash__',
     '__iand__',
     '__init__',
     '__init_subclass__',
     '__ior__',
     '__isub__',
     '__iter__',
     '__ixor__',
     '__le__',
     '__len__',
     '__lt__',
     '__ne__',
     '__new__',
     '__or__',
     '__rand__',
     '__reduce__',
     '__reduce_ex__',
     '__repr__',
     '__ror__',
     '__rsub__',
     '__rxor__',
     '__setattr__',
     '__sizeof__',
     '__str__',
     '__sub__',
     '__subclasshook__',
     '__xor__',
     'add',
     'clear',
     'copy',
     'difference',
     'difference_update',
     'discard',
     'intersection',
     'intersection_update',
     'isdisjoint',
     'issubset',
     'issuperset',
     'pop',
     'remove',
     'symmetric_difference',
     'symmetric_difference_update',
     'union',
     'update']



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




    dict_keys(['key1', 'key2', 'key3'])




```python
a_dict.values()
```




    dict_values(['value1', 'value2', 'value3'])




```python
a_dict.get('key2')
```




    'value2'




```python
a_dict['key2'] = 'value2_modified'
```


```python
a_dict
```




    {'key1': 'value1', 'key2': 'value2_modified', 'key3': 'value3'}



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




    0.5




```python
# changing the order changes the result
sum(2,1)
```




    2.0




```python
def sum(kwarg1, kwarg2):
    return kwarg1 / kwarg2
sum(kwarg1 = 2, kwarg2 = 1)
```




    2.0




```python
# changing the order does not changes the result
sum(kwarg2 = 1, kwarg1 = 2)
```




    2.0




```python
sum(kwarg2 = 2, kwarg1 = 1)
```




    0.5



# Loops

## for


```python
# Note: xrange no longer exist in python 3
for x in range(0, 3):
    print( "iteration number %d" % (x) )
```

    iteration number 0
    iteration number 1
    iteration number 2


## for Else


```python
# exits with something
for x in range(0, 3):
    print( "iteration number %d" % (x) )
else:
    print('end %d' % x)
```

    iteration number 0
    iteration number 1
    iteration number 2
    end 2


## for in


```python
collection = ['hey', 5, 'd']
for x in collection:
    print(x)
```

    hey
    5
    d


## for in - sub List


```python
list_of_lists = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
for list in list_of_lists:
    for x in list:
        print(x)
    else:
        print('end of sublist at x = %d' % x)
```

    1
    2
    3
    end of sublist at x = 3
    4
    5
    6
    end of sublist at x = 6
    7
    8
    9
    end of sublist at x = 9


## while


```python
x = 1
while x < 5:
    print ("iteration number %d" % (x))
    x += 1
```

    iteration number 1
    iteration number 2
    iteration number 3
    iteration number 4


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




    '32'




```python
a_string = 'string'
```


```python
# will fail because this conversion can't be done
int(a_string)
```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    <ipython-input-151-1d971295ef76> in <module>()
          1 # will fail because this conversion can't be done
    ----> 2 int(a_string)


    ValueError: invalid literal for int() with base 10: 'string'


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

    <class '__main__.Thing'>
    <class 'type'>
    <class '__main__.DictThing'>
    <class 'type'>
    True
    True



```python
# Create "instances" of our new classes
t = Thing()
d = DictThing()
print(t)
print(type(t))
print(d)
print(type(d))
```

    <__main__.Thing object at 0x10c976c88>
    <class '__main__.Thing'>
    {}
    <class '__main__.DictThing'>



```python
# Interact with a DictThing instance just as you would a normal dictionary
d['name'] = 'Sally'
print(d)
```

    {'name': 'Sally'}



```python
d.update({
        'age': 13,
        'fav_foods': ['pizza', 'sushi', 'pad thai', 'waffles'],
        'fav_color': 'green',
    })
print(d)
```

    {'name': 'Sally', 'age': 13, 'fav_foods': ['pizza', 'sushi', 'pad thai', 'waffles'], 'fav_color': 'green'}



```python
print(d.my_property)
```

    I am a "DictThing"


## Modules

Enter the Python interpreter: open your terminal, type **python**

If you quit from the Python interpreter and enter it again, the definitions you have made are lost. Therefore, you are better off creating a script. As your program gets longer, you may want to split it into several files. Such a file is called a module. Definitions from a module can be imported into other modules like this

1. Create and save a file as testfile.py
> def test():
>     return 34

2. In the Python interpreter, type
> import testfile  
> testfile.test()

Other notation possibilities:  
_import testfile as file_  
_from testfile import test_  
_from testfile import test as testfunction_  

#### Know what modules are defined
> dir(testfile)

#### execute a module as a script from the terminal:
python testfile.py <arguments>

#### import modules from a package / sub-package:
import package.sub_package.testfile_2

## Reading & Writing Files


```python
# arguments for open (filename, mode)
#'r' read (default mode)
#'w' writing (an existing file with the same name will be erased)
#'a' opens for appending
#'r+' opens for both reading and writing

f = open('workingfile', 'w')
f.close()
```

The default when reading is to convert platform-specific line endings (\n on Unix, \r\n on Windows) to just \n.  
When writing in text mode, the default is to convert occurrences of \n back to platform-specific line endings.  

This behind-the-scenes modification to file data is fine for text files, but will corrupt binary data like that in JPEG or EXE files. Be very careful to use binary mode when reading and writing such files.


```python
# enter the binary mode with 'b'
f = open('workingfile', 'wb')

print(f.closed)

f.close()

print(f.closed)
```

    False
    True



```python
# using a with automatically closes at the end -> Good Practise !
with open('workingfile', 'r') as f:
    read_data = f.read()

#is the connection closed ?
f.closed
```




    True



#### Writing

f.read(size) -> reads some quantity of data. When size is omitted or negative, the entire contents of the file will be read and returned; **it’s your problem if the file is larger than your machine’s memory**.


```python
with open('workingfile', 'w') as f:
    f.write('This is a test line\n and a second line')
```

#### Reading


```python
# let's see what we have in the file now
with open('workingfile', 'r') as f:
    for line in f:
        print(line, end='')
```

    This is a test line
     and a second line

Useful functions:
 *  **f.tell()**   the file object’s current position
 *  **f.seek()**   to change the file object’s position

#### JSON Read & write


```python
a_json = {"one" : "1", "two" : "2", "three" : "3"}
```


```python
# see the stringified version of your json
import json
json.dumps(a_json)
```




    '{"one": "1", "two": "2", "three": "3"}'




```python
# write your json into the file workingfile
with open('workingfile', 'w') as f:
    json.dump(a_json,f)
```


```python
# and read the file
with open('workingfile', 'r') as f:
    for line in f:
        print(line, end='')
```

    {"one": "1", "two": "2", "three": "3"}


```python
# and retrieve the JSON
with open('workingfile', 'r') as f:
    the_json = json.load(f)
the_json
```




    {'one': '1', 'three': '3', 'two': '2'}



## Good Practise

 * Use 4-space indentation, and no tabs.

 * Use blank lines to separate functions and classes, and larger blocks of code inside functions.

 * When possible, put comments on a line of their own.

 * Use docstrings:
>def fct():
>      """documentation"""  
>      pass

 * Use spaces around operators and after commas, but not directly inside bracketing constructs: a = f(1, 2) + g(3, 4).

 * Naming: use **CamelCase for classes** and **lower_case_with_underscores for functions** and methods.   
 Always use **self** as the name for the **first method argument**

## References

- https://try.jupyter.org
- https://docs.python.org/3/tutorial/index.html
- https://docs.python.org/3/tutorial/introduction.html
- https://daringfireball.net/projects/markdown/syntax

<hr>
