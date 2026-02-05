<template>
  <div class="card shadow">
    <div class="card-body p-0">
      <div class="table-responsive">
        <table class="table table-hover table-striped mb-0">
          <thead class="table-primary">
            <tr>
              <th class="px-4 py-3">ID</th>
              <th class="px-4 py-3">Nombre</th>
              <th class="px-4 py-3">Usuario</th>
              <th class="px-4 py-3">Email</th>
              <th class="px-4 py-3">Teléfono</th>
              <th class="px-4 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td class="px-4 py-3">{{ user.id }}</td>
              <td class="px-4 py-3 fw-semibold">{{ user.name }}</td>
              <td class="px-4 py-3 text-muted">{{ user.username }}</td>
              <td class="px-4 py-3 text-muted">{{ user.email }}</td>
              <td class="px-4 py-3 text-muted">{{ user.phone }}</td>
              <td class="px-4 py-3 text-center">
                <button 
                  @click="emit('edit-user', user)"
                  class="btn btn-sm btn-outline-primary me-2">
                  ✏️ Editar
                </button>
                <button 
                  @click="emit('delete-user', user)"
                  class="btn btn-sm btn-outline-danger">
                  🗑️ Eliminar
                </button>
              </td>
            </tr>
            <tr v-if="users.length === 0">
              <td colspan="6" class="text-center py-5 text-muted">
                No hay usuarios registrados
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from '../types/User'

defineProps<{
  users: User[]
}>()

const emit = defineEmits<{
  'edit-user': [user: User]
  'delete-user': [user: User]
}>()
</script>