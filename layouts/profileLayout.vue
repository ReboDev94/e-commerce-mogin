<template>
  <div class="px-4 xl:px-0 pb-10 pt-4">
    <div class="mx-auto max-w-screen-xl shadow-sm rounded-lg border">
      <div class="px-3 py-5 flex flex-row">
        <div class="w-52">
          <ProfileMenu />
        </div>
        <div class="divider divider-horizontal" />
        <div class="flex-1 flex flex-col my-6">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
