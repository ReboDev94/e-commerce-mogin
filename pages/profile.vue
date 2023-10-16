<template>
  <NuxtLayout name="profile-layout">
    <h1 class="w-full text-xl font-semibold mb-4">Mi perfil</h1>

    <div class="avatar">
      <div class="w-24 rounded-full">
        <img src="https://i.pravatar.cc" />
      </div>
    </div>

    <div class="divider" />
    <div class="grid grid-cols-12">
      <div class="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
        <h2 class="font-semibold">Nombre completo</h2>
        <span class="text-xs text-neutral">Escribe tu nombre completo</span>
      </div>
      <div class="col-span-12 md:col-start-5 md:col-end-10 my-auto">
        <input
          type="text"
          placeholder="Yaretzin Araujo Delgado"
          class="input input-md input-bordered w-full"
        />
      </div>
    </div>
    <div class="divider" />
    <div class="grid grid-cols-12">
      <div class="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
        <h5 class="font-semibold">Teléfono celular</h5>
        <span class="text-xs text-base-500"
          >Escribe tu número de teléfono celular</span
        >
      </div>
      <div class="col-span-12 md:col-start-5 md:col-end-10 my-auto">
        <input
          type="text"
          placeholder="7471222324"
          class="input input-md input-bordered w-full"
        />
      </div>
    </div>
    <div class="divider" />
    <div class="grid grid-cols-12">
      <div class="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
        <h5 class="font-semibold">Correo electrónico</h5>
        <span class="text-xs text-base-500">Escribe tu correo electrónico</span>
      </div>
      <div class="col-span-12 md:col-start-5 md:col-end-10 my-auto">
        <input
          type="text"
          placeholder="example@gmail.com"
          class="input input-md input-bordered w-full"
        />
      </div>
    </div>
    <div class="divider" />
    <div class="grid grid-cols-12">
      <div class="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
        <h5 class="font-semibold">Fecha de nacimiento</h5>
        <span class="text-xs text-base-500"
          >Selecciona tu fecha de nacimiento</span
        >
      </div>
      <div class="col-span-12 md:col-start-5 md:col-end-10 my-auto">
        <input type="date" class="input input-md input-bordered w-full" />
      </div>
    </div>
    <div class="divider" />
    <div class="grid grid-cols-12">
      <div class="col-span-12 mb-2 md:col-span-4 md:mb-0 md:pr-2">
        <h5 class="font-semibold">Foto de perfil (opcional)</h5>
        <span class="text-xs text-base-500">Selecciona una foto de perfil</span>
      </div>
      <div class="col-span-12 md:col-start-5 md:col-end-10 my-auto">
        <input
          type="file"
          class="file-input file-input-bordered w-full file-input-md"
        />
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts"></script>
