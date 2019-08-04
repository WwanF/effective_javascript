# 理解函数调用，方法调用及构造函数调用之间的不同

## 函数调用
```javascript
function hello(username) {
  return 'hello' + username
}
hello('斗图王')
```

```javascript
function hello() {
  'use strict'
  // 此时this === undefined
  return this.username
}
hello('斗图王')
```

## 方法调用
```javascript
var obj = {
  username: '斗图王',
  hello: function () {
    return this.username
  }
}
obj.hello()
```

## 构造函数
```javascript
function User(name, age) {
  this.name = name
  this.age = age
}

var user = new User('斗图王', '91')
console.log(user)
```

## 说明
- 区分函数调用，方法调用，构造函数
- 注意函数调用时，this指向问题

