<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  isOpen: Boolean
});

const activeTab = ref('home');
const openDropdown = ref(null);

const setActiveTab = (tab) => {
  activeTab.value = tab;
  openDropdown.value = null; // Close any open dropdowns
};

const toggleDropdown = (dropdownName) => {
  openDropdown.value = openDropdown.value === dropdownName ? null : dropdownName;
};

const handleLogout = () => {
  console.log('Logging out...');
  router.push('/login');
};
</script>

<template>
  <div class="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4 z-50 sidebar-menu transition-transform"
       :class="{ '-translate-x-full': !isOpen }">
    <router-link 
      to="/" 
      class="flex items-center pb-4 border-b border-b-gray-800"
      @click="setActiveTab('home')"
    >
      <img src="@/assets/logo.png" alt="Logo" class="w-8 h-8 rounded object-cover">
      <span class="text-lg font-bold text-white ml-3">DPWH</span>
    </router-link>
    
    <ul class="mt-4">
      <!-- Home -->
      <li class="mb-1 group" :class="{ 'active': activeTab === 'home' }">
        <router-link 
          to="/home" 
          class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white"
          @click="setActiveTab('home')"
        >
          <i class="ri-home-2-line mr-3 text-lg"></i>
          <span class="text-sm">Home</span>
        </router-link>
      </li>

      <!-- About -->
      <li class="mb-1 group" :class="{ 'active': activeTab === 'about' }">
        <router-link 
          to="/about" 
          class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white"
          @click="setActiveTab('about')"
        >
          <i class="ri-information-line mr-3 text-lg"></i>
          <span class="text-sm">About</span>
        </router-link>
      </li>

      <!-- Auth Dropdown -->
      <li class="mb-1 group">
        <a 
          href="#" 
          class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md"
          @click.prevent="toggleDropdown('auth')"
          :aria-expanded="openDropdown === 'auth'"
        >
          <i class="ri-user-line mr-3 text-lg"></i>
          <span class="text-sm">Authentication</span>
          <i 
            class="ri-arrow-right-s-line ml-auto transition-transform duration-200"
            :class="{ 'rotate-90': openDropdown === 'auth' }"
          ></i>
        </a>
        <ul class="pl-7 mt-2" v-show="openDropdown === 'auth'">
          <li class="mb-1">
            <router-link 
              to="/login" 
              class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
              @click="setActiveTab('auth')"
            >
              Login
            </router-link>
          </li>
          <li class="mb-1">
            <router-link 
              to="/register" 
              class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
              @click="setActiveTab('auth')"
            >
              Register
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>