// stores/auth.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const user = ref(null)
  const isAuthenticated = ref(false)

  const login = async (credentials) => {
    try {
      // Add your login API call here
      // const response = await api.post('/login', credentials)
      user.value = { name: 'John Doe', email: credentials.email }
      isAuthenticated.value = true
      router.push('/dashboard')
    } catch (error) {
      throw error
    }
  }

  const register = async (userData) => {
    try {
      // Add your registration API call here
      // const response = await api.post('/register', userData)
      user.value = { name: userData.name, email: userData.email }
      isAuthenticated.value = true
      router.push('/dashboard')
    } catch (error) {
      throw error
    }
  }

  const logout = async () => {
    try {
      // Add your logout API call here
      // await api.post('/logout')
      user.value = null
      isAuthenticated.value = false
    } catch (error) {
      throw error
    }
  }

  const forgotPassword = async (email) => {
    try {
      // Add your forgot password API call here
      // await api.post('/forgot-password', { email })
    } catch (error) {
      throw error
    }
  }

  const resetPassword = async (data) => {
    try {
      // Add your reset password API call here
      // await api.post('/reset-password', data)
      router.push('/login')
    } catch (error) {
      throw error
    }
  }

  return { user, isAuthenticated, login, register, logout, forgotPassword, resetPassword }
})