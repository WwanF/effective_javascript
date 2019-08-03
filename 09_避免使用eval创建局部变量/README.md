# 避免使用eval创建局部变量

## 案例一
```javascript
function test(x) {
  // 函数作用域
  eval('var y = x')
  return y
}

console.log(test('hello')) // hello
```

## 案例二
```javascript
var y = 'global'

function test(x) {
  if (x) {
    // 函数作用域
    eval("var y = 'local'")
  }
  return y
}

console.log(test(true)) // local
console.log(test(false)) // global
```

## 案例三
```javascript
var y = 'global'

function test(x) {
  (function () {// 函数作用域
    eval("var y = 'local'")
  })()
  return y
}

console.log(test(true)) // global
console.log(test(false)) // global
```

## 注意：不建议使用eval函数
