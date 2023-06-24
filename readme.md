# dedalo-ax

## A lightweight alternative to Axios written in TypeScript

**Warning:** To keep it lightweight **this is a browser only library**. It does **not** work in Node.js

### Install:

Using npm:

```sh
npm i dedalo-ax
```
Using yarn:

```sh
yarn add dedalo-ax
```
Using pnpm

```sh
pnpm add dedalo-ax
```

### Usage:

```js
import ax from 'dedalo-ax';

const url = 'https://example.com/api/v1/';

const data = { username: 'foo' };

const updatedData = { username: 'bar' };

const id = '1';

const endpoint = url + '/' + id;

// GET REQUEST
ax.get(url)
  .then(res => console.log(res));

// POST REQUEST
ax.post(url, data)
  .then(res => console.log(res));

// PUT REQUEST
ax.update(endpoint, updatedData)
  .then(res => console.log(res));

// DELETE REQUEST
ax.delete(endpoint)
  .then(res => console.log(res));
```

