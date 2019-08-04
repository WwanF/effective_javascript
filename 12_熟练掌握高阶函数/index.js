/*function compareNumbers(x, y) {
  if (x < y) {
    return -1
  }
  if (x > y) {
    return 1
  }
  return 0
}

console.log([3, 1, 4, 1, 5, 9].sort(compareNumbers)) // [1, 1, 3, 4, 5, 9]

var arr = [3, 1, 4, 1, 5, 9].sort(function (x, y) {
  if (x < y) {
    return -1
  }
  if (x > y) {
    return 1
  }
  return 0
})

console.log(arr) // [1, 1, 3, 4, 5, 9]*/

/*var names = ['Fred', 'Wilma', 'Pebbles']
var upper = []
for (var i = 0, n = names.length; i < n; i++) {
  upper[i] = names[i].toLocaleUpperCase()
}
console.log(upper) // ["FRED", "WILMA", "PEBBLES"]*/

/*var names = ['Fred', 'Wilma', 'Pebbles']
var upper = names.map(item => {
  return item.toLocaleUpperCase()
})
console.log(upper) //  ["FRED", "WILMA", "PEBBLES"]*/

/*var aIndex = 'a'.charCodeAt(0)
var alp = ''
for (var i = 0; i < 26; i++) {
  alp += String.fromCharCode(aIndex + i)
}
console.log(alp) // abcdefghijklmnopqrstuvwxyz*/

var aIndex = 'a'.charCodeAt(0)

function buildString(n, cb) {
  var result = ''
  for (var i = 0; i < n; i++) {
    result += cb(i)
  }
  return result
}

var alp = buildString(26, function (i) {
  return String.fromCharCode(aIndex + i)
})
console.log(alp)


