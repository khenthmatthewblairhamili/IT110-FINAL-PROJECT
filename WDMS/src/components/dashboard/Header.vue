
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const activeDropdown = ref(null);
const notificationTab = ref('notifications');

const recentSearches = ref([
  { image: 'https://placehold.co/32x32', title: 'Create landing page', price: '$345' },
  { image: 'https://placehold.co/32x32', title: 'Create landing page', price: '$345' },
  { image: 'https://placehold.co/32x32', title: 'Create landing page', price: '$345' }
]);

const notifications = ref([
  { image: 'https://placehold.co/32x32', title: 'New order', description: 'from a user' },
  { image: 'https://placehold.co/32x32', title: 'New order', description: 'from a user' },
  { image: 'https://placehold.co/32x32', title: 'New order', description: 'from a user' }
]);

const messages = ref([
  { image: 'https://placehold.co/32x32', sender: 'John Doe', content: 'Hello there!' },
  { image: 'https://placehold.co/32x32', sender: 'John Doe', content: 'Hello there!' },
  { image: 'https://placehold.co/32x32', sender: 'John Doe', content: 'Hello there!' }
]);

const toggleDropdown = (dropdown) => {
  activeDropdown.value = activeDropdown.value === dropdown ? null : dropdown;
};

const closeDropdowns = () => {
  activeDropdown.value = null;
};

const handleLogout = () => {
  // Add your logout logic here
  console.log('Logging out...');
  router.push('/login');
};

onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      closeDropdowns();
    }
  });
});
</script>

<template>
  <head>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
  </head>
  <div class="py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
    <button 
      type="button" 
      class="text-lg text-gray-600 sidebar-toggle" 
      @click="$emit('toggle-sidebar')"
    >
      <i class="ri-menu-line"></i>
    </button>
    
    <!-- Breadcrumbs -->
    <ul class="flex items-center text-sm ml-4">
      <li class="mr-2">
        <router-link to="/" class="text-gray-400 hover:text-gray-600 font-medium">Weighbridge DMS</router-link>
      </li>
      
    </ul>
    
    <!-- Right side icons -->
    <ul class="ml-auto flex items-center">
      <!-- Search Dropdown -->
      <li class="mr-1 dropdown">
        <button 
          type="button" 
          class="dropdown-toggle text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600"
          @click.stop="toggleDropdown('search')"
        >
          <i class="ri-search-line"></i>
        </button>
        <div 
          class="dropdown-menu shadow-md shadow-black/5 z-30 hidden md:absolute right-0 mt-2 max-w-xs w-full bg-white rounded-md border border-gray-100"
          :class="{ '!block': activeDropdown === 'search' }"
        >
          <form class="p-4 border-b border-b-gray-100">
            <div class="relative w-full">
              <input 
                type="text" 
                class="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500" 
                placeholder="Search..."
              >
              <i class="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></i>
            </div>
          </form>
          <div class="mt-3 mb-2">
            <div class="text-[13px] font-medium text-gray-400 ml-4 mb-2">Recently</div>
            <ul class="max-h-64 overflow-y-auto">
              <li v-for="(item, index) in recentSearches" :key="index">
                <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                  <img :src="item.image" alt="" class="w-8 h-8 rounded block object-cover align-middle">
                  <div class="ml-2">
                    <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">{{ item.title }}</div>
                    <div class="text-[11px] text-gray-400">{{ item.price }}</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>
      
      <!-- Notifications Dropdown -->
      <li class="dropdown mr-1">
        <button 
          type="button" 
          class="dropdown-toggle text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600 relative"
          @click.stop="toggleDropdown('notification')"
        >
          <i class="ri-notification-3-line"></i>
          <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div 
          class="dropdown-menu shadow-md shadow-black/5 z-30 hidden md:absolute right-0 mt-2 max-w-xs w-full bg-white rounded-md border border-gray-100"
          :class="{ '!block': activeDropdown === 'notification' }"
        >
          <div class="flex items-center px-4 pt-4 border-b border-b-gray-100 notification-tab">
            <button 
              type="button" 
              class="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 mr-4 pb-1"
              :class="{ 'border-b-blue-500 text-gray-600': notificationTab === 'notifications' }"
              @click="notificationTab = 'notifications'"
            >
              Notifications
            </button>
            <button 
              type="button" 
              class="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 mr-4 pb-1"
              :class="{ 'border-b-blue-500 text-gray-600': notificationTab === 'messages' }"
              @click="notificationTab = 'messages'"
            >
              Messages
            </button>
          </div>
          <div class="my-2">
            <ul class="max-h-64 overflow-y-auto" v-show="notificationTab === 'notifications'">
              <li v-for="(notification, index) in notifications" :key="index">
                <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                  <img :src="notification.image" alt="" class="w-8 h-8 rounded block object-cover align-middle">
                  <div class="ml-2">
                    <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">{{ notification.title }}</div>
                    <div class="text-[11px] text-gray-400">{{ notification.description }}</div>
                  </div>
                </a>
              </li>
            </ul>
            <ul class="max-h-64 overflow-y-auto" v-show="notificationTab === 'messages'">
              <li v-for="(message, index) in messages" :key="index">
                <a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group">
                  <img :src="message.image" alt="" class="w-8 h-8 rounded block object-cover align-middle">
                  <div class="ml-2">
                    <div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">{{ message.sender }}</div>
                    <div class="text-[11px] text-gray-400">{{ message.content }}</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>
      
      <!-- Profile Dropdown -->
      <li class="dropdown ml-3">
        <button 
          type="button" 
          class="dropdown-toggle flex items-center"
          @click.stop="toggleDropdown('profile')"
        >
          <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium">
           <i class="ri-user-line mr-05"></i>
          </div>
        </button>
        <ul 
          class="dropdown-menu shadow-md shadow-black/5 z-30 hidden md:absolute right-0 mt-2 py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]"
          :class="{ '!block': activeDropdown === 'profile' }"
        >
          <li>
            <router-link 
              to="/profile" 
              class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
              @click="closeDropdowns"
            >
              <i class="ri-user-line mr-2"></i> Profile
            </router-link>
          </li>
          <li>
            <router-link 
              to="/settings" 
              class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
              @click="closeDropdowns"
            >
              <i class="ri-settings-3-line mr-2"></i> Settings
            </router-link>
          </li>
          <li class="border-t border-gray-100 mt-1 pt-1">
            <a 
              href="#" 
              class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
              @click.prevent="handleLogout"
            >
              <i class="ri-logout-box-r-line mr-2"></i> Logout
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown-menu {
  transition: all 0.2s ease;
}

.dropdown-toggle:focus + .dropdown-menu,
.dropdown-menu:hover {
  display: block;
}

.notification-tab button {
  transition: all 0.2s ease;
}
</style>