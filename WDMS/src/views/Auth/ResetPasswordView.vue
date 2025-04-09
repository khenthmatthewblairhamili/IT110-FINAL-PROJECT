<template>
    <AuthLayout>
      <template #title>Reset your password</template>
      <template #subtitle>
        Enter your new password below
      </template>
  
      <AuthForm @submit="handleSubmit" :showRemember="false">
        <template #fields>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">New Password</label>
            <div class="mt-1">
              <input id="password" name="password" type="password" required
                     v-model="form.password"
                     class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
          </div>
  
          <div>
            <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <div class="mt-1">
              <input id="password_confirmation" name="password_confirmation" type="password" required
                     v-model="form.password_confirmation"
                     class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
          </div>
        </template>
  
        <template #button>Reset password</template>
      </AuthForm>
    </AuthLayout>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import AuthLayout from '@/components/auth/AuthLayout.vue'
  import AuthForm from '@/components/auth/AuthForm.vue'
  
  const route = useRoute()
  const form = ref({
    password: '',
    password_confirmation: '',
    token: route.params.token
  })
  
  const handleSubmit = () => {
    console.log('Reset password form submitted', form.value)
    // Add your password reset logic here
  }
  </script>