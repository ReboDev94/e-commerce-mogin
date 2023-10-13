<template>
  <NuxtLayout name="profile-layout">
    <div class="grid grid-cols-12 gap-3">
      <div class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
        <div class="h-36 shadow hover:shadow-xl card border-2 border-success/50 hover:cursor-pointer">
          <div class="card-body grid place-content-center">
            <div class="btn btn-circle btn-success">
              <SvgoIconAdd class="text-xl text-base-100" />
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="{ id, type, name, lastNumber } in payments"
        :key="id"
        class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
      >
        <div
          :class="
            twMerge(
              'h-36 shadow hover:shadow-xl card hover:cursor-pointer bg-gradient-to-r',
              type === 'visa' && 'from-blue-700 via-blue-800 to-gray-900',
              !['visa'].includes(type) && 'from-gray-700 via-gray-900 to-black',
            )
          "
        >
          <div class="card-body relative">
            <div class="w-8 h-8 rounded-full bg-base-100 absolute top-4 left-4 grid place-content-center">
              <SvgoIconAmex v-if="type === 'amex'" class="text-2xl" filled />
              <SvgoIconVisa v-if="type === 'visa'" class="text-2xl" filled />
              <SvgoIconMastercard v-if="type === 'mastercard'" class="text-2xl" filled />
            </div>
            <input type="radio" name="radio-card" class="radio radio-success bg-base-100 absolute top-2 right-2" />
            <div class="text-base-100 absolute inset-x-0 bottom-4 px-4 text-sm flex flex-col gap-1">
              <p class="font-bold">•••• •••• •••• {{ lastNumber }}</p>
              <p class="uppercase line-clamp-1 text-xs font-black">{{ name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
        <div class="h-36 shadow hover:shadow-xl card bg-gradient-to-r from-green-600 to-green-300 hover:cursor-pointer">
          <div class="card-body relative">
            <div class="w-8 h-8 rounded-full bg-base-100 absolute top-4 left-4 grid place-content-center">
              <SvgoIconMoney class="text-2xl text-green-600" />
            </div>
            <input type="radio" name="radio-card" class="radio radio-success bg-base-100 absolute top-2 right-2" />
            <p class="font-black text-base-100 absolute inset-x-0 bottom-4 px-4 text-sm">Efectivo</p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

const payments = reactive([
  {
    id: 1,
    type: 'visa',
    name: 'Rafael de Jesus Rebolledo Hernandez',
    lastNumber: '0888',
  },
  {
    id: 2,
    type: 'mastercard',
    name: 'Rafael de Jesus Rebolledo Hernandez',
    lastNumber: '0888',
  },
  {
    id: 3,
    type: 'amex',
    name: 'Rafael de Jesus Rebolledo Hernandez',
    lastNumber: '0888',
  },
]);
</script>
