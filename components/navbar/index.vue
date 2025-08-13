<template>
  <nav class="bg-white sticky top-0 z-50">
    <!-- Top Bar -->
    <TopBar />

    <!-- Main Navigation -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo (Right side) -->
        <section class="flex-shrink-0 flex">
          <div class="flex gap-5">
            <!-- Mobile menu button -->
            <div class="lg:hidden">
              <button @click="toggleMobileMenu" class="text-gray-500 hover:text-gray-700">
                <img src="/icons/Burger.svg" alt="Burger">
              </button>
            </div>
  
            <NuxtLink to="/" class="flex items-center">
              <img src="/icons/logo.png" alt="rama" class="w-[100px]">
            </NuxtLink>
          </div>

          <!-- Navigation Menu (Center) -->
          <div class="hidden lg:flex items-center mr-6 space-x-reverse gap-8 text-[14px]">
            <template v-for="item in navigationMenu" :key="item.id">
              <!-- Dropdown Menu Items -->
              <div v-if="item.hasDropdown" class="relative" @mouseenter="openDropdown(item.id)"
                @mouseleave="closeDropdown(item.id)">
                <NuxtLink :to="item.href" class="nav-link flex gap-1.5 items-center"
                  :class="[{ 'text-primary': item.active }, item.title == 'دسته بندی دوره ها' ? 'border-l border-[#E3E3E3]' : '']">
                  <!-- آیکون کتگوری فقط برای دسته بندی دوره ها -->
                  <img src="/icons/Category.svg" alt="category" v-if="item.title === 'دسته بندی دوره ها'">
                  {{ item.title }}
                  <Icon name="iconamoon:arrow-down-2-light" size="24" style="color: #1E2329"
                    :class="{ 'transform rotate-180': activeDropdown === item.id }"
                    class="transition-transform duration-200" />
                </NuxtLink>

                <!-- Dropdown Menu -->
                <transition enter-active-class="transition duration-200 ease-out"
                  enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                  <!-- Dropdown for Categories -->
                  <div v-if="activeDropdown === item.id && item.title === 'دسته بندی دوره ها'"
                    class="absolute top-full right-0 w-72 bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] p-4 z-50">
                    <div class="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
                      <h3 class="text-sm font-semibold text-gray-800">دسته بندی ها</h3>
                    </div>
                    <div class="space-y-1">
                      <template v-for="(dropdownItem, idx) in item.dropdownItems" :key="dropdownItem.id">
                        <NuxtLink :to="dropdownItem.href"
                          class="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors duration-150 group"
                          @click="closeAllDropdowns">
                          <span class="text-sm text-gray-700 group-hover:text-orange-500">
                            {{ dropdownItem.title }}
                          </span>
                          <Icon name="iconamoon:arrow-left-2-light" size="18"
                            class="text-gray-400 group-hover:text-orange-500 transition-colors duration-150" />
                        </NuxtLink>
                      </template>
                    </div>
                  </div>

                  <!-- Regular Dropdown for Other Items -->
                  <div v-else-if="activeDropdown === item.id"
                    class="absolute top-full right-0 w-44 bg-white rounded-3xl shadow-[0px_4px_17px_0px_#0D647F78] py-1 z-50">
                    <template v-for="(dropdownItem, idx) in item.dropdownItems" :key="dropdownItem.id">
                      <NuxtLink :to="dropdownItem.href"
                        class="block px-4 text-sm font-medium hover:text-orange transition-colors duration-150"
                        @click="closeAllDropdowns">
                        <span :class="idx !== item.dropdownItems.length - 1 ? 'border-b border-[#E3E3E3]' : ''"
                          class="w-full flex py-3.5">
                          {{ dropdownItem.title }}
                        </span>
                      </NuxtLink>
                    </template>
                  </div>
                </transition>
              </div>

              <!-- Regular Menu Items -->
              <NuxtLink v-else :to="item.href" class="nav-link flex gap-1.5 items-center"
                :class="{ 'text-primary': item.active }">
                {{ item.title }}
              </NuxtLink>
            </template>
          </div>
        </section>

        <!-- Sign Up/Login Button (Left side) -->
        <section class="flex-shrink-0 flex">
          <div class="hidden lg:flex relative">
            <img class="absolute right-4 top-3 cursor-pointer" src="/icons/Search.svg" alt="search">
            <input type="text" name="search" id="search"
              class="bg-[#F5F5F5] rounded-4xl ml-2.5 pr-[44px] pl-4 py-2 focus:outline-none" placeholder="جستجو">
          </div>
          <button class="bg-orange text-white px-6 py-2 rounded-full cursor-pointer font-semibold">
            ورود | ثبت نام
          </button>
        </section>
      </div>

      <!-- Mobile Navigation Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-100">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <template v-for="item in navigationMenu" :key="`mobile-${item.id}`">
            <!-- Mobile Dropdown Items -->
            <div v-if="item.hasDropdown">
              <button @click="toggleMobileDropdown(item.id)"
                class="w-full text-right px-3 py-2 text-base font-medium nav-link flex justify-between items-center"
                :class="{ 'text-primary': item.active }">
                <div class="flex items-center gap-2">
                  <img src="/icons/Category.svg" alt="category" v-if="item.title === 'دسته بندی دوره ها'">
                  {{ item.title }}
                </div>
                <Icon name="iconamoon:arrow-down-2-light" size="20"
                  :class="{ 'transform rotate-180': activeMobileDropdown === item.id }"
                  class="transition-transform duration-200" />
              </button>
              <div v-if="activeMobileDropdown === item.id" class="pr-4">
                <template v-for="dropdownItem in item.dropdownItems" :key="dropdownItem.id">
                  <NuxtLink :to="dropdownItem.href" class="block px-3 py-2 text-sm text-gray-600 hover:text-primary"
                    @click="toggleMobileMenu">
                    {{ dropdownItem.title }}
                  </NuxtLink>
                </template>
              </div>
            </div>

            <!-- Regular Mobile Menu Items -->
            <NuxtLink v-else :to="item.href" class="block px-3 py-2 text-base font-medium nav-link"
              :class="{ 'text-primary': item.active }" @click="toggleMobileMenu">
              {{ item.title }}
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import TopBar from './TopBar.vue'

const { navigationMenu } = useNavigation()

// Mobile menu state
const isMobileMenuOpen = ref(false)
const activeMobileDropdown = ref<number | null>(null)

// Desktop dropdown state
const activeDropdown = ref<number | null>(null)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    activeMobileDropdown.value = null
  }
}

const toggleMobileDropdown = (id: number) => {
  activeMobileDropdown.value = activeMobileDropdown.value === id ? null : id
}

const openDropdown = (id: number) => {
  activeDropdown.value = id
}

const closeDropdown = (id: number) => {
  activeDropdown.value = null
}

const closeAllDropdowns = () => {
  activeDropdown.value = null
}

// Close dropdown when clicking outside
onMounted(() => {
  document.addEventListener('click', (event) => {
    const target = event.target as Element
    if (!target.closest('.relative')) {
      activeDropdown.value = null
    }
  })
})
</script>

<style scoped></style>