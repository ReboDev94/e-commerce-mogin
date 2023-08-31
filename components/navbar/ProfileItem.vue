<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle">
      <SvgoIconUser class="text-xl" />
    </label>

    <ul tabindex="0" class="mt-3 z-[1] p-2 shadow-md menu menu-md dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <NuxtLink to="/login">
          <SvgoIconLogin class="text-xl" />
          Iniciar sesiónn
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/register">
          <SvgoIconUser class="text-xl" />
          Registrarse
        </NuxtLink>
      </li>

      <!-- <li>
        <a> Perfil </a>
      </li>
      <li><a>Direcciones</a></li>
      <li><a>Metodos de pago</a></li>
      <li><a>Pedidos</a></li>
      <li><a>Cerrar sesión</a></li> -->
    </ul>
  </div>
</template>
