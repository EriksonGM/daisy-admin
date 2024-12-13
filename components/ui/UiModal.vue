<script setup lang="ts">
const emit = defineEmits<{
  (e: 'saved'): void,
  (e: 'closed'): void
}>();

const props = defineProps<{
  id: string,
  title: string,
  //size: 'small' | 'medium' | 'large' | 'extra',
  hideButtons?: boolean,
  saveMsg?: string,
  saveIcon?: string,
}>();

function closeModal(){
  const dialog = document.querySelector(`#${props.id}`);
  dialog?.close();
}

const formSaved = () => {
  closeModal();
  emit('saved')
}

const modalClosed = () => {
  closeModal();
  emit('closed')
}

</script>


<template>
  <dialog :id class="modal">
    <div class="modal-box">
      <div class="flex justify-between mb-5">
        <h3 class="text-lg font-bold">{{title}}</h3>
        <button class="btn btn-sm btn-circle btn-ghost" @click="modalClosed">✕</button>
      </div>
      <form @submit.prevent="formSaved">
        <slot/>
        <div class="flex justify-between mt-5" v-if="!hideButtons">
          <button class="btn btn-error dark:text-white" @click="modalClosed" type="button">
            <i class="ti ti-x text-xl"></i> Cancelar
          </button>
          <button class="btn btn-success dark:text-white" type="submit">
            <i class="ti text-xl" :class="saveIcon? saveIcon : 'ti-device-floppy'"></i> {{saveMsg ? saveMsg : 'Guardar'}}
          </button>
        </div>
      </form>
    </div>
  </dialog>
</template>

<style scoped>

</style>