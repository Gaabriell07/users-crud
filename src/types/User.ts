export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
}

export interface UserFormData {
  id: number | null
  name: string
  username: string
  email: string
  phone: string
}