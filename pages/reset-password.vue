<template>
  <div class="min-h-screen w-full grid place-content-center p-4 lg:py-0">
    <div class="card shadow-xl max-w-lg">
      <div class="card-body text-center gap-5">
        <h2 class="card-title">Restablecer tu contraseña!</h2>
        <p>Por favor ingresa tu nueva contraseña</p>

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
          <input type="password" placeholder="*********" class="input input-bordered w-full" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Confirmar contraseña:</span>
          </label>
          <input type="password" placeholder="*********" class="input input-bordered w-full" />
        </div>
        <div class="card-actions">
          <button class="btn btn-primary btn-block">RECUPERAR CONTRASEÑA</button>
        </div>
      </div>
    </div>
  </div>
</template>
