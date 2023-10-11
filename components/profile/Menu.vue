<template>
  <ul class="menu space-y-1">
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
</template>

<style lang="postcss" scoped>
.router-link-active {
  @apply active font-bold;
}
</style>
