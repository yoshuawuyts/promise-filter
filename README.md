# promise-filter
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

[Filter][mdn] an array and return a [Promise][promise].

## Installation
```bash
$ npm install promise-filter
```

## Usage
```js
const filter = require('promise-filter')

Promise.resolve([1, 2, 3])
  .then(filter((val) => val >= 2))
// => [2, 3]
```

## Why?
This module is basically equivalent to [`bluebird.filter`][bluebird], but it's
handy to have the one function you need instead of a kitchen sink. Modularity!
Especially handy if you're serving to the browser and need to reduce your
javascript bundle size.

Works great in the browser with
[browserify](http://github.com/substack/node-browserify)!

## See Also
- [promise-every](https://github.com/yoshuawuyts/promise-every)
- [promise-forEach](https://github.com/yoshuawuyts/promise-forEach)
- [promise-map](https://github.com/yoshuawuyts/promise-map)
- [promise-reduce](https://github.com/yoshuawuyts/promise-reduce)
- [promise-some](https://github.com/yoshuawuyts/promise-some)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/promise-filter.svg?style=flat-square
[npm-url]: https://npmjs.org/package/promise-filter
[travis-image]: https://img.shields.io/travis/yoshuawuyts/promise-filter.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/promise-filter
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/promise-filter.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/promise-filter?branch=master
[downloads-image]: http://img.shields.io/npm/dm/promise-filter.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/promise-filter

[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[bluebird]: https://github.com/petkaantonov/bluebird/blob/master/API.md#filterfunction-filterper--object-options---promise
