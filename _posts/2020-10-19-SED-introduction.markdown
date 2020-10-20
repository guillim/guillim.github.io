---
layout: default
title:  "SED introduction"
date:   2020-10-19 03:22:48 +0100
categories: linux
comments: true
---

If you heard about  **SED** in linux... and you want to know more about it, here is a good place to be.  



# SED -- stream editor

sed is the best bash option to **modify text files** without GUI. This is very useful when you have **hundreds of texts** to modify, or if you want to **automate a task** (because your server cannot use GUI).

In case you don't know, when you type `man sed` in your terminal, the whole definition will show up. We will cover some common use case, but if you want to go deeper, the manual is the reference.

# Replace

### from echo
for instance, let's say you have this text :  
_"Hello, this is Mike. Everyone loves Mike"_  
If you want to switch _Mike_ for _John_ then you can type
```bash
echo "Hello, this is Mike. Everyone loves Mike" | sed 's/Mike/John/g'
```
And this will show up in you terminal :  
```bash
# Hello, this is John. Everyone loves John
```

Note that here, sed uses regex to replace Mike by John. If you only type `sed 's/Mike/John/'` then only the first occurence would be modified. More about [regex here](https://regexr.com/)

### from file
Similarly, you can modify a file. let's create a file
```bash
nano mike.txt
```
And write inside `Hello, this is Mike. Everyone loves Mike`  

Now, let's use sed to change Mike into John, without opening nano
```bash
sed -i 's/Mike/John/g' mike.txt
```
If you see an error, it's because you're not on a Linux system. try this instead
```bash
sed -i '' 's/Mike/John/g' mike.txt
```

Now let's see our file:
```bash
cat mike.txt
# Hello, this is John. Everyone loves John
```

The `-i` option stands for "in-place extension". It has two options:
- create a backup file if you specify a new extension. for instance to create a _mike.txt.backup_, you would have to type `sed -i .backup 's/Mike/John/g' mike.txt`
- overwrite our mike.txt file without backup. That's why you may need to force a 0 extension backup typing `-i ''`


Note : If you don't know how to use nano, [check this](https://kb.iu.edu/d/aeug)


# Delete

sed can delete lines, if you tell it the line number followed by `d`. In our case, we can remove the line we have by typing :

```bash
sed '1d' mike.txt
```
### Mulitple lines
There are two options :
- `'1d;4d'` deletes line 1 and line 4
- `'1,4d'` deletes from line 1 till line 4

### Regex mathing
To delete lines matching a specific regex
- `'/^Hello/d'` deletes lines begining with "Hello"
- `'/^Hello/d;/^Bye/d'` deletes every lines between the first line begining with "Hello", and the last one begining with "Bye"

Note you can even mix the two, like so `'/^Hello/d',3d`


# Filter
Quite the same format as deleting lines, but use `p` instead of `d`

# Use case

### Replace some text in many files
Let's say you are in a folder, and there are hundreds of text files. In every text file, you need to change the word "Microsoft windows" to "Ubuntu".  

Here is what you can do:
```bash
for f in *.txt; do sed -i -e 's/Microsoft windows/Ubuntu/' "$f"; done
```
And that's it.

Note: if you want to keep the old files, you can put the new text files in another directory:
```bash
for f in *.txt; do sed 's/Microsoft windows/Ubuntu/' "$f" > ../new_directory/"$f" ; done
```

# Dig Further

I would recommend to look at `tr` for deleting or replacing characters in text files.

Also for Json manupulation, I would recommend jq. It can be useful for text replacing of just one property. Good complement for many json manipulation, like this:
```bash
for file in *.json; do jq -c '.prop = (.prop | sub("Microsoft";"Ubuntu"; "g") )' file
```

# Reference
A French blog with good examples : [buzut.net](https://buzut.net/apprendre-commande-sed-linux/)  
Regex manual [regexr](https://regexr.com/)  
Find & replace in mulitple files [`grep -RiIl --exclude-dir=tests 'search' | xargs sed 's/search/replace/g'
`](https://www.internalpointers.com/post/linux-find-and-replace-text-multiple-files)  
tr [linux-france.org](http://www.linux-france.org/article/man-fr/man1/tr-1.html)  
