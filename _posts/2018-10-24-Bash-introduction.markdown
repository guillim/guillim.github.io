---
layout: default
title:  "Bash introduction"
date:   2018-10-24 19:22:48 +0100
categories: bash
comments: true
---

If you want to **get a little into bash**, this article is for you. We will cover very basic commands in bash, so that after this, you can google everything else

Tested Configuration:  
`OS: Ubuntu 16.04 LTS`  

## Basics
```bash
# declare a variable
# /!\ no SPACE: if you type var = "white rabbit", you'll have an error  
var="white rabbit"

# read a variable, access its value (2 ways)
$var
${var}

# print a variable value
echo $var

# length
${#var}

# export through shell
export var
declare -x var   

# print every variable defined in the shell
set

# removes a variable
unset var
```

## Array
```bash
# store the variable inside the array "arr"
arr[0]=val

# read the first element of "arr"
${arr[0]}
$arr

# every element from "arr"
${arr[*]}   

# 11th element from "arr"
${#arr[11]}

# number of element inside "arr"
${#arr[*]}
```

## Cursor Position
```bash
# script name
$0

# positon parameters
$1 $2 ... ${10}   paramètres positionnels (1, 2 et 10)

# number of positon parameters
$#

# every positon parameters = $1 $2 ... ${n}      (2 ways)
$*
$@   

# "$1 $2 ... ${n}"
"$*"

# "$1" "$2" ... "${n}"
"$@"
```

## Specials
```bash

# reapeat last command
!!

# current shell PID
$$

# last background task PID
$!

# last command
$?

# home path
$HOME

# last dir path
$OLDPWD

# current shell PID
$PATH   liste des chemins de recherche des commandes exécutables

# Parent PID = PID of the mother of the shell
$PPID

#  Default interaction prompt
$PS1  

# Continuation interactive prompt
$PS2   

#  Prompt used by “select” inside shell script
$PS3   

# Used by “set -x” to prefix tracing output -> xtrace DEBUG option
$PS4

# current path
$PWD

# random number
$RANDOM

# seconds this shell has lived
$SECONDS   
```

## Conditions

There are two identical ways for testing an expression:  
`[ XXXX ]`  
`test XXXX`  
They both return **0 for true**, and **1 for false**

Well, there is a third way for testing, more bulletproof:  
`[[ XXXX ]]` **recommended version** read more about it [here](https://unix.stackexchange.com/questions/248164/bash-if-syntax-confusion)  



Note: in bash,  we don't use **if** with **=**. use eq, lt etc... instead

Note: the spaces inside the brackets are important => this is a wrong way [[XXXXXXX]] 

```bash
$ [[ 2 = 2 ]]
$ echo $?
```
returns 0

```bash
$ [[ 2 = 3 ]]
$ echo $?
```
returns 1


#### Possible operators:
1. Strings  
    XXXX = YYYY  
    XXXX != c2  
    -z XXXX (true if empty)  
    -n XXXX (true if not empty)  

2. Numbers
    XXXX -eq YYYY (equal)  
    XXXX -ne YYYY (non equal)  
    XXXX -lt YYYY (strictly lower than)  
    XXXX -le YYYY (lower or equal)  
    XXXX -gt YYYY (strictly greater than)  
    XXXX -ge YYYY (greater or equal)  

3. Expressions  
    ! XXXX (true if e is false)  
    XXXX -a YYYY (true if XXXX and YYYY are true)  
    XXXX -o YYYY (true if at least XXXX or YYYY is true)  

#### Use conditions with if / else
```bash
if [[ condition ]]
then instruction(s)
else instruction(s)
fi
```

#### Example

```bash
read -p "Si vous etes d'accord entrez o ou oui : " reponse
if [ ! "$reponse" = "o" -a ! "$reponse" = "oui" ]; then
    echo "Non, je ne suis pas d'accord !"
else
    echo "Oui, je suis d'accord"
fi
```


## Create / append to a file

```bash
# creates or overwrites a file called read.txt
echo "hello tom" > read.txt

# read this file
cat read.txt  

# append a new line to the same file
echo "hello siva" >> read.txt   

# read this file again
cat read.txt  
```

## Check for an existing file
```bash
if [[ -f "README.md" ]]
then
    echo 'yes the README file exists'
else
    echo 'no it does not'
fi
```
Note: to check the existence of a directory, change the option from `f` to `d` like so : `if [[ -d "myfolder" ]]`  

# Ressources

More about ps1, ps2 ... [thegeek]([https://www.thegeekstuff.com/2008/09/bash-shell-take-control-of-ps1-ps2-ps3-ps4-and-prompt_command/?utm_source=twitterfeed&utm_medium=twitter])  
More about [testing]([https://fr.wikibooks.org/wiki/Programmation_Bash/Tests])  
More about checking if a file exist: [linuxize](https://linuxize.com/post/bash-check-if-file-exists/)  
Difference between [bash & sh](https://stackoverflow.com/questions/5725296/difference-between-sh-and-bash)  
