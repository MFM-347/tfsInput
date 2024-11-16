<script>
export default {
  name: "tInput",
};
</script>

<template>
  <div class="contain" :style="colors">
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
  label: String,
  val: String,
  placehold: String,
  primaryColor: {
    type: String,
    default: "#2563eb",
  },
  textColor: {
    type: String,
    default: "#27272a",
  },
});

defineEmits(["update:val"]);

const colors = computed(() => ({
  "--primary": primaryColor,
  "--text": textColor,
}));
</script>

<style scoped>
.contain {
  position: relative;
}

.inp {
  background-color: transparent;
  color: var(--text);
  border: 1px solid #52525b;
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
  color: #71717a;
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
  color: #71717a;
  border: 1px solid #52525b;
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
