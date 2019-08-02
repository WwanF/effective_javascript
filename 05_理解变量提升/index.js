function varHoisting() {
  console.log('a--1-->', a)
  foo()
  // bar()

  var a = 1
  var a

  console.log('a--2-->', a)

  function foo() {
    a = 2
    console.log('foo()--1-->', a)
  }
  foo()
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
