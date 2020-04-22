const normalTime = time => {
  if (time) {
    var oDate = new Date()
    oDate.setTime(time)

    var y = oDate.getFullYear()
    var m = oDate.getMonth() + 1
    var d = oDate.getDate()

    var h = oDate.getHours()
    var mt = oDate.getMinutes()
    var s = oDate.getSeconds()

    return y + '-' + m + '-' + d + ' ' + h + ':' + mt + ':' + s
  }
}
// 补零
const fillZero = num => {
  return num < 10 ? '0' + num : num
}

// 首字母大写
const capitalize = value => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}
export default {
  normalTime,
  fillZero,
  capitalize
}
