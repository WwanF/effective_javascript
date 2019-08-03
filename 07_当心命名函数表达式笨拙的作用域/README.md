# 07 当心命名函数表达式笨拙的作用域

## 命名函数表达式
```javascript
// 不建议这种写法
var f = function double(x) {
  return x * 2
}
```

## 匿名函数表达式
```javascript
// 建议这种写法，注意与函数声明的区别
var f = function (x) {
  return x * 2
}
```

## 注意
```javascript
var f = function find2(tree, key) {
  if (!tree) {
    return null
  }
  if (tree.key === key) {
    return tree.value
  }
  // find2只在函数内有效，在外部无法访问
  return find2(tree.left, key) || find2(tree.right, key)
}

var myTree = {}
find2(myTree, 'foo') // error: find2 is not defined
```

