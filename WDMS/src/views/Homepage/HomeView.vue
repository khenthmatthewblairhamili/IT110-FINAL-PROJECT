<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Simple Header -->
      <header class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 class="text-xl font-semibold text-gray-800">
            DPWH Weighbridge System
          </h1>
          <button @click="handleLogout" class="text-gray-500 hover:text-blue-600">
            <i class="ri-logout-box-r-line"></i>
          </button>
        </div>
      </header>
  
      <!-- Basic Main Content -->
      <main class="max-w-7xl mx-auto px-4 py-6">
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-medium text-gray-800 mb-4">Welcome to DPWH Weighbridge</h2>
          <p class="text-gray-600 mb-6">
            This system helps monitor vehicle weights at DPWH checkpoints nationwide.
          </p>
          
          <!-- Wrap -->
          <div class="grid grid-cols-2 gap-4">
            <!--Home Component content-->
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...')
    router.push('/login')
  }
  </script>
  
  <style scoped>
  /* No additional styles needed */
  </style>