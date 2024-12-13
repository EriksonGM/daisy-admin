<script setup lang="ts">
import Sidebar from "~/components/layout/Sidebar.vue";
import LightMode from "~/components/layout/LightMode.vue";
import Notifications from "~/components/layout/Notifications.vue";
import UserMenu from "~/components/layout/UserMenu.vue";

useHead({
  bodyAttrs : {
    class : 'drawer min-h-screen bg-base-200 lg:drawer-open'
  }
})


</script>

<template>
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <main class="drawer-content">
    <div class="grid grid-cols-12 grid-rows-[min-content] gap-y-6 p-4 lg:gap-x-6 lg:p-5">
      <header class="col-span-12 flex items-center gap-2 lg:gap-4">
        <label for="my-drawer" class="btn btn-square btn-ghost drawer-button lg:hidden">
          <i class="ti ti-menu-2 text-3xl"></i>
        </label>
        <div class="grow">
         <h1 class="lg:text-2xl lg:font-light" id="page-header">

          </h1>
        </div>
        <LightMode/>
        <Notifications/>
        <UserMenu/>
      </header>
      <slot/>
    </div>
  </main>
  <aside class="drawer-side z-10">
    <label for="my-drawer" class="drawer-overlay"></label>
    <Sidebar/>
  </aside>
</template>

<style scoped>

</style>