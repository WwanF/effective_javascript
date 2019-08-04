function average(a, b, c, d, e, f) {
  return (a + b + c + d + e + f) / 6
}

console.log(average(1, 2, 3, 4, 5, 6)) // 3.5

function averageOfArray(arr) {
  var n = arr.length, total = 0
  for (var i = 0; i < n; i++) {
    total += arr[i]
  }
  return total / n
}

console.log(averageOfArray([1, 2, 3, 4, 5, 6])) // 3.5

function getAllScores() {
  return [1, 2, 3, 4, 5, 6]
}

var scores = getAllScores()
console.log(average.apply(null, scores)) // 3.5
