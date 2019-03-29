# last-match
Return last value from String.match(RegExp) or null

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/Taraflex/last-match/blob/master/LICENSE)

## Install
```sh
npm install last-match --save
```

## Usage

```js
import lastMatch from 'last-match';
console.log(lastMatch('hello world', /o\s*(\w+)/i)); //Output -> world
```