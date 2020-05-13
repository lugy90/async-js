// Object.prototype[Symbol.iterator] = function () {
//   var i = 0
//   var items = Object.entries(this)
//   return {
//     next: function () {
//       var done = (i >= items.length)
//       var value = !done ? items[i++] : undefined
//       return {
//         done: done,
//         value: value
//       }
//     }
//   }
// }

Object.prototype[Symbol.iterator] = function* () {
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      yield [key, this[key]]
    }
  }
}