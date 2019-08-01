## 02 始终声明局部变量

- 反例
```javascript
function swap(a, i, j) {
  temp = a[i] // global
  a[i] = a[j]
  a[j] = a[i]
}
```

- 推荐
```javascript
function swap(a, i, j) {
  var temp = a[i]
  a[i] = a[j]
  a[j] = a[i]
}
```

## 提示
- 始终使用var,let,const等关键字声明变量或常亮
- 考虑使用智能语法提示工具，如webstorm,vscode
