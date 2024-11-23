# tfsInput <Badge type="tip" text="0.9.8" />

## Installation

Install via npm:

```bash
npm install tfs-input@latest
```

## Usage

Import and use the component in your Vue project.

```vue
<template>
  <tInput
    label="Name"
    primaryColor="yellow"
    textColor="white"
    placehold="Enter your name"
    v-model:val="name"
    theme="auto"
  />
  <p>Hello, {{ name }}!</p>
</template>

<script setup>
import { ref } from "vue";
import tInput from "tfs-input";
import "tfs-input/style.css";

const name = ref("");
</script>
```
