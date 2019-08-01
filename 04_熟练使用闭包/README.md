# 04 熟练使用闭包

## 闭包事实
- javascript允许你引用在当前函数（如：inner函数）以外的变量
```javascript
function outer() {
  var a = 'a'
  function inner(b) {
    return a + '+' + b
  }
  return inner('b')
}
console.log(outer()) // a+b
```
- 即使外部函数已经返回，当前函数仍然可以引用在外部函数所定义的变量
```javascript
function outer() {
  var a = 'a'

  /*方式一*/
  // function inner(b) {
  //   //   return a + '+' + b
  //   // }
  //   //
  //   // return inner

  /*方式二*/
  return function (b) {
    return a + '+' + b
  }
}

var f = outer()
console.log(f('b')) // a+b
console.log(f('c')) // a+c

```
- 闭包可以更新外部变量的值
```javascript

function B() {
  var count = 0
  return function () {
    count++
    console.log(count)
  }
}

var cc = B()
cc() // 1
cc() // 2
cc() // 3
```
