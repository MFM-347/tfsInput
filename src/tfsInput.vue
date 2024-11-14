<template>
  <div class="contain">
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
defineProps({
  label: String,
  val: String,
  placehold: String,
});

defineEmits(["update:val"]);
</script>
<style scoped>
.contain {
  position: relative;
}
.inp {
  background-color: transparent;
  color: #27272a;
  border: 1px solid #52525b;
  width: 100%;
  margin: 5px 15px;
  border-radius: 8.75px;
  background: none;
  padding: 12px 16px;
  font-size: 18px;
}
.inp:focus {
  border: 1px solid #2563eb;
  outline: none;
}
.inp::placeholder,
.inp::-webkit-input-placeholder,
.inp::-ms-input-placeholder,
.inp::-moz-input-placeholder {
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
  left: 40px;
  backdrop-filter: blur(8px);
}
.contain:focus-within .label {
  color: #2563eb;
  border: 1px solid #2563eb;
}
</style>
