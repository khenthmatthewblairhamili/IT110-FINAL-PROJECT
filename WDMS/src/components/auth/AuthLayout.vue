<template>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <router-link to="/">
          <img class="mx-auto h-12 w-auto" src="@/assets/logo.png" alt="Your Company">
        </router-link>
        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
          <slot name="title"></slot>
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          <slot name="subtitle"></slot>
        </p>
      </div>
  
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No script needed for this layout component
  </script>