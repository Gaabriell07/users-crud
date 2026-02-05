# CRUD de Usuarios - Vue.js 3

Sistema de gestión de usuarios con operaciones CRUD completas usando Vue 3, TypeScript y Bootstrap 5.

---

## Instalación

```bash
# Clonar el repositorio
git clone [URL_DEL_REPO]

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build
```

La aplicación corre en: `http://localhost:3000`

---

## Funcionalidades Implementadas

### CRUD Completo

- **Crear**: Formulario con validación en tiempo real
- **Leer**: Tabla con datos de la API JSONPlaceholder
- **Actualizar**: Edición con formulario pre-cargado
- **Eliminar**: Modal de confirmación antes de eliminar

### Validaciones

- Email con expresión regular: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Campos requeridos: nombre, username, email, teléfono
- Longitud mínima: 3 caracteres para nombre y username

### Características Técnicas

- **Vue 3** con Composition API y `<script setup>`
- **TypeScript** para tipado fuerte
- **Bootstrap 5** para UI responsive
- **Estado local** con `ref()` y `reactive()`
- **Props/Emits** para comunicación entre componentes
- **Loading states** durante llamadas a API
- **Notificaciones toast** auto-ocultables (3 segundos)

---

## Tecnologías

| Vue.js | Framework principal |
| TypeScript | Tipado estático |
| Bootstrap | Estilos y componentes UI |
| Vite | Build tool |

---

## API Utilizada

**Endpoint**: `https://jsonplaceholder.typicode.com/users`

## Criterios de Evaluación Cumplidos

### Estructura y Vue.js

- Proyecto modular con 5 componentes separados
- Composition API
- TypeScript en todos los archivos

### Manejo del Estado

- Estado centralizado en App.vue
- Props para pasar datos a componentes hijos
- Emits para comunicación hijo-padre
- Sin Vuex/Pinia (estado local con props/emits)

---

## Notas Importantes

1. **Solo lectura inicial**: Los datos se obtienen de la API al cargar
2. **Operaciones locales**: Crear, editar y eliminar afectan solo al estado local
3. **IDs secuenciales**: Se generan automáticamente al crear usuarios
4. **Sin persistencia**: Los cambios se pierden al recargar la página
