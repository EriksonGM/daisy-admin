<script lang="ts" setup>
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
)

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
</script>

<template>
  <!--  <label class="swap swap-rotate btn btn-circle btn-ghost">
      &lt;!&ndash; this hidden checkbox controls the state &ndash;&gt;
      <input type="checkbox" class="theme-controller" value="dark"/>
      <i class="ti ti-sun text-3xl swap-on"></i>
      <i class="ti ti-moon text-3xl swap-off"></i>
    </label>-->

</template>

<style scoped>

</style>