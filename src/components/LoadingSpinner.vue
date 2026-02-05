<template>
  <div class="loading-container text-center py-5">
    <div class="spinner-border text-primary" role="status" style="width: 4rem; height: 4rem;">
      <span class="visually-hidden">Cargando...</span>
    </div>
    <p class="mt-3 fs-5 text-muted">Cargando usuarios...</p>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.loading-container {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>