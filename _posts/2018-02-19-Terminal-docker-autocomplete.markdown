---
layout: default
title:  "Terminal docker autocomplete"
date:   2018-02-19 03:22:48 +0100
categories: terminal
---

You want to get **docker** autocomplete in your **terminal**  ? Here is what you can do  
Tested Configuration:  
`MacOS:  Sierra 10.12`  
`Terminal: iTerm2 & Terminal`

# 1.  Open your terminal


Type `sudo nano ~/.bash_profile`  
Write at the end of the file
`source ~/.docker-completion.bash`  
And save. (by hiting `Ctrl + X` then hit `Y` to confirm)

This part will automatically load the "docker autocompletion script" when your terminal starts.  

# 2.  Copy the script


Copy the content of this [file][gist]  (open the page and hit `Ctrl + A`, then `Ctrl + C`)  
Type: `sudo nano ~/.docker-completion.bash`  
Paste the content of the file inside ( `Ctrl + V` for instance)  

Save like before

# 3.  Restart your terminal

To quit Press `Cmd + Q` for instance (you must quit, not simply close)
And open your terminal again !

Now you can write `docker conta` and press `tab` -> it will autocomplete into `docker container` and it will autocomplete with your container names etc...

[gist]: https://gist.githubusercontent.com/guillim/632b4d13ef2a7954474dd7098e206b0b/raw/c139ed9fc9d3654e6dd25b38e288220255a22e8f/docker-completion.bash
