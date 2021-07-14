---
layout: default
title:  "Pair Programming"
date:   2021-06-18 03:22:48 +0100
categories: terminal
comments: true
---

Today, we are going to create a list of tools for pair programming. Why ? Because amazing tools exist, and make you more efficient. I will start with the one I know of. But please, add your favorites one in the comments.

# Upterm
### Why do i need
Instead of video-sharing your screen for only terminal commands, use Upterm.

### What is it
Basically a tool allowing your coworker to see your terminal, in their own terminal through ssh. It's a feature that can work well with Tmux.

### Advantages
* works with low wifi (video is the worst, and therefore, saves the planet)
* fast to setup (1min) and easy to understand
* free

### Example
```Bash
upterm host -- bash
```
```
# outputs this
=== UUNJCYOCVMN9ZWLLP5IT
Command:                bash
Force Command:          n/a
Host:                   ssh://uptermd.upterm.dev:22
SSH Session:            ssh UuNjCYOcVMN9zWLlp5iT:MTAsMjQ0LjBuMTQy8kIy@uptermd.upterm.dev
```
Then you just need to send this command to your co-worker:
`ssh UuNjCYOcVMN9zWLlp5iT:MTAsMjQ0LjBuMTQy8kIy@uptermd.upterm.dev`  
And your good ! both of you will be able to interact with the terminal

# Live Share
This only applies if you have an IDE like VScode, that enables the extensions ["Live Share"](https://docs.microsoft.com/en-us/visualstudio/liveshare/).
Steps are pretty straightforward :
- After signing in
![signin](https://docs.microsoft.com/en-us/visualstudio/liveshare/media/vscode-sign-in-toast.png)
- You need to click "Live Share" and an invite link appears : click "Read-only" if you don't want your collaborator to be able to modify code on your machine. He will only view it.
![link](https://docs.microsoft.com/en-us/visualstudio/liveshare/media/vscode-share-button-new.png)
or simply use the tab on the left panel 
![panel](https://docs.microsoft.com/en-us/visualstudio/liveshare/media/vscode-read-only-viewlet.png) 
- You just need to send your invite link to your collaborator, by email or slack... and start working together
![work](https://visualstudio.microsoft.com/wp-content/uploads/2018/11/v2-Edit-Comp_FINAL-optimized840.gif)


# Tmux
### Why do i need
Mulitple tabs in your terminal window. Useful when you share your terminal with upterm for instance : you don't need to share each terminal to your co-worker.

### What is it
From the doc: _tmux is a terminal multiplexer. It lets you **switch easily between several programs in one terminal**, detach them (they keep running in the background) and reattach them to a different terminal._

### Advantages
* avoid sharing multiple teminals




# Reference
Offcial [github repo](https://github.com/owenthereal/upterm)  
Tmux [github repo](https://github.com/tmux/tmux/wiki)