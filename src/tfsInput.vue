<script>
export default {
  name: "tInput",
};
</script>

<template>
  <div class="contain" :class="theme" :style="colors">
    <input
      class="inp"
      name="text"
      type="text"
      :placeholder="placehold"
      :value="val"
      @input="$emit('update:val', $event.target.value)"
    />
    <label class="label"> {{ label }} </label>
  </div>
</template>

<script setup>
import { computed } from "vue";

const { label, val, placehold, primaryColor, textColor } = defineProps({
  label: {
    type: String,
    default: "Label",
  },
  val: {
    type: String,
    default: "Input Value",
  },
  placehold: {
    type: String,
    default: "Placeholder",
  },
  primaryColor: {
    type: String,
    default: "#2563eb",
    validator: (value) => /^#([0-9A-F]{3}){1,2}$/i.test(value),
  },
  textColor: {
    type: String,
    default: "#27272a",
    validator: (value) => /^#([0-9A-F]{3}){1,2}$/i.test(value),
  },
  theme: {
    type: String,
    default: "auto",
  },
});

defineEmits(["update:val"]);

const colors = computed(() => ({
  "--primary": primaryColor,
  "--text": textColor,
}));
</script>

<style scoped>
:root,
.light,
.auto {
  --c1: #52525b;
  --c2: #71717a;
}
.dark {
  --c1: #71717a;
  --c2: #a1a1aa;
}
@media (prefers-color-scheme: dark) {
  .auto {
    --c1: #71717a;
    --c2: #a1a1aa;
  }
}
.contain {
  position: relative;
}

.inp {
  background-color: transparent;
  color: var(--text);
  border: 1px solid var(--c1);
  width: 90%;
  margin: 5px 15px;
  border-radius: 8.75px;
  background: none;
  padding: 12px 16px;
  font-size: 18px;
}

.inp:focus {
  border: 1px solid var(--primary);
  outline: none;
}

.inp::placeholder {
  color: var(--c2);
}

.inp,
.label {
  transition:
    color,
    background-color,
    border-color 0.2s ease-out;
}

.label {
  background-color: transparent;
  color: var(--c2);
  border: 1px solid var(--c1);
  font-size: 15px;
  font-weight: 600;
  padding: 0 6px;
  border-radius: 7.25px;
  position: absolute;
  top: -12px;
  left: 24px;
  backdrop-filter: blur(8px);
}

.contain:focus-within .label {
  color: var(--primary);
  border: 1px solid var(--primary);
}
</style>
