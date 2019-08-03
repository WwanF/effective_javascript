/*
console.log(f2())
function f2() {
  return 'global'
}

function test(x) {
  var result = []
  if (x) {
    function f2() {
      return 'local'
    }
    result.push(f2())
  }
  result.push(f2())
  return result
}

console.log(test(true)) // ["local", "local"]
console.log(test(false)) // 预期：["local"]，实际结果：f2 is not a function
*/

function f2() {
  return 'global'
}

function test(x) {
  var result = [], g = f2
  if (x) {
    g = function () {
      return 'local'
    }
    result.push(g())
  }
  result.push(g())
  return result
}

console.log(test(true)) // ["local", "local"]
console.log(test(false)) // ["global"]



