# glue-text [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/glue-text/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/glue-text)

Ensure text is not broken when its container is resized. Useful for ensuring [kaomoji remain together](https://getdango.com/unbreakable-kaomoji/).

[![NPM Badge](https://nodei.co/npm/glue-text.png)](https://npmjs.com/package/glue-text)

## Install

```sh
npm install glue-text
```

## Usage

```js
const glueText = require("glue-text")

// Add no-break spaces
glueText("a b c")
//=> "a b ⁠c"

// Add word joiners
glueText("o-o")
//=> "o-⁠o"
```

## API

### glueText(input)

#### input

Type: `string`

The text to glue.
