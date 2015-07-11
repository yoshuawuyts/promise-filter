const assert  = require('assert')
const Promise = require('any-promise')

module.exports = filter

// Apply a function to all values.
// @param {Mixed|Mixed[]} val
// @param {Mixed} ctx
// @return {Function}
function filter(fn, ctx) {
  assert.equal(typeof fn, 'function')
  return function(val) {
    val = Array.isArray(val) ? val : [val]
    return Promise.resolve(val.filter(fn, ctx))
  }
}
