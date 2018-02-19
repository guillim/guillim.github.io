---
layout: default
title:  "Terminal git autocomplete"
date:   2018-02-17 03:22:48 +0100
categories: terminal
---

You want to get **git** autocomplete in your **terminal**  ? Here is what you can do  
Tested Configuration:  
`MacOS:  Sierra 10.12`  
`Terminal: iTerm2 & Terminal`

# 1.  Open your terminal


Type `sudo nano ~/.bash_profile`  
Write at the end of the file
`source ~/.git-completion.bash`  
And save. (by hiting `Ctrl + X` then hit `Y` to confirm)

This part will automatically load the "git autocompletion script" when your terminal starts.  

# 2.  Copy the script


Copy the content of this [file][gist]  (open the page and hit `Ctrl + A`, then `Ctrl + C`)  
Type: `sudo nano ~/.git-completion.bash`  
Paste the content of the file inside ( `Ctrl + V` for instance)  

Save like before

# 3.  Restart your terminal

To quit Press `Cmd + Q` for instance (you must quit, not simply close)
And open your terminal again !

Now you can write `git stat` and press `tab` -> it will autocomplete into `git status`

[gist]: https://gist.githubusercontent.com/guillim/c7cc6fe2915fbd3891338f43244bffcc/raw/bd23090594b82806f87e4c6d69689f103dfa7a85/git-completion.bash
