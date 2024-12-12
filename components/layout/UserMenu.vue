<script setup lang="ts">

/*const {user, clear, loggedIn} = useUserSession();

const {ask} = useMessage();
*/
const logout = async () => {
 /* await ask({
    question: `Deseja terminar sessão?`,
    onConfirm: async () => {
      await clear();
      await navigateTo('/auth/login');
    }
  })*/
}

</script>

<template>
  <div class="dropdown-end dropdown z-10">
    <div tabindex="0" class="avatar btn btn-circle btn-ghost">
      <i class="ti ti-user text-3xl"/>
    </div>
    <ul
        tabindex="0"
        class="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow-2xl">
      <li>
        <NuxtLink to="/profile">
          <i class="ti ti-user"/>Perfil
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/notifications">
          <i class="ti ti-bell"/>
          Notificações
          <span class="badge badge-success">12</span>
        </NuxtLink>
      </li>
      <li>
        <a><i class="ti ti-settings"/>Configurações</a>
      </li>
      <li>
        <a @click="logout">
          <i class="ti ti-logout"/>
          Terminar Sessão</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>