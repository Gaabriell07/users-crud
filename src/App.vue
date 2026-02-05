<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import UserTable from './components/UserTable.vue'
import UserModal from './components/UserModal.vue'
import ConfirmModal from './components/ConfirmModal.vue'
import ToastNotification from './components/ToastNotification.vue'
import type { User, UserFormData } from './types/User'

const users = ref<User[]>([])
const isLoading = ref(false)
const showModal = ref(false)
const showConfirmModal = ref(false)
const isEditMode = ref(false)
const selectedUser = ref<User | null>(null)
const userToDelete = ref<User | null>(null)
const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref('success')

const fetchUsers = async () => {
  isLoading.value = true
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) throw new Error('Error al cargar usuarios')
    const data = await response.json()
    users.value = data
  } catch (error) {
    console.error('Error:', error)
    displayToast('Error al cargar usuarios', 'danger')
  } finally {
    isLoading.value = false
  }
}

const generateId = (): number => {
  if (users.value.length === 0) return 1
  return Math.max(...users.value.map(u => u.id)) + 1
}

const openCreateModal = () => {
  selectedUser.value = null
  isEditMode.value = false
  showModal.value = true
}

const openEditModal = (user: User) => {
  selectedUser.value = { ...user }
  isEditMode.value = true
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedUser.value = null
}

const handleSaveUser = (userData: UserFormData) => {
  if (isEditMode.value && userData.id !== null) {
    // Editar usuario existente
    const index = users.value.findIndex(u => u.id === userData.id)
    if (index !== -1) {
      users.value[index] = {
        id: userData.id,
        name: userData.name,
        username: userData.username,
        email: userData.email,
        phone: userData.phone
      }
      displayToast('Usuario actualizado correctamente', 'success')
    }
  } else {
    // Crear nuevo usuario
    const newUser: User = {
      id: generateId(),
      name: userData.name,
      username: userData.username,
      email: userData.email,
      phone: userData.phone
    }
    users.value.push(newUser)
    displayToast('Usuario creado correctamente', 'success')
  }
  closeModal()
}

const confirmDelete = (user: User) => {
  userToDelete.value = user
  showConfirmModal.value = true
}

const cancelDelete = () => {
  userToDelete.value = null
  showConfirmModal.value = false
}

const handleDeleteUser = () => {
  if (userToDelete.value) {
    const index = users.value.findIndex(u => u.id === userToDelete.value!.id)
    if (index !== -1) {
      users.value.splice(index, 1)
      displayToast('Usuario eliminado correctamente', 'success')
    }
  }
  cancelDelete()
}

const displayToast = (message: string, type = 'success') => {
  toastMessage.value = message
  toastType.value = type
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <div class="container mt-5">
    <h1 class="mb-4">Gestión de Usuarios</h1>
    
    <div class="mb-4">
      <button class="btn btn-primary" @click="openCreateModal">
        Crear Nuevo Usuario
      </button>
    </div>

    <LoadingSpinner v-if="isLoading" />
    
    <div v-else>
      <UserTable 
        :users="users" 
        @edit-user="openEditModal" 
        @delete-user="confirmDelete" 
      />
    </div>

    <UserModal 
      v-if="showModal"
      :user="selectedUser"
      :is-edit-mode="isEditMode"
      @close="closeModal"
      @save="handleSaveUser"
    />

    <ConfirmModal 
      v-if="showConfirmModal && userToDelete"
      :user="userToDelete" 
      @cancel="cancelDelete"
      @confirm="handleDeleteUser"
    />

    <ToastNotification 
      v-if="showToast"
      :message="toastMessage"
      :type="toastType"
    />
  </div>
</template>