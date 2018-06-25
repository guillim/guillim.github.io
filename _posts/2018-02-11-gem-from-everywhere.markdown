---
layout: default
title:  "gem from everywhere"
date:   2018-02-11 03:22:48 +0100
categories: gem
comments: true
---

You want to make the *gem* command available from any folder on your MacOS ? Here is what you can do  
Tested Configuration:  
`MacOS:  Sierra 10.12`  
`gem: 2.7.4`

# 1.  Go to a specific folder

Go to your terminal, and type `cd /usr/local/bin`

# 2.  Check if *gem* is already installed

Type `gem -v`  

*  it should prompt some numbers, like `2.7.4`. Now, go to 3.

*  Otherwise install gem. I recommend fully installing *Ruby* by typing `brew install ruby`. You can skip 3. since gem should be available everywhere


# 3.  Make it available
Type `sudo nano ~/.bash_profile`  
Type your password when prompted  


Then add these lines at the end of the opened file  
`export PATH=/usr/local/lib/ruby/gems/2.0.0/bin:$PATH`  
`export PATH=/usr/local/opt/ruby20/bin:$PATH`  

And exit with `ctrl-c` then `y`

For further reading, go to [stackoverflow][stack]




[stack]: https://stackoverflow.com/questions/6482738/installing-ruby-gems-not-working-with-home-brew
