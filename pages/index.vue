<template>
  <div class="mx-auto max-w-screen-2xl">
    <Navbar />
    <div class="mx-auto px-5 xl:px-0 max-w-screen-xl grid grid-cols-12">
      <div class="lg:hidden col-span-12 flex items-center justify-end">
        <div class="dropdown dropdown-end">
          <button tabindex="0" class="btn btn-ghost btn-sm">
            Filtros
            <SvgoIconFilter class="text-xl" />
          </button>
          <div tabindex="0" class="mt-3 z-[1] shadow-md dropdown-content bg-base-100 rounded-box">
            <ProductFilter />
          </div>
        </div>
      </div>
      <div class="divider col-span-12"></div>
      <div class="hidden lg:block lg:col-span-3">
        <ProductFilter />
      </div>
      <div class="col-span-12 lg:col-span-9">
        <div class="grid grid-cols-12 gap-4">
          <div v-for="(item, index) in 20" :key="index" class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
