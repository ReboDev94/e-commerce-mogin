<script setup lang="ts">
import { IOrder } from '~/interfaces/products';
const { orders } = defineProps<{ orders: IOrder[] }>();
</script>

<template>
  <div
    v-for="{ orderNo, date, products, subtotal, shipping, total, status } in orders"
    :key="orderNo"
    class="col-span-12 md:col-span-6 xl:col-span-4 px-3 py-4 border-2 border-dashed border-neutral/30 rounded-md"
  >
    <OrderHeader :order-no="orderNo" :date="date" />
    <div class="divider divider-vertical" />
    <div class="grid grid-cols-12">
      <OrderCarousel :products="products" />
      <div class="col-span-12 grid grid-cols-12">
        <div class="col-span-12 grid place-content-center py-2">
          <OrderStatus :status="status" />
        </div>
        <div class="col-span-12 p-2">
          <OrderDetail :number-products="products.length" :subtotal="subtotal" :shipping="shipping" :total="total" />
        </div>
        <div class="col-span-12 p-2">
          <button class="btn btn-block btn-sm btn-outline btn-primary">Ver detalle</button>
        </div>
      </div>
    </div>
  </div>
</template>
