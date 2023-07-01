# dedalo-ax

## A lightweight alternative to Axios written in TypeScript

<hr>

**Just 823 bytes minified! 407 bytes minified + gzipped!** 

<hr>

Check it out in **bundlephobia**:

<a href="https://bundlephobia.com/package/dedalo-ax" target="_blank">
  https://bundlephobia.com/package/dedalo-ax
</a>

<br><br>

For comparison, check Axios (29.5Kb):

<a href="https://bundlephobia.com/package/axios" target="_blank">
  https://bundlephobia.com/package/axios
</a>

<br>

Needless to say, Axios is much more advanced and has many more features but **dedalo-ax** covers most of Axios' use cases: simple HTTP requests using JSON as the content type ✅️

<hr>

**Node.js:** Since version 18 Node.js includes the native **fetch API**, making [node-fetch](https://www.npmjs.com/package/node-fetch) **no longer necessary** 👍️

Therefore, **SSR usage will only work if Node.js is v18 or higher** ⚠️ As for CSR (i.e., vanilla React, Svelte, Vue, etc.) the Node.js version won't matter 👍️

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
Using pnpm:

```sh
pnpm add dedalo-ax
```

<hr>

### Usage:


```js
// Frontend Framework (React, Vue, Svelte, etc)
import { ax } from 'dedalo-ax';

// Vanilla JS (Browser)
// Remember: import statements must be inside script of type "module"
// <script type="module">
import { ax } from 'https://unpkg.com/dedalo-ax';

// Replace example url with your API url
const url = 'https://example.com/api/users';

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
ax.put(endpoint, updatedData)
  .then(res => console.log(res));

// DELETE REQUEST
ax.delete(endpoint)
  .then(res => console.log(res));
```
<hr>

### Abort Controller

The abort controller has a timespan of 5 seconds by default after which, if the server doesn't respond, the request is aborted.

<hr>

### Use with React:


```js
import { useState, useEffect } from 'react';
import { ax } from 'dedalo-ax';

const { stringify } = JSON;
const url = 'https://jsonplaceholder.typicode.com/todos/1';

const App = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    ax.get(url).then(res => setData(res))
  }, []);
  
  return (
    <>
      <h1>dedalo-ax + React</h1>
      
      {(!data && !ax.error)
          ? <p>Loading...</p>
          : <>
              {(!data && ax.error) 
                ? <p>{ax.error}</p> 
                : <pre>{stringify(data)}</pre>
              }
            </>
      }    
    </>
  )
}

export default App
```

<hr>

### Use with Svelte:


```js
<script>

  import { ax } from 'dedalo-ax';

  const { stringify } = JSON;
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  let data = ax.get(url);

</script>

<main>
  <h1>dedalo-ax + Svelte</h1>

  {#await data}
    <p>Loading...</p>
  {:then data}

    {#if data}
      <pre> {stringify(data)} </pre>
    {:else}
      <p> {ax.error} </p>
    {/if}
  
  {/await}
</main>
```

<hr>

### Use with Vue 3 (Composition API):


```html
<script setup>
import { ref, watchEffect } from 'vue';
import { ax } from 'dedalo-ax';

const url = 'https://jsonplaceholderr.typicode.com/todos/1';

const data = ref(null);
const error = ref(null);
const loading = ref(false);

watchEffect(async () => {
  loading.value = true
  data.value = await ax.get(url)
  error.value = ax.error
  loading.value = false
})
</script>

<template>
  <main>
    
    <h1 class="title">dedalo-ax + Vue 3</h1>

    <p v-if="loading">Loading...</p>
    <p v-else-if="error">{{ error }}</p>
    <pre v-else>{{ data }}</pre>

  </main>
</template>
```

<hr>


### Use with Vue 2 (Options API):


```html
<template>
  <main>
    
    <h1 class="title">dedalo-ax + Vue 2</h1>

    <p v-if="loading">Loading...</p>
    <p v-else-if="error">{{ error }}</p>
    <pre v-else>{{ data }}</pre>

  </main>
</template>

<script>

import { ax } from 'dedalo-ax';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

export default {

  data: () => ({
    data: null, 
    error: null,
    loading: false,
  }),

  async created() {
    this.loading = true
    this.data = await ax.get(url)
    this.error = ax.error
    this.loading = false
  }
}
</script>
```

<hr>