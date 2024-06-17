---
layout: default
title: "git pull or git rebase"
date: 2020-01-21 03:22:48 +0100
categories: git
comments: true
thumbnail: /assets/img/thumbnails/5.jpg
---

You already use **git pull**, and you heard about the **git rebase**, but you never used it before ? Here is a short explanation.

# Pre-requisite : what is **git pull** ?

`git pull` = `git fetch & git merge`

**git fetch** can be done with rebase or merge, it doesn't matter. You can learn more on **git fetch** [here](https://git-scm.com/docs/git-fetch). The interesting question here is :

What is the difference between `git merge` and `git rebase` ?

Note :  
You can type `git pull --rebase` = `git fetch & git rebase`

# What is **git rebase**

So **git rebase** is an alternative to **git merge**

_Instead of creating a new commit that combines the two branches, it moves the commits of the first branch on top of the other._  
[Peter](https://stackoverflow.com/users/2658502/peter) (stackoverflow).

# Rebasing : Pros & Cons

### Pros:

- linear history
- no useless merge commits

### Cons:

- risk of re-writing public commits

### When to use rebasing according to the [atlassian](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

_And that’s all you really need to know to start rebasing your branches. If you would prefer a clean, linear history free of unnecessary merge commits, you should reach for git rebase instead of git merge when integrating changes from another branch._

_On the other hand, if you want to preserve the complete history of your project and avoid the risk of re-writing public commits, you can stick with git merge. Either option is perfectly valid, but at least now you have the option of leveraging the benefits of git rebase._

So when rebasing a _feature_ branch (that you, and only you are working on) on top of a public _master_ branch, it looks like :

```bash
git checkout feature
git rebase master
```

### Rule of thumb

Don't rebase if you already are on the master branch. It's reserved to feature branches

# Reference:

- [stackoverflow](https://stackoverflow.com/questions/36148602/git-pull-vs-git-rebase/36148845#36148845)
- [stackoverflow 2](https://stackoverflow.com/questions/804115/when-do-you-use-git-rebase-instead-of-git-merge)
- [atlassian guide](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)
