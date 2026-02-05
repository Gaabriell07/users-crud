<template>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 9999">
    <div 
      class="toast show" 
      :class="`bg-${type}`"
      role="alert">
      <div class="toast-body text-white d-flex align-items-center">
        <strong>{{ message }}</strong>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string
  type?: string
}>()
</script>

<style scoped>
.toast {
  min-width: 250px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
</style>