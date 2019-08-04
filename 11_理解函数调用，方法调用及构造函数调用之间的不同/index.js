/*
function hello(username) {
  return 'hello' + username
}
hello('斗图王')*/

/*var obj = {
  username: '斗图王',
  hello: function () {
    return this.username
  }
}

obj.hello()*/

function User(name, age) {
  this.name = name
  this.age = age
}

var user = new User('斗图王', '91')
console.log(user)
