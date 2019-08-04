# 使用call方法自定义接收者来调用方法

```javascript
var hasOwnProperty = {}.hasOwnProperty
var dict = {
  name: '斗图王'
}
delete dict.hasOwnProperty
console.log(hasOwnProperty.call(dict, 'name')) // true
console.log(hasOwnProperty.call(dict, 'hasOwnProperty')) // false
```

```javascript
function Parent1() {
  this.name = '斗图王'
}

function Child1() {
  Parent1.call(this)
  this.age = '91'
}

var child = new Child1()
console.log(child) // {name: "斗图王", age: "91"}
```

## 常见场景
- 在一个对象上，调用一个不是当前对象上的方法
- 继承父类属性

