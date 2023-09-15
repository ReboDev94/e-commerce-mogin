<script setup lang="ts">
definePageMeta({
  layout: false,
});
const router = useRouter();
</script>
<template>
  <NuxtLayout name="auth-layout">
    <p class="text-center text-xl">¡Bienvenido!</p>
    <div class="flex flex-col gap-3">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Correo electrónico:</span>
        </label>
        <input type="text" placeholder="example@example.com" class="input input-bordered w-full" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Contraseña:</span>
        </label>
        <input type="password" placeholder="********" class="input input-bordered w-full" />
        <label class="label">
          <NuxtLink to="/forgot-password" class="link link-hover label-text-alt"> ¿Olvidaste tu contraseña? </NuxtLink>
        </label>
      </div>

      <button class="btn btn-primary" @click="router.push('/')">Iniciar sesión</button>
      <div class="divider">o</div>
      <div class="flex flex-col md:flex-row gap-2">
        <button class="w-full md:w-1/2 text-[10px] btn btn-ghost">
          <SvgoIconGoogle class="text-xl" filled />
          INICIAR CON GOOGLE
        </button>
        <button class="w-full md:w-1/2 text-[10px] btn btn-ghost">
          <SvgoIconFacebook class="text-xl" filled />
          INICIAR CON FACEBOOK
        </button>
      </div>
      <NuxtLink to="/register" class="text-center text-sm link link-hover my-4">
        ¿Aun no tienes una cuenta?, Registrate
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
