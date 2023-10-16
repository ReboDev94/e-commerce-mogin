<template>
  <div class="sm:py-10">
    <div
      class="flex max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-4xl"
    >
      <div
        class="hidden bg-cover lg:block lg:w-1/2 bg-[url('/auth-img/login.jpg')]"
      ></div>
      <div
        class="w-full min-h-screen sm:min-h-0 px-6 py-8 md:px-8 lg:w-1/2 my-4 lg:my-0"
      >
        <h1 class="text-center font-bold text-2xl mb-2">Mongi chilpo</h1>
        <slot />
      </div>
    </div>
  </div>
</template>
