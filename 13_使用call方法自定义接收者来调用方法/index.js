/*var hasOwnProperty = {}.hasOwnProperty
var dict = {
  name: '斗图王'
}
delete dict.hasOwnProperty
console.log(hasOwnProperty.call(dict, 'name')) // true
console.log(hasOwnProperty.call(dict, 'hasOwnProperty')) // false*/

/*function Parent1() {
  this.name = '斗图王'
}

function Child1() {
  Parent1.call(this)
  this.age = '91'
}

var child = new Child1()
console.log(child) // {name: "斗图王", age: "91"}*/
