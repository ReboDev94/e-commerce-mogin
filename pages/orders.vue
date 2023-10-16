<template>
  <NuxtLayout name="profile-layout">
    <div class="grid grid-cols-12 gap-4">
      <Order :orders="orders" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { IOrder } from '~/interfaces/products';

const orders = reactive<IOrder[]>([
  {
    orderNo: '#MOGIN00001',
    date: '24/10/2023',
    products: [
      {
        img: '/example-1.png',
        name: 'Azulitro',
        price: 75.0,
      },
      {
        img: '/example-1.png',
        name: 'Mogin',
        price: 175.0,
      },
    ],
    subtotal: 75.0,
    shipping: 20.0,
    total: 95.0,
    status: {
      ordered: true,
      confirmed: false,
      outDelivery: false,
      delivered: false,
    },
  },
  {
    orderNo: '#MOGIN00002',
    date: '08/02/2024',
    products: [
      {
        img: '/example-1.png',
        name: 'Azulitro',
        price: 75.0,
      },
      {
        img: '/example-1.png',
        name: 'Mogin',
        price: 175.0,
      },
    ],
    subtotal: 75.0,
    shipping: 20.0,
    total: 95.0,
    status: {
      ordered: true,
      confirmed: true,
      outDelivery: true,
      delivered: false,
    },
  },
]);
</script>
