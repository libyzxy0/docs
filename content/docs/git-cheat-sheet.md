---
title: Git Cheat Sheet
description: In this blog, we've curated an extensive list of fundamental Git commands, from the basics of initializing a repository, creating branches, to collaborating with teamates using remote repositories.
---

# Git Cheat Sheet
In this docs, we've curated an extensive **list of fundamental Git commands**, from the basics of initializing a repository, creating branches, to **collaborating with teamates** using remote repositories.

## git config ``options``
Sets the username and email address for commits.
```sh
git config --global user.name "Libyzxy0"
```
```sh
git config --global user.email "libyzxy0@gmail.com"
```

## git init
Initialize a git repository. 
```sh
git init
```

## git clone ``url``
Clones a repository from server like Github, Gitlab.

```sh
git clone https://github.com/libyzxy0/example.git
```

## git status
Check the current status of working tree.
```sh
git status
```

## git add ```Filename(s)```
Puts the unstage files to staging area.

Add a specific files
```sh
git add index.html styles.css script.js
```
Add all unstage file
```sh
git add .
```

## git push ``options`` ``variable`` ``branch``
Push the contents of your local repository to added remote repository. 
```sh
git push -u origin main
```

## git pull ``variable`` ``branch`` or ``url``
Fetch and integrate the contents of the remote repository to your local repository. 

```sh
git pull origin main
```
```sh
git pull https://github.com/user/repo
```

## git checkout ``branch``
Move from one branch to another branch.

```sh
git checkout <branch_name>
```

## git checkout ``options`` ``branch``
Create a specified branch and simultaneously switch to it. 
```sh
git checkout -b <branch_name>
```

## git branch ``options`` ``branch``
Performs a operations over the specified branch
```sh
git branch -d <branch_name> //deleted a branch
```

## git merge ``branch``
Merge the history of the specified branch into current branch. 
```sh
git merge <branch_name>
```

## git log
Shows the log commits made so far from the current branch. 
```sh
git log
```

## git show ``Commit ID``
List the meta-data for tha specified commit. 

```sh
git show <id>
```

### Original source 
* Lifetechfacts [See here](https://www.facebook.com/100068876440491/posts/pfbid02BQf3NgvrM65bSAPQrjJFDeeuWjmarun7eS1Ybc7zHQQksXBew7um5Zzk5ft1yKwTl/?app=fbl)