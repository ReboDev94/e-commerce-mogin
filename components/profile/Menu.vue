<template>
  <div class="flex justify-end">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-sm btn-ghost btn-circle md:hidden">
        <SvgoIconUserSettings class="text-xl" />
      </label>
      <ul
        tabindex="0"
        class="mt-1 md:mt-0 z-[1] md:z-0 shadow-md md:shadow-none menu menu-md rounded-box w-56 space-y-1 md:w-52 px-2 py-3 bg-base-100 max-md:dropdown-content"
      >
        <li>
          <NuxtLink to="/profile">
            <SvgoIconUser class="text-xl" />
            Perfil
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/orders">
            <SvgoIconShopping class="text-xl" />
            Pedidos
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/addresses">
            <SvgoIconLocation class="text-xl" />
            Puntos de entrega
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/payment-methods">
            <SvgoIconCard class="text-xl" />
            Metodos de pago
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.router-link-active {
  @apply active font-bold;
}
</style>
