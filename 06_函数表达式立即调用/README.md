# 06 函数表达式立即调用，创建作用域

## 案例
```javascript
function func(arr) {
  var i = 0, result = [], n = arr.length
  for (i = 0; i < n; i++) {
    result[i] = function () {
      return arr[i]
    }
  }
  return result
}

var arr = [10, 20, 30, 40, 50, 60]
var fs = func(arr)
console.log(fs[0]()) // undefined，为何？
```

## 分析
```javascript
function func(arr) {
  // func函数执行后，会为i变量分配内存空间
  var i = 0, result = [], n = arr.length
  for (i = 0; i < n; i++) {
    // result[i]中i是实时求值
    result[i] = function () {
      // 在闭包内，是对i变量的引用，而不是字面值，故当func执行结束后，i的值是6
      return arr[i]
    }
  }
  return result
}

var arr = [10, 20, 30, 40, 50, 60]
var fs = func(arr)
console.log(fs[0]()) // undefined，为何？
```

##解决方式一
```javascript
function func(arr) {
  var i = 0, result = [], n = arr.length
  for (i = 0; i < n; i++) {
    (function () {
      var j = i
      result[j] = function () {
        return arr[j]
      }
    })()
  }
  return result
}
var arr = [10, 20, 30, 40, 50, 60]
var fs = func(arr)
console.log(fs[0]()) // 10
```

##解决方式二
```javascript
function func(arr) {
  var i = 0, result = [], n = arr.length
  for (i = 0; i < n; i++) {
    (function (i) {
      result[i] = function () {
        return arr[i]
      }
    })(i)
  }
  return result
}
var arr = [10, 20, 30, 40, 50, 60]
var fs = func(arr)
console.log(fs[0]()) // 10
```

