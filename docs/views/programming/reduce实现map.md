---
title: 用reduce实现map的功能
date: 2020-06-10
tags:
 - js
categories:
 - 前端
---

# 用reduce实现map的功能

```js
Array.prototype.map = function (callback) {
    const array = this;
    return array.reduce((acc, cur, index) => {
        acc.push(callback(cur, index, array))
        return acc
    }, [])
}
```

测试：
```js
var m = [1,2,3,4,5].map(function (v, i, arr) {
    return v + v
});
console.log(m)
```