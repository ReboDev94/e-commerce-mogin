<template>
  <div class="navbar bg-base-100 py-4 flex-col lg:flex-row">
    <div class="flex-1">
      <h1 class="btn btn-ghost normal-case text-xl">Mogin chilpo</h1>
    </div>

    <div class="flex gap-2 lg:gap-1 lg:justify-end w-full lg:w-auto my-2 lg:my-0">
      <div class="form-control flex-1 lg:flex-none">
        <input type="text" placeholder="Search" class="input input-bordered input-md w-full lg:w-72" />
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <SvgoIconUser class="text-xl" />
        </label>

        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a> Perfil </a>
          </li>
          <li><a>Direcciones</a></li>
          <li><a>Metodos de pago</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <SvgoIconShopping class="text-xl" />
            <span class="badge badge-sm indicator-item">8</span>
          </div>
        </label>
        <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div class="card-body">
            <span class="font-bold text-lg">8 Productos</span>
            <span class="text-info">Subtotal: $999.00</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">Ver carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
