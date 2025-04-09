<template>
    <AuthLayout>
      <template #title>Forgot your password?</template>
      <template #subtitle>
        Remember your password? <router-link to="/login" class="font-medium text-blue-600 hover:text-blue-500">Sign in here</router-link>
      </template>
  
      <AuthForm @submit="handleSubmit" :showRemember="false">
        <template #fields>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" required
                     v-model="form.email"
                     class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
          </div>
        </template>
  
        <template #button>Send reset link</template>
      </AuthForm>
    </AuthLayout>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import AuthLayout from '@/components/auth/AuthLayout.vue'
  import AuthForm from '@/components/auth/AuthForm.vue'
  
  const form = ref({
    email: ''
  })
  
  const handleSubmit = () => {
    console.log('Forgot password form submitted', form.value)
    // Add your password reset logic here
  }
  </script>