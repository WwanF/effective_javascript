var i, n, sum // globals
function averageScore(players) {
  sum = 0
  for (i = 0, n = players.length; i < n; i++) {
    sum += score(players[i])
  }
  return sum / n
}

var i, n, sum // same globals as averageScore
function score(player) {
  sum = 0
  for (i = 0, n = player.levels.length; i < n; i++) {
    sum += player.levels[i].score
  }
  return sum / n
}

this.foo // undefined
foo = 'global foo'
this.foo // 'global foo'

var bar = 'global bar'
this.bar = 'changed'
bar // 'changed'

// 能力检测
if (!this.JSON) {
  this.JSON = {
    parse() {
    },
    stringify() {
    }
  }
}
