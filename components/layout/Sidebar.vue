<script setup lang="ts">

interface SubMenuItem {
  title: string,
  url: string
}

interface MenuItem {
  title: string,
  icon: string,
  url: string | SubMenuItem[]
}


const menus: MenuItem[] = [
  {
    title: 'Inicio',
    icon: 'ti ti-home',
    url: '/'
  },
  /*  {
      title: 'Document',
      icon: 'ti ti-archive',
      url: '/boxes'
    },*/
  {
    title: 'Gestão',
    icon: 'ti ti-settings',
    url: [
      /*{title: 'Especialidades', url: '/patients/create'},*/

      {title: 'Utilizadores', url: '/users'},
    ]
  }
]

</script>

<template>
  <nav class="flex min-h-screen w-72 flex-col gap-2 overflow-y-auto bg-base-100 px-4 py-10">
    <div class="mx-4 flex items-center gap-2 font-black">
      <i class="ti ti-file-like text-6xl me-2"/>
      KiezaDoc
    </div>
    <ul class="menu">
      <li v-for="m in menus">
        <template v-if="m.url instanceof Array">
          <details>
            <summary>
              <i class="text-xl" :class="m.icon"></i>
              {{ m.title }}
            </summary>
            <ul>
              <li v-for="s in m.url">
                <NuxtLink :to="s.url" exact-active-class="active">{{ s.title }}</NuxtLink>
              </li>
            </ul>
          </details>
        </template>
        <template v-else>
          <NuxtLink :to="m.url" exact-active-class="active">
            <i class="text-xl" :class="m.icon"></i>
            {{ m.title }}
          </NuxtLink>
        </template>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>