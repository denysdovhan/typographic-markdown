# typographic-markdown

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Ready to use [Textr][textr] plugin for markdown to [make your typography better][typewriter-habits].

Transform your markdown using [`typographic-base`][typographic-base] or other [`typographic-*`][tfs] transformers, **skipping code**.

[typewriter-habits]: http://practicaltypography.com/typewriter-habits.html
[typographic-base]: https://github.com/iamstarkov/typographic-base
[tfs]: https://www.npmjs.com/browse/keyword/typographic

## Install

    npm install --save typographic-markdown

## Usage

You can use it as a [textr-compatible][textr-compatible] text transformer:

```js
import t from 'typographic-markdown';

t(`Hello, "world"...`); // Hello, “world”…
// … or with Ukrainian local (for example)
t(`Hello, "world!"`, { locale: 'uk' }); // Hello, «world»…
```

Take a look how you to use it from [CLI](#cli).

[textr-compatible]: https://github.com/shuvalov-anton/textr#plugins-api

## API

This plugin has similar API as [remark-textr][remark-textr].

### typographicMarkdown(text[, options, plugins])

**Signatures:**

* `typographicMarkdown(text[, options, plugins])`
* `typographicMarkdown(text[, options|plugins])`

#### text

Type: `String`  
Default: `''`

Text that will be transformed.

#### options

Type: `Object`  
Default: `{ locale: 'en-us' }`

It’s Textr’s options. Check out [Textr usage section][textr-usage].

[textr-usage]: https://github.com/shuvalov-anton/textr#usage

#### plugins

Type: `Array`  
Default: `['typographic-base']`

Array of [Textr][textr] plugins. They are available on npm, labelled with [textr][textr-plugins] keyword. Also you can easily create new one. Don’t be scared.

As default it uses [`typographic-base`][typographic-base] bundle that already contains plugins you might want to use.

[textr-plugins]: https://www.npmjs.com/browse/keyword/textr
[remark-textr]: https://github.com/denysdovhan/remark-textr

## CLI

Easy to use **typographic-markdown** from your terminal using [textr-cli][textr-cli]:

```bash
# install textr-cli globaly, also don't forget about md-typographer
$ npm install -g textr-cli typographic-markdown

# … then run `textr` like so
$ textr readme.md -t typographic-markdown -l uk -o fixed.md
```

## Related

* [textr]( https://github.com/shuvalov-anton/textr)
* [textr-cli](https://github.com/denysdovhan/textr-cli)
* [gulp-textr]( https://github.com/andrepolischuk/gulp-textr)
* [grunt-textr]( https://github.com/denysdovhan/grunt-textr)
* [remark-textr][remark-textr]

## License

MIT © [Denys Dovhan](http://denysdovhan.com)

[textr]: https://github.com/shuvalov-anton/textr
[textr-cli]: https://github.com/denysdovhan/textr-cli

[iso]: http://www.wikiwand.com/en/List_of_ISO_639-1_codes

[npm-url]: https://npmjs.org/package/typographic-markdown
[npm-image]: https://img.shields.io/npm/v/typographic-markdown.svg?style=flat-square

[travis-url]: https://travis-ci.org/denysdovhan/typographic-markdown
[travis-image]: https://img.shields.io/travis/denysdovhan/typographic-markdown.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/denysdovhan/typographic-markdown
[coveralls-image]: https://img.shields.io/coveralls/denysdovhan/typographic-markdown.svg?style=flat-square

[depstat-url]: https://david-dm.org/denysdovhan/typographic-markdown
[depstat-image]: https://david-dm.org/denysdovhan/typographic-markdown.svg?style=flat-square
