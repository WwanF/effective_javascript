function func(arr) {
  var i = 0, result = [], n = arr.length
  for (i = 0; i < n; i++) {
    /* result[i] = function () {
       return arr[i]
     }*/
    /*(function () {
      var j = i
      result[j] = function () {
        return arr[j]
      }
    })()*/
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
console.log(fs[0]()) // undefined
