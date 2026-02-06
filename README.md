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

---

## Tecnologías

| Vue.js | Framework principal |
| TypeScript | Tipado estático |
| Bootstrap | Estilos y componentes UI |
| Vite | Build tool |

---

## API Utilizada

**Endpoint**: `https://jsonplaceholder.typicode.com/users`

### Estructura y Vue.js

- Proyecto modular con 5 componentes separados
- Composition API
- TypeScript en todos los archivos
