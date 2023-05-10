# Faviconic

[![NPM version](https://img.shields.io/npm/v/npm-package-template.svg)](https://www.npmjs.com/package/faviconic)

Get the icon from any domain with no external dependencies.

## Install

Install faviconic using `npm` or `yarn`.

`yarn add faviconic`

or

`npm install faviconic --save`

## Usage

Faviconic is very simple to use. Just import the `getIcon` function and you are good to go.

```js
import { getIcon } from "faviconic"

const { url } = getIcon("yahoo.com"); // just the domain

const { url } = getIcon("https://yahoo.com") // with the protocol

const { url, size } = getIcon("yahoo.com") // with icon size

// size: { width: 512, height: 512 }
```


## License

This is licensed with the [MIT](https://github.com/joshsny/faviconic/blob/master/LICENSE) license, so you can use it however you like 😊
