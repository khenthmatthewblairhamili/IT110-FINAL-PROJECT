<template>
    <AuthLayout>
      <template #title>Create a new account</template>
      <template #subtitle>
        Or <router-link to="/login" class="font-medium text-blue-600 hover:text-blue-500">sign in to your existing account</router-link>
      </template>
  
      <AuthForm @submit="handleRegister" :showRemember="false">
        <template #fields>
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Full name</label>
            <div class="mt-1">
              <input id="name" name="name" type="text" autocomplete="name" required
                     v-model="form.name"
                     class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
          </div>
  
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" required
                     v-model="form.email"
                     class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
          </div>

          <div>
            <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
            <div class="mt-1">
              <select id="role" name="role" required
                      v-model="form.role"
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option value="" disabled selected>Select a role</option>
                <option value="admin">Admin</option>
                <option value="clerk">Clerk</option>
                <option value="operator">Operator</option>
                <option value="guest">Guest</option>
              </select>
            </div>
          </div>
  
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="mt-1">
              <input id="password" name="password" type="password" autocomplete="new-password" required
                     v-model="form.password"
                     class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
          </div>
  
          <div>
            <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div class="mt-1">
              <input id="password_confirmation" name="password_confirmation" type="password" required
                     v-model="form.password_confirmation"
                     class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
          </div>
        </template>
  
        <template #button>Create account</template>
        <template #footer-text>Or sign up with</template>
        <template #social-auth>
          <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">Sign up with Google</span>
            <i class="ri-google-fill text-lg"></i>
          </a>
        </template>
      </AuthForm>
    </AuthLayout>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import AuthLayout from '@/components/auth/AuthLayout.vue'
  import AuthForm from '@/components/auth/AuthForm.vue'
  
  const router = useRouter()
  const form = ref({
    name: '',
    email: '',
    role: '',
    password: '',
    password_confirmation: ''
  })
  
  const handleRegister = () => {
    console.log('Register form submitted', form.value)
    // Add your registration logic here
    router.push('/dashboard')
  }
  </script>