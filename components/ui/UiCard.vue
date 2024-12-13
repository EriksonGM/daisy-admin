<script setup lang="ts">
const props = defineProps<{ title?: string }>()
</script>

<template>
  <section class="card card-compact bg-base-100 shadow">
    <div class="card-body grow-0">
      <div class="flex justify-between gap-2">
        <h2 class="card-title grow">
          {{ title }}
        </h2>
        <slot name="actions"/>
      </div>
      <slot/>
    </div>
    <slot name="out-body"/>
  </section>
</template>

<style scoped>

</style>