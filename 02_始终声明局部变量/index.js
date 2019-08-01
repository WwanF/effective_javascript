function swap(a, i, j) {
  temp = a[i] // global
  a[i] = a[j]
  a[j] = a[i]
}

function swap(a, i, j) {
  var temp = a[i]
  a[i] = a[j]
  a[j] = a[i]
}
