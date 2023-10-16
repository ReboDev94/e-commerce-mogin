<script setup lang="ts">
const { orderNo, date } = defineProps<{ orderNo: string; date: string }>();
</script>

<template>
  <div class="flex justify-between text-xs font-bold">
    <p class="text-primary">{{ orderNo }}</p>
    <p class="text-neutral">{{ date }}</p>
  </div>
</template>
