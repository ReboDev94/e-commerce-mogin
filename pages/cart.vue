<template>
  <div class="mx-auto max-w-screen-xl px-5 xl-px-0 grid grid-cols-12 lg:gap-3">
    <div class="col-span-12 lg:p-3 hidden lg:block">
      <h1 class="text-2xl font-bold">Carrito de compras</h1>
    </div>
    <div class="col-span-12 lg:col-span-8">
      <CartProducts />
    </div>
    <div class="col-span-12 lg:col-span-4 fixed lg:static bottom-0 right-0 left-0">
      <CartDetail />
    </div>
  </div>
</template>
