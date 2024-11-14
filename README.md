# tfsInput

A customizable Vue 3 input component with animated floating labels for clean, modern forms.

## Features

- Modern UI
- Customizable placeholder, label, and value.
- Emits updates for seamless v-model binding.

## Installation

Install via npm:

```bash
npm install tfs-input
```

## Basic Usage

Import and use the component in your Vue project.

```vue
<template>
  <tInput label="Name" placehold="Enter your name" v-model:val="name" />
</template>

<script setup>
import { ref } from "vue";
import tInput from "tfs-input";

const name = ref("");
</script>
```

## Properties

### Props

| **Prop**    | **Type** | **Description**                     |
| ----------- | -------- | ----------------------------------- |
| `label`     | String   | Text displayed as a floating label. |
| `val`       | String   | Bound value for input.              |
| `placehold` | String   | Placeholder text for input.         |

### Emits

| **Event**    | **Description**                                      |
| ------------ | ---------------------------------------------------- |
| `update:val` | Emits input value updates for v-model compatibility. |

## Credits

- Created by [Farhan Madni](https://github.com/MFM-347)

## License

The code in this repository is licensed under the **MIT License**.

[![License MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
