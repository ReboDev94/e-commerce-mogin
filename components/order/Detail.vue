<script setup lang="ts">
const { numberProducts } = defineProps<{
  numberProducts: number;
  subtotal: number;
  shipping: number;
  total: number;
}>();
</script>

<template>
  <span class="flex justify-between text-sm">
    <p>Cantidad:</p>
    <p>{{ numberProducts }}</p>
  </span>
  <span class="flex justify-between text-sm">
    <p>SubTotal:</p>
    <p>{{ convertCurrency(subtotal) }}</p>
  </span>
  <span class="flex justify-between text-sm">
    <p>Envio:</p>
    <p>{{ convertCurrency(shipping) }}</p>
  </span>
  <span class="flex justify-between text-sm">
    <p class="font-extrabold">Total:</p>
    <p>{{ convertCurrency(total) }}</p>
  </span>
</template>
