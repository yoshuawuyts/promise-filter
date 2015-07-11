const test    = require('tape')
const filter  = require('./')
const Promise = require('any-promise')

test('promise-filter should assert input types', function(t) {
  t.plan(1)
  t.throws(filter.bind(null, 123))
})

test('promise-filter should filter a fn', function(t) {
  t.plan(1)
  const res = Promise.resolve([1, 2, 3])
    .then(filter(filterFn))
    .then(checkFn)
    .catch(handleErr)

  function filterFn(val) {
    return val >= 2
  }

  function checkFn(val) {
    t.deepEqual([2, 3], val)
  }

  function handleErr() {
    t.fail('catch')
  }
})
