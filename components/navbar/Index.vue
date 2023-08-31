<template>
  <div class="navbar bg-base-100 py-2 flex-col lg:flex-row">
    <NavbarTitleItem />
    <div class="flex gap-2 lg:gap-1 lg:justify-end w-full lg:w-auto my-2 lg:my-0">
      <div class="form-control flex-1 lg:flex-none">
        <input type="text" placeholder="Search" class="input input-bordered input-md w-full lg:w-72" />
      </div>
      <NavbarProfileItem />
      <NavbarCarItem />
    </div>
  </div>
</template>
