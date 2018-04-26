---
layout: default
title:  "Git workflow, made simple"
date:   2018-04-24 03:22:48 +0100
categories: git
---

You already use git, and you heard about the **git workflow**, but you never used it before ? Here is a short explanation. You can read a more complete explanation [here][nvie]

#  Workflow: Pros & Cons

_"elegant mental model that is easy to comprehend and allows team members to develop a shared understanding of the branching and releasing processes"_ [nvie, father of this workflow][nvie]  

Pros:
* fits any project   
* avoid complex git conflicts  

Cons:
* more complex than the simple monobranch _pull push_
* slows you down if you push releases often

# When to use it  

**All the time**, except if you are alone on your project.  
If you are alone (probably on some side-project) then this workflow may slow you down, but it is still a good practise.  


# Summary  

![global schema](https://imagebin.ca/v/3zhcT2rdUXvP){:class="img-responsive"}  


# Explanations  

## master VS develop
The central repo, usually refered to as _origin_, holds two main branches:  

*  **master** (production-ready)  
*  **develop** (latest delivered development)

When the code in the origin/develop branch reaches a stable point and is ready to be released,  
we merge it into origin/master with a **release number**


## temporary branches

*  Release  
*  Hotfix  
*  Feature  


#### Release branches


###### WHY
Preparation of a new production release.  
minor bug fixes & preparing meta-data for a release (version number, build dates, ...)
###### NAMES
release-\*
###### REPOS
origin repo  
######CODE
* create branch:  
```bash
git checkout -b release-1.2 develop
```
It is exactly at the start of a release branch that the upcoming release gets assigned a version number—not any earlier. Up until that moment, the develop branch reflected changes for the “next release”  

* changing the version number:  
Here, _bump-version.sh_ is a fictional script that changes some files to reflect the new version. (This could of course be a manual change)
```bash
./bump-version.sh 1.2
git commit -a -m "Bumped version number to 1.2"
```

* merge with origin/master:  
```bash
git checkout master
git merge --no-ff release-1.2
git tag -a 1.2  
```  
AND merge with origin/develop
```bash  
git checkout develop
Switched to branch 'develop'
$ git merge --no-ff release-1.2
```  

Note about hot fixes:  
This new branch may exist there for a while. During that time, bug fixes may be applied in this branch (rather than on the develop branch).  
But adding large new features here is strictly prohibited (They must be merged into develop).   




#### Hotfix branches


WHY: fix immediatly a critical bug in a production version
NAMES : hotfix-\*   
REPOS : origin repo
CODE:

* create branch:
```bash
git checkout -b hotfix-1.2.1 master
./bump-version.sh 1.2.1
git commit -a -m "Bumped version number to 1.2.1"
```

* commit your fix and merge your code and delete the branch
```bash
git commit -m "Fixed severe production problem"

git checkout master
git merge --no-ff hotfix-1.2.1
git tag -a 1.2.1

git checkout develop
git merge --no-ff hotfix-1.2.1
```

One exception: when a release branch currently exists, the hotfix changes need to be merged into that release branch, instead of develop.

#### Feature branches



WHY: develop new features
NAMES : anything except master, develop, release-\*, or hotfix-\*   
REPOS : developer repos  
CODE:
* create branch:
```bash
git checkout -b myfeature develop
```
* merge your code and delete the branch
```bash
git checkout develop
git merge --no-ff myfeature
git branch -d myfeature
git push origin develop
```

Note about --no-ff:  
_The --no-ff flag causes the merge to always create a new commit object, even if the merge could be performed with a fast-forward. This avoids losing information about the historical existence of a feature branch and groups together all commits that together added the feature
Other reference_  
[nvie][nvie]  

see this illustration:  
![noff]( https://imagebin.ca/v/3zi9C9NXkwd8){:class="img-responsive"}   


Why is this important: Reverting a whole feature (i.e. a group of commits), is a true headache without the --no-ff !




* [Atlassian Guide book][atlassian]


[nvie]: http://nvie.com/about/
[atlassian]: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
