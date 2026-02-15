---
layout: blog
title: "Terminal git autocomplete"
date: 2018-02-17 03:22:48 +0100
categories: terminal
comments: true
thumbnail: /assets/img/thumbnails/2.jpg
---

You want to get **git** autocomplete in your **terminal** ? Here is what you can do with `Terminal: iTerm2 & Terminal`

We tested three set of configuration :
- `MacOS:  Darwin 26.2` (Latest)
- `MacOS:  Sierra 14.6`
- `MacOS:  Sierra 10.12`

# Configuration:  `MacOS:  Darwin 26.2`

# 1. Download Git Completion Script
Git comes with a built-in completion script. Download it directly:

```bash
curl -o ~/.git-completion.bash https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash
```

# 2. Add the Script to Your Bash Profile
Open your `~/.bash_profile` (or `~/.bashrc` if you use that instead) in a text editor:

```bash
nano ~/.bash_profile
```

Add the following lines:

```bash
if [ -f ~/.git-completion.bash ]; then
  source ~/.git-completion.bash
fi
```

Save and exit (`Ctrl+O`, `Enter`, `Ctrl+X` in `nano`).

# 3. Reload Your Bash Profile
Run the following to apply changes:

```bash
source ~/.bash_profile
```


# Configuration:  `MacOS:  Sierra 14.6`  

# 1. Open your terminal
MacOS does not comewith bash 4 (or later) due to GPL restrictions. But it's easy to install it:  
`brew install bash`

# 2. Bash 4 as your default shell
To find the path of your executable, use  `which bash`
I got `/opt/homebrew/bin/bash` but other users reported having `/usr/local/bin/bash`

Then you need to do 2 more steps
1. allow bash 4 as a login shell:
`sudo nano shells`  
and add your bash path. It should look like this

`  
/bin/bash
/bin/csh
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
/usr/local/bin/bash
`

2. change default shell (change with your own bash path):
`chsh -s /opt/homebrew/bin/bash`

You can check that everything is allright by typeing `bash --version` and make sure you have more than 3.


# 3. install git autocomplete
Type :  
`brew install bash-completion@2`

And then add to your `~/.bash_profile`:  
```bash
[[ -r "/opt/homebrew/etc/profile.d/bash_completion.sh" ]] && . "/opt/homebrew/etc/profile.d/bash_completion.sh"
```

Do not forget to open a new terminal to try ! or simply "source .bash_profile"

# Configuration:  `MacOS:  Sierra 10.12`  

# 1. Open your terminal

Type `sudo nano ~/.bash_profile`  
Write at the end of the file
`source ~/.git-completion.bash`  
And save. (by hiting `Ctrl + X` then hit `Y` to confirm)

This part will automatically load the "git autocompletion script" when your terminal starts.

# 2. Copy the script

Copy the content of this [file][gist] (open the page and hit `Ctrl + A`, then `Ctrl + C`)  
Type: `sudo nano ~/.git-completion.bash`  
Paste the content of the file inside ( `Ctrl + V` for instance)

Save like before

# 3. Restart your terminal

To quit Press `Cmd + Q` for instance (you must quit, not simply close)
And open your terminal again !

Now you can write `git stat` and press `tab` -> it will autocomplete into `git status`

[gist]: https://gist.githubusercontent.com/guillim/c7cc6fe2915fbd3891338f43244bffcc/raw/bd23090594b82806f87e4c6d69689f103dfa7a85/git-completion.bash


## Reference
[update-bash-to-version-4](https://apple.stackexchange.com/questions/193411/update-bash-to-version-4-0-on-osx)
[bash-completion@2](https://formulae.brew.sh/formula/bash-completion@2)
[MacOS git bash command line completion](https://stackoverflow.com/questions/12399002/how-to-configure-git-bash-command-line-completion)  
[macinstruct: macos 26](https://www.macinstruct.com/tutorials/how-to-enable-git-tab-autocomplete-on-your-mac/)  