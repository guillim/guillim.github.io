---
layout: blog
title: "Start with Jekyll"
date: 2018-02-10 03:22:48 +0100
categories: jekyll
comments: true
thumbnail: /assets/img/jekyll1.png
---

You want to get started with Jekyll on MacOS ? Here is what you can do  
Configuration:  
`MacOS:  Sierra 10.12`  
`Jekyll: 3.7.2`

# 1. Go to the [offical website][officalWebsite]

You should see this:  
![instructions](/assets/img/jekyll1.png)  
Before you do all this, you will probably need to install _Ruby_, in order to use `gem`

# 2. Make sure gem is available

Open a terminal and Type `gem -v`

It should prompt some numbers, like `2.7.4`  
If not, you need to make _gem_ command available from everywhere in you mac, [click here][gem] to know how in 1 minute

# 3. Make sure _jekyll_ is not already installed

Type `jekyll -v`

It should say:  
`-bash: jekyll: command not found`

# 4. Install _jekyll_

`sudo gem install jekyll bundler`  
Type your password when prompted

# 5. create your first _jekyll_ website called 'exampleWebsite'

Type `jekyll new exampleWebsite`

# 6. Run and browse 'exampleWebsite'

Type `cd exampleWebsite`  
Then type `bundle exec jekyll serve`

Open a browser (Chrome for instance) and go to url [http://127.0.0.1:4000/][url]

that's it !

# 7. Further reading

I recommend the official doc, and also some videos like this [Youtube Tutorial][youtube]

[officalWebsite]: https://jekyllrb.com/docs/home
[gem]: https://github.com/guillim/2018/02/12/gem-from-everywhere.html
[url]: http://127.0.0.1:4000/
[youtube]: https://www.youtube.com/watch?v=iWowJBRMtpc
[here]: https://stackoverflow.com/questions/9854225/bundler-could-not-find-compatible-versions-for-gem-bundler

### TroubleShooting

If you see something like:

```
Bundler could not find compatible versions for gem "bundler":
  In Gemfile:
    bundler (~> 1.12)

  Current Bundler version:
    bundler (2.0.1)
This Gemfile requires a different version of Bundler.
Perhaps you need to update Bundler by running `gem install bundler`?
```

It is probably because you have installed `bundler` globally as well as locally.

Solution: try to remove one of them by typing `gem uninstall bundler` and try again. More info [here][here]
