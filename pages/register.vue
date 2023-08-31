<template>
  <NuxtLayout name="auth-layout">
    <p class="text-center text-xl">¡Registrate!</p>
    <div class="flex flex-col gap-3">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Nombre:</span>
        </label>
        <input type="text" placeholder="example@example.com" class="input input-bordered w-full" />
      </div>
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
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Confirmar contraseña:</span>
        </label>
        <input type="password" placeholder="********" class="input input-bordered w-full" />
      </div>
      <div class="form-control">
        <label class="label cursor-pointer flex items-start gap-2">
          <input type="checkbox" class="checkbox checkbox-primary" />
          <span class="label-text">Acepto los Términos del servicio y la Política de Privacidad</span>
        </label>
      </div>
      <button class="btn btn-primary">REGISTRARSE</button>
      <NuxtLink to="/login" class="text-center text-sm link link-hover mt-2">
        ¿Ya tienes una cuenta?, Inicia sesión
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
