# md-typographer

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Markdown transformers to [make your typography better][typewriter-habits].

This plugin transforms only _text_ nodes from your markdown using [`typographic-*`][tfs] transformers and [mdast][mdast]. All of those transformers are being composed using [Textr][textr]. By the way, you can add your own transformers or disable default ones.

[typewriter-habits]: http://practicaltypography.com/typewriter-habits.html
[tfs]: https://github.com/denysdovhan/mdast-typographer/blob/master/package.json#L53-L65
[mdast]: http://mdast.js.org/
[textr]: https://github.com/shuvalov-anton/textr


## Install

Install **md-typographer** using [npm][npm]:

    npm install --save mdast-typographer

[npm]: https://docs.npmjs.com/cli/install

## Usage

You can use it as a [textr-compatible][textr-compatible] text transformer:

```js
import typographer from 'md-typographer';

typographer(`Hello, "world"...`); // Hello, “world”…
// … or with Ukrainian local (for example)
typographer(`Hello, "world!"`, { locale: 'uk' }); // Hello, «world»…
```

Take a look how you to use it from [CLI](#cli), [textr](#textr), [gulp](#gulp) and [grunt](#grunt).

[textr-compatible]: https://github.com/shuvalov-anton/textr#plugins-api

## API

This plugin has similar API as [mdast-typographer][mdast-typographer].

### typographer(input[, options])

Transforms only _text_ nodes and fixes your typography. Returns corrected markdown.

#### input

*Required*  
Type: `String`

Your any markdown string.

#### options

Type: `Object`

Options will be passed into plugin.

##### options.modules

Type: `Object`
Default: `{}`

`modules` object contains pairs of transformers and boolean value. If value equals `false`, then this transformer won't be executed. If value equals `true`, that transformer will be used as usual.

As default, mdast-typographer uses these transformers:

* **`apostrophes` — [typographic-apostrophes][apostrophes]** — typographic apostrophes in contractions and for possessive case.
* **`quotes` — [typographic-quotes][quotes]** —  typographic quotes for your text with respect to locale.
* **`plurals` — [typographic-apostrophes-for-possessive-plurals][plurals]** — typographic apostrophes for progressive plurals.
* **`arrows` — [typographic-arrows][arrows]** — typographic real arrows.
* **`copyright` — [typographic-copyright][copyright]** — typographic copyright.
* **`currency` — [typographic-currency][currency]** — replaces name of currency
* **`ellipses` — [typographic-ellipses][ellipses]** — avoids using periods and
* **`em` — [typographic-em-dashes][em]** — replaces `--` to em dash.
* **`en` — [typographic-en-dashes][en]** — safely replacing hyphens in a range of values with en dashes only.
* **`math` — [typographic-math-symbols][math]** — replaces alphabetic math symbols to real symbols.
* **`registered` — [typographic-registered-trademark][registered]** — replaces alphabetic registered trademark to real symbol.
* **`spaces` — [typographic-single-spaces][spaces]** — replace many spaces to one space.
* **`trademark` — [typographic-trademark][trademark]** — replaces alphabetic trademark to real symbol.

If you don't wanna transform anything, you can disable all modules like so:

```
{
  modules: false
}
```

##### options.locale

Type: `String`  
Default: `en-us`

[ISO 639][iso] locale code. It's important for right correction, basically for proper primary and secondary quotes.

##### options.before

Type: `Array`  
Default: `[]`

Array of custom transformers that will be executed _before_ another.

##### options.after

Type: `Array`  
Default: `[]`

Array of custom transformers that will be executed _after_ another.
[mdast-typographer]: https://github.com/denysdovhan/mdast-typographer

## Examples

### [CLI][textr-cli]

Easy to use **md-typographer** from your CLI using [textr-cli][textr-cli].

```bash
# install textr-cli globaly, also don't forget about md-typographer
$ npm install -g textr-cli **md-typographer**

# … then run `textr` like so
$ textr foo.md -t md-typographer -l en-us -o bar.md
```

### [textr][textr]

**md-typographer** is fully compatible with [Textr][textr], so just use it as regular plugin:

```js
import textr from 'textr';
import typographer from 'md-typographer';

const tf = textr({ locale: 'en-us' }).use(typographer);

tf(`Hello, "world"...`); // Hello, “world”…
```


### [gulp][gulp]

You can easily use **md-typographer** in your `gulpfile.js` with [gulp-textr][gulp-textr] plugin like so:

```js
import gulp from 'gulp';
import textr from 'gulp-textr';
import typographer from 'md-typographer';

gulp.task('typo', () =>
  gulp.src('foo.md') // Hello, “world”…
    .pipe(textr({locale: 'en-us'}).use(typographer))
    .pipe(gulp.dest('dist')); // Hello, “world”…
);
```

### [grunt][grunt]

If you are using **Grunt**, check out [grunt-textr][grunt-textr] plugin and use it like this:

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    textr: {
      options: {
        locale: 'en-us',
        plugins: [
          require('md-typographer')
        ]
      },
      files: {
        'dist/foo.md': 'src/bar.md'
      }
    }
});

grunt.registerTask('typo', ['textr']);
```

[textr-cli]: https://github.com/denysdovhan/textr-cli
[textr]: https://github.com/shuvalov-anton/textr
[gulp]: gulpjs.com
[gulp-textr]: https://github.com/andrepolischuk/gulp-textr
[grunt]: http://gruntjs.com/
[grunt-textr]: https://github.com/denysdovhan/grunt-textr

## License

MIT © [Denys Dovhan](http://denysdovhan.com)

[apostrophes]: https://github.com/iamstarkov/typographic-apostrophes
[quotes]: https://github.com/iamstarkov/typographic-quotes
[plurals]: https://github.com/iamstarkov/typographic-apostrophes-for-possessive-plurals
[arrows]: https://github.com/andrepolischuk/typographic-arrows
[copyright]: https://github.com/iamstarkov/typographic-copyright
[currency]: https://github.com/talgautb/typographic-currency
[ellipses]: https://github.com/iamstarkov/typographic-ellipses
[em]: https://github.com/iamstarkov/typographic-em-dashes
[en]: https://github.com/iamstarkov/typographic-en-dashes
[math]: https://github.com/iamstarkov/typographic-math-symbols
[registered]: https://github.com/iamstarkov/typographic-registered-trademark
[spaces]: https://github.com/iamstarkov/typographic-single-spaces
[trademark]: https://www.npmjs.com/package/typographic-trademark

[npm-url]: https://npmjs.org/package/md-typographer
[npm-image]: https://img.shields.io/npm/v/md-typographer.svg?style=flat-square

[travis-url]: https://travis-ci.org/denysdovhan/md-typographer
[travis-image]: https://img.shields.io/travis/denysdovhan/md-typographer.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/denysdovhan/md-typographer
[coveralls-image]: https://img.shields.io/coveralls/denysdovhan/md-typographer.svg?style=flat-square

[depstat-url]: https://david-dm.org/denysdovhan/md-typographer
[depstat-image]: https://david-dm.org/denysdovhan/md-typographer.svg?style=flat-square
