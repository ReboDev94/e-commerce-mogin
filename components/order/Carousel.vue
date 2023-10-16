<script setup lang="ts">
import { IProductOrder } from '~/interfaces/products';
const { itemSelected, previousItem, nextItem, hasNext, hasPrevious, setItems } = useCarousel<IProductOrder>();
const { products } = defineProps<{ products: IProductOrder[] }>();

onMounted(() => {
  setItems(products);
});
</script>

<template>
  <div class="col-span-12">
    <div v-if="itemSelected" class="h-52 max-h-52">
      <div class="relative h-36 px-3 py-2 grid place-content-center">
        <div v-if="hasPrevious" class="z-10 absolute top-1/2 -translate-y-1/2 h-9 w-9 grid place-content-center">
          <button class="btn btn-circle btn-primary btn-xs btn-outline" @click="previousItem">
            <SvgoIconArrowX class="fill-base-100 text-xl" />
          </button>
        </div>
        <div class="absolute inset-0 grid place-content-center">
          <img :src="itemSelected.img || 'https://placehold.co/300x400'" class="h-32 w-28 rounded-md" alt="drink" />
        </div>
        <div v-if="hasNext" class="z-10 absolute top-1/2 right-0 -translate-y-1/2 h-9 w-9 grid place-content-center">
          <button class="btn btn-circle btn-primary btn-xs btn-outline" @click="nextItem">
            <SvgoIconArrowX class="fill-base-100 text-xl rotate-180" />
          </button>
        </div>
      </div>
      <div class="px-3 py-2 text-center">
        <h4 class="font-bold line-clamp-1">{{ itemSelected.name }}</h4>
        <span class="text-xs">{{ convertCurrency(itemSelected.price) }}</span>
      </div>
    </div>
    <div v-else class="h-52 max-h-52 grid place-content-center">
      <span class="loading loading-ring loading-lg text-primary"></span>
    </div>
  </div>
</template>
