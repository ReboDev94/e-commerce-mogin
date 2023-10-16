<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import { IStatusOrder } from '~/interfaces/products';

const { status } = defineProps<{ status: IStatusOrder }>();

const { ordered, confirmed, outDelivery, delivered } = status;
</script>

<template>
  <ul class="steps text-[10px]">
    <li data-content="✓" :class="twMerge('step', ordered && 'step-primary')">Ordenado</li>
    <li data-content="✓" :class="twMerge('step', confirmed && 'step-primary')">Confirmado</li>
    <li data-content="✓" :class="twMerge('step', outDelivery && 'step-primary')">En reparto</li>
    <li data-content="✓" :class="twMerge('step', delivered && 'step-primary')">Entregado</li>
  </ul>
</template>
