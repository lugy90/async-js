Object.prototype[Symbol.iterator] = function* () {
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      yield [key, this[key]]
    }
  }
}