<template>
  <div class="px-4 xl:px-0 pb-10 pt-4">
    <div class="mx-auto max-w-screen-xl shadow-sm rounded-lg border">
      <div class="px-5 md:px-4 py-5 flex flex-col md:flex-row">
        <ProfileMenu />
        <div class="divider divider-vertical md:divider-horizontal" />
        <div class="flex-1 flex flex-col my-6">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
