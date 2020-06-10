---
title: Git碰到冲突问题
date: 2020-06-09
sidebar: true
sidebarDepth: 5
tags:
- git
isShowComments: false
---

<!-- more -->

- 今天提交git仓库的时候，遇到了如截图所示的问题，提示Your branch is up-to-date with 'origin/master

![](/img/git/git.jpg)

- 查了些资料后，发现其根本原因是版本分支的问题


```bash
# 这时候我们就需要新建一个分支
$ git branch newbranch

# 然后检查分支是否创建成功
$ git branch 

# 然后切换到你的新分支
$ git checkout newbranch
```
- 如果不放心，还可以 $ git branch确认下，但是最好用git Bash Here这样你切换分支都能看见

```bash
# 然后将你的改动提交到新分支上
$ git add . 
$ git commit -m "2020-6-9"
```
- 然后`git status`检查是否成功

![](/img/git/git1.jpg)
```bash
# 然后切换到主分支
$ git checkout master

# 然后将新分支提交的改动合并到主分支上
$ git merge newbranch 

# 然后就可以push代码了
$ git push -u origin master

# 最后还可以删除这个分支
$ git branch -D newbranch
```


