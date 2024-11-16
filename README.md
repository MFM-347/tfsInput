# tfsInput

A customizable Vue 3 input component with animated floating labels for clean, modern forms.

## Features

- Modern and minimalistic UI with smooth transitions.
- Customizable placeholder, label, and value for flexible usage.
- Built-in support for two-way binding using `v-model`.
- Dynamic theme customization, including primary and text colors.
- Lightweight, performant, and designed with accessibility in mind.

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

## Properties

### Props

| **Prop**       | **Type** | **Description**                     |
| -------------- | -------- | ----------------------------------- |
| `label`        | String   | Text displayed as a floating label. |
| `val`          | String   | Bound value for input.              |
| `placehold`    | String   | Placeholder text for input.         |
| `primaryColor` | string   | Customizes the primary color.       |
| `textColor`    | string   | Customizes the text color.          |

### Emits

| **Event**    | **Description**                                      |
| ------------ | ---------------------------------------------------- |
| `update:val` | Emits input value updates for v-model compatibility. |

## Credits

- Created by [Farhan Madni](https://github.com/MFM-347)

## License

The code in this repository is licensed under the **MIT License**.

[![License MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
