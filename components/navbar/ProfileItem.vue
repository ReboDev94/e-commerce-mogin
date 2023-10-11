<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle">
      <SvgoIconUser class="text-xl" />
    </label>

    <ul tabindex="0" class="mt-3 z-[1] p-2 shadow-md menu menu-md dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <NuxtLink to="/login">
          <SvgoIconLogin class="text-xl" />
          Iniciar sesión
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/register">
          <SvgoIconUser class="text-xl" />
          Registrarse
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/profile">
          <SvgoIconUser class="text-xl" />
          Perfil
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/login">
          <SvgoIconLogout class="text-xl" />
          Cerrar sesión
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
