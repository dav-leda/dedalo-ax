# dedalo-ax

## A lightweight alternative to Axios written in TypeScript

<hr>
<br>

**Just 778 bytes minified! 389 bytes minified + gzipped!**

<br>

Check it in **bundlephobia**:

<a href="https://bundlephobia.com/package/dedalo-ax" target="_blank">
  https://bundlephobia.com/package/dedalo-ax
</a>

<br><br>

For comparison, check Axios (29.5Kb):

<a href="https://bundlephobia.com/package/axios" target="_blank">
  https://bundlephobia.com/package/axios
</a>

<br><br>

Obviously, Axios is much more advanced and has many more features (being isomorphic is just one of them) but **dedalo-ax** covers most of Axios' use cases in frontend frameworks and the browser.

<br>
<hr>

**Warning:** To keep it lightweight **this is a browser only library**. It does **not** work in Node.js

<hr>

### Install:

Using npm:

```sh
npm install dedalo-ax
```
Using yarn:

```sh
yarn add dedalo-ax
```
Using pnpm

```sh
pnpm add dedalo-ax
```

<hr>

### Usage:

```js

// Frontend framework (React, Vue, Svelte, etc)
import ax from 'dedalo-ax';

// Browser
import ax from 'https://unpkg.com/dedalo-ax';

// Replace example url with your API url
const url = 'https://example.com/api/v1/';

// Data
const data = { username: 'foo' };
const updatedData = { username: 'bar' };

// Endpoint
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
<hr>


