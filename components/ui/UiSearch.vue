<script setup lang="ts">
const model = defineModel()

const emit = defineEmits<{
  (e: 'search', text: string): void
}>()

const emitSearch = (event: any) => {
  emit("search", event.target.value);
}

</script>

<template>
  <label class="input input-bordered flex items-center gap-2">
    <input type="search" class="grow" placeholder="Filtro" v-model.trim="model" @keyup.enter="emitSearch"/>
    <i class="ti ti-search opacity-70"></i>
  </label>
</template>

<style scoped>

</style>