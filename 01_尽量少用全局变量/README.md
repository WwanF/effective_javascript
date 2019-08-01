# 01 尽量少用全局变量

- 反例
```bash
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
```

- 反例
```javascript
this.foo // undefined
foo = 'global foo'
this.foo // 'global foo'

var bar = 'global bar'
this.bar = 'changed'
bar // 'changed'
```

- 推荐
```javascript
function averageScore(players) {
  var i, n, sum 
  sum = 0
  for (i = 0, n = players.length; i < n; i++) {
    sum += score(players[i])
  }
  return sum / n
}

function score(player) {
  var i, n, sum 
  sum = 0
  for (i = 0, n = player.levels.length; i < n; i++) {
    sum += player.levels[i].score
  }
  return sum / n
}
```

- 推荐
```javascript
// 能力检测
if (!this.JSON) {
  this.JSON = {
    parse() {
    },
    stringify() {
    }
  }
}
```

## 提示
- 避免声明全局变量
- 尽量生命局部变量
- 避免对全局对象添加属性
- 使用全局对象来做平台特性检测
