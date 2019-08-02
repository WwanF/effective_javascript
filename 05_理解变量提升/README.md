# 05 理解变量提升

## 函数的执行分为两个阶段
 - 准备阶段：形参赋值，this绑定上下文，arguments初始化，变量提升，函数提升
 - 执行阶段：单线程javascript，按照执行顺序依次执行，遇到异步任务，则放入对应的队列中，按照eventloop机制执行
 
 ## 举例
 ```javascript
function varHoisting() {
  console.log('a--1-->', a) // undefined，相当于 var a,定义变量未初始化，默认值是undefined
  foo() // 2，函数声明会整体提升至顶层，故可以直接调用
  // bar() // bar is not a function，报错，函数表达式遵循变量提升，相当于 var bar,此时bar=undefined

  var a = 1
  var a // 重复定义，未初始化，则忽略

  console.log('a--2-->', a)

  function foo() {
    a = 2
    console.log('foo()--1-->', a)
  }
  foo()
  // 变量提升，因为有 function foo(){}，var foo 被忽略，只有执行到此语句的时候，才会改变
  var foo = function () {
    a = 4
    console.log('foo()--2-->', a)
  }
  foo()
  var bar = function () {
    a = 3
    console.log('bar()--1-->', a)
  }
  bar()
  var bar = function () {
    a = 5
    console.log('bar()--2-->', a)
  }
  bar()

}

varHoisting()
```

## 执行结果
```bash
  a--1--> undefined
  foo()--1--> 2
  a--2--> 1
  foo()--1--> 2
  foo()--2--> 4
  bar()--1--> 3
  bar()--2--> 5
```
