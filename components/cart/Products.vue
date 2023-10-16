<script lang="ts" setup>
const products = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9]);
</script>
<template>
  <div class="lg:p-3">
    <ul class="space-y-5 divide-y mt-2 mb-56 lg:my-0 lg:hidden">
      <li v-for="(item, index) in products" :key="index">
        <div class="flex my-2">
          <img src="/example-1.png" class="h-24 w-20" alt="drink" />
          <div class="flex-1 px-2 py-0">
            <h5 class="font-bold mb-2 line-clamp-1">Azulitro</h5>
            <div class="flex flex-col gap-1">
              <div
                class="flex gap-2 uppercase text-[10px] text-neutral font-semibold"
              >
                <p class="min-w-[4rem]">Precio:</p>
                <div class="flex-1 text-end">$ 25.00</div>
              </div>
              <div
                class="flex items-center gap-2 uppercase text-[10px] text-neutral font-semibold"
              >
                <p class="min-w-[4rem]">Cantidad:</p>
                <div class="flex-1 flex gap-1 justify-end">
                  <button class="btn btn-xs btn-circle">-</button>
                  <input
                    type="number"
                    class="input input-bordered input-xs w-full max-w-[6rem] text-center"
                    value="1"
                  />
                  <button class="btn btn-xs btn-circle">+</button>
                </div>
              </div>
              <div
                class="flex gap-2 uppercase text-[10px] text-neutral font-semibold"
              >
                <p class="min-w-[4rem]">Total:</p>
                <div class="flex-1 text-end">$ 25.00</div>
              </div>
            </div>
            <div class="mt-2 flex justify-end gap-2">
              <button class="btn btn-xs btn-ghost capitalize">Eliminar</button>
              <button class="btn btn-xs btn-ghost capitalize">Guardar</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="overflow-x-auto hidden lg:block">
      <table class="table table-pin-rows">
        <thead class="hidden lg:table-header-group">
          <tr>
            <th />
            <th class="text-center">Nombre</th>
            <th class="text-center">Precio</th>
            <th class="text-center">Cantidad</th>
            <th class="text-center">Total</th>
            <th class="text-center">Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in products" :key="index" class="text-base">
            <td>
              <img
                src="/example-1.png"
                class="h-[6rem] max-h-[6rem] w-[5rem] max-w-[5rem]"
                alt="drink"
              />
            </td>
            <th>Azulitro</th>
            <td>$ 25.00</td>
            <td>
              <div class="flex-1 flex gap-1">
                <button class="btn btn-xs btn-circle">-</button>
                <input
                  type="number"
                  class="input input-bordered input-xs w-full min-w-[3rem] max-w-[6rem] text-center"
                  value="1"
                />
                <button class="btn btn-xs btn-circle">+</button>
              </div>
            </td>
            <th>$ 25.00</th>
            <td>
              <button class="btn btn-xs btn-ghost capitalize">Eliminar</button>
              <button class="btn btn-xs btn-ghost capitalize">Guardar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
