<template>
  <NuxtLayout name="profile-layout">
    <div class="flex items-center justify-between pb-4">
      <h1 class="text-xl font-semibold">Direcciones</h1>
      <button class="btn btn-primary btn-sm capitalize">
        Agregar dirección
      </button>
    </div>
    <ul class="space-y-2">
      <li v-for="item in 2" :key="item" class="w-full">
        <div
          class="px-3 py-2 border-2 border-dashed border-neutral/30 rounded-md relative group"
        >
          <input
            type="radio"
            name="radio-card"
            class="radio radio-success bg-base-100 absolute top-2 right-2 z-[3]"
          />
          <div
            class="invisible group-hover:visible group-hover:bg-primary/20 absolute inset-0 z-[2] flex items-center justify-center gap-4"
          >
            <div class="lg:tooltip" data-tip="Eliminar">
              <button class="btn btn-circle btn-error btn-sm">
                <SvgoIconDelete />
              </button>
            </div>
            <div class="lg:tooltip" data-tip="Editar">
              <button class="btn btn-circle btn-primary btn-sm">
                <SvgoIconEdit />
              </button>
            </div>
          </div>
          <div>
            <div class="flex items-center gap-4">
              <SvgoIconHome class="fill-neutral text-2xl" />
              <span class="text-neutral text-sm font-bold">Casa Principal</span>
            </div>
          </div>
          <div class="flex flex-col text-xs gap-1 mt-2">
            <p>Código postal 39020 - Guerrero - Chilpancingo De Los Bravo</p>
            <p>Rafael de Jesus Rebolledo - 7471333871</p>
          </div>
        </div>
      </li>
    </ul>
  </NuxtLayout>
</template>
