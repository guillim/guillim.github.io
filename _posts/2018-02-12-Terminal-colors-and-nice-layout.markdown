---
layout: blog
title: "Terminal colors and nice layout"
date: 2018-02-12 03:22:48 +0100
categories: terminal
comments: true
thumbnail: /assets/img/thumbnails/2.jpg
---

You want to make your MacOS _terminal_ colorful and good looking ? Here is what you can do  
Tested Configuration:  
`MacOS:  Sierra 10.12`  
`Terminal: iTerm2 & Terminal`

# 1. What terminal to choose

I tested

- default MacOS terminal
- iTerm2

No big difference for what we will do.

# 2. Set the colors

Set the terminal colors to xterm-256color.

Here is how you can do it:  
![screenshot](https://ibin.co/3rScPWGjTtfM.png){:class="img-responsive"}

Then type `sudo nano ~/.bash_profile`  
And add at the end of the file
`export CLICOLOR=1`

and add also this `source ~/.bash_prompt` at the end

Finally, copy the content of this [file][gist]  
type: `sudo nano ~/.bash_prompt`  
and paste the content of the file inside the bash_prompt

# 3. Use your terminal as if it was Microsoft Word

For that, we will install [micro][micro]. It's an alternative to VI or NANO that allows you to use your mouse for selecting text, and allows ctrl+z, ctrl+y and even more shortcuts for quick and easy text editing

Type `brew install micro`

Only for iTerm2 users: use 'xterm Defaults' configuration as shown bellow
![screenshot2](https://ibin.co/3rSgoi67wTnQ.png){:class="img-responsive"}

Add your favorite shortcuts:  
Type `micro ~/.config/micro/bindings.json`

and inside this file, just write down  
![screenshot](https://ibin.co/3rSiCZPp3tuf.png){:class="img-responsive"}

If you want to custom more shortcuts, [click here][shortcuts]

# 4. Use the classic shortcut

On a default terminal you can navigate left and right only letter by letter.  
Let's set up our Terminal so that we can go directly to the end of line, or jump word by word !

Like in the previous part, open the preferences on the Profiles > Keys,  
then click "+"  
then fill as bellow:  
![add a shortcut](https://ibin.co/3rSuB1axn7ii.png){:class="img-responsive"}
This will allow you to use ⌘→ to reach the end of line.

Here is what I suggest:  
⌘→ OF will do "end of line"  
⌘← OH will do "start of line"  
⌥← b will do "go to left word"  
⌥→ f will do "go to right word"

# 5. Print sizes of directories

To print the size of current files and directories (sorted by size)

First you need to install coreutils by typing  
`brew install coreutils`  
Then type `micro ~/.bash_profile`  
And finally write this at the end of the file `alias getsize='du -hs * | gsort -h'`

# 6. Increase search history

Your terminal **logs every command line you type**. To see your history, type in your terminal: `history`  
A very useful keyboard shortcut in a terminal is **Ctrl + R**: It will open a reverse search history. For commands you don't use often, this is a quick way to retrieve it. However, by default it is limited to 500 entries only (type ` echo $HISTSIZE` to see it)

So to increase this, in your terminal type:

```bash
sudo nano ~/.bash_profile
```

And add at the end of the file

```bash
HISTFILESIZE=1000000000
HISTSIZE=1000000
```

# 7. Preview CSV files

### this is not terminal related - more a MacOS tip

MacOS comes with a preview tool called "Quicklook" but it sucks for CSV files.  
I recommend [this plugin][plugin] to fullfill this need. The instructions [here][csv] are very easy.

Other plugins (for JSON...) are available [here][link]

[micro]: https://github.com/zyedidia/micro
[shortcuts]: https://github.com/zyedidia/micro/blob/master/runtime/help/keybindings.md
[gist]: https://gist.githubusercontent.com/guillim/1a000d46c178e22fa91256ab87570610/raw/febad47295b043b747c81a8b365a018f882b16f1/.bash_prompt
[plugin]: https://github.com/p2/quicklook-csv/releases/download/1.3/QuickLookCSV-1.3.dmg
[csv]: https://github.com/p2/quicklook-csv
[link]: http://www.quicklookplugins.com/
