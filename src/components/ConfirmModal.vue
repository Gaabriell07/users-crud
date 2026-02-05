<template>
  <div class="modal fade show d-block" tabindex="-1" @click.self="$emit('cancel')">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content shadow-lg">
        <div class="modal-header border-0">
          <h5 class="modal-title text-danger">
            ⚠️ Confirmar Eliminación
          </h5>
          <button 
            type="button" 
            class="btn-close" 
            @click="$emit('cancel')">
          </button>
        </div>
        
        <div class="modal-body text-center py-4">
          <p class="fs-5 mb-2">
            ¿Estás seguro de que deseas eliminar al usuario?
          </p>
          <p class="text-muted mb-0">
            <strong>{{ user.name }}</strong>
          </p>
          <p class="text-muted small">
            {{ user.email }}
          </p>
          <div class="alert alert-warning mt-3">
            Esta acción no se puede deshacer
          </div>
        </div>
        
        <div class="modal-footer border-0">
          <button 
            type="button" 
            class="btn btn-secondary" 
            @click="$emit('cancel')">
            Cancelar
          </button>
          <button 
            type="button" 
            class="btn btn-danger" 
            @click="$emit('confirm')">
            🗑️ Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
</template>

<script setup lang="ts">
import type { User } from '../types/User'

defineProps<{
  user: User
}>()

defineEmits<{
  confirm: []
  cancel: []
}>()
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>