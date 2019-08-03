/*function test(x) {
  eval('var y = x')
  return y
}

console.log(test('hello')) // hello*/

/*
var y = 'global'

function test(x) {
  if (x) {
    eval("var y = 'local'")
  }
  return y
}

console.log(test(true)) // local
console.log(test(false)) // global
*/

var y = 'global'

function test(x) {
  (function () {
    eval("var y = 'local'")
  })()
  return y
}

console.log(test(true)) // global
console.log(test(false)) // global
