<template>
  <div class="modal fade show d-block" tabindex="-1" @click.self="$emit('close')">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content shadow-lg">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title">
            {{ isEditMode ? '✏️ Editar Usuario' : '➕ Nuevo Usuario' }}
          </h5>
          <button 
            type="button" 
            class="btn-close btn-close-white" 
            @click="$emit('close')">
          </button>
        </div>

        <div class="modal-body">
          <form @submit.prevent="handleSubmit" id="userForm">
            <div class="mb-3">
              <label class="form-label fw-semibold">
                Nombre Completo <span class="text-danger">*</span>
              </label>
              <input 
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.name }"
                v-model.trim="formData.name"
                @blur="validateField('name')"
                placeholder="Ej: Juan Pérez"
                required>
              <div v-if="errors.name" class="invalid-feedback">
                {{ errors.name }}
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label fw-semibold">
                Nombre de Usuario <span class="text-danger">*</span>
              </label>
              <input 
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.username }"
                v-model.trim="formData.username"
                @blur="validateField('username')"
                placeholder="Ej: jperez"
                required>
              <div v-if="errors.username" class="invalid-feedback">
                {{ errors.username }}
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label fw-semibold">
                Email <span class="text-danger">*</span>
              </label>
              <input 
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors.email }"
                v-model.trim="formData.email"
                @blur="validateField('email')"
                placeholder="Ej: juan@ejemplo.com"
                required>
              <div v-if="errors.email" class="invalid-feedback">
                {{ errors.email }}
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label fw-semibold">
                Teléfono <span class="text-danger">*</span>
              </label>
              <input 
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors.phone }"
                v-model.trim="formData.phone"
                @blur="validateField('phone')"
                placeholder="Ej: +1-234-567-8900"
                required>
              <div v-if="errors.phone" class="invalid-feedback">
                {{ errors.phone }}
              </div>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button 
            type="button" 
            class="btn btn-secondary" 
            @click="$emit('close')">
            Cancelar
          </button>
          <button 
            type="submit" 
            form="userForm"
            class="btn btn-primary">
            {{ isEditMode ? 'Actualizar' : 'Crear' }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import type { User, UserFormData } from '../types/User'

const props = defineProps<{
  user: User | null
  isEditMode: boolean
}>()

const emit = defineEmits<{
  save: [user: UserFormData]
  close: []
}>()

const formData = reactive<UserFormData>({
  id: null,
  name: '',
  username: '',
  email: '',
  phone: ''
})

const errors = reactive({
  name: '',
  username: '',
  email: '',
  phone: ''
})

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validateField = (field: keyof typeof errors) => {
  errors[field] = ''

  switch (field) {
    case 'name':
      if (!formData.name) {
        errors.name = 'El nombre es requerido'
      } else if (formData.name.length < 3) {
        errors.name = 'El nombre debe tener al menos 3 caracteres'
      } else if (/\d/.test(formData.name)) {
        errors.name = 'El nombre no puede contener números'
      }
      break

    case 'username':
      if (!formData.username) {
        errors.username = 'El nombre de usuario es requerido'
      } else if (formData.username.length < 3) {
        errors.username = 'El nombre de usuario debe tener al menos 3 caracteres'
      } else if (/\d/.test(formData.username)) {
        errors.username = 'El nombre de usuario no puede contener números'
      }
      break

    case 'email':
      if (!formData.email) {
        errors.email = 'El email es requerido'
      } else if (!isValidEmail(formData.email)) {
        errors.email = 'El email no es válido'
      }
      break

    case 'phone':
      if (!formData.phone) {
        errors.phone = 'El teléfono es requerido'
      } else if (/[a-zA-Z]/.test(formData.phone)) {
        errors.phone = 'El teléfono no puede contener letras'
      }
      break
  }
}

const validateForm = (): boolean => {
  validateField('name')
  validateField('username')
  validateField('email')
  validateField('phone')

  return !errors.name && !errors.username && !errors.email && !errors.phone
}

const resetForm = () => {
  formData.id = null
  formData.name = ''
  formData.username = ''
  formData.email = ''
  formData.phone = ''
  
  errors.name = ''
  errors.username = ''
  errors.email = ''
  errors.phone = ''
}

const handleSubmit = () => {
  if (validateForm()) {
    emit('save', { ...formData })
    resetForm()
  }
}

watch(
  () => props.user,
  (newUser) => {
    if (newUser) {
      formData.id = newUser.id
      formData.name = newUser.name
      formData.username = newUser.username
      formData.email = newUser.email
      formData.phone = newUser.phone
    } else {
      resetForm()
    }
  },
  { immediate: true }
)
</script>