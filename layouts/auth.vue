<script lang="ts" setup>

</script>

<template>
  <!--  <div class="hero bg-base-200 min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ">-->
  <div class="hero bg-base-200 min-h-screen" id="layout">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold flex items-center text-white " style="text-shadow: 2px 2px 2px orange;">
          <i class="ti ti-flower-filled text-9xl"></i>
          Daisy
        </h1>
        <p class="py-6 text-2xl text-white" style="text-shadow: 1px 1px 1px orange;">
          Sistema Integrado de Gestão Documental
        </p>
      </div>
      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <slot/>
      </div>
    </div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
  </div>
</template>

<style scoped>
#layout {
  margin: auto;
  overflow: auto;
  background: linear-gradient(315deg, rgba(101,0,94,1) 3%, rgba(60,132,206,1) 38%, rgba(48,238,226,1) 68%, rgba(255,25,25,1) 98%);
  animation: gradient 60s ease infinite;
  background-size: 400% 400%;
  background-attachment: fixed;
}

@keyframes gradient {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

</style>