<template>
  <section class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
    <div class="text-right mb-8 lg:mb-12">
      <!-- Section Title -->
      <h2 class="text-2xl lg:text-4xl font-bold mb-2">
        {{ departmentsContent.title }}
      </h2>
    </div>

    <!-- Departments Grid -->
    <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mx-auto">
      <div
        v-for="department in departmentsContent.departments"
        :key="department.id"
        @click="handleDepartmentClick(department)"
        :class="[
          'group relative cursor-pointer transition-all duration-300 ease-out transform',
          'rounded-2xl lg:rounded-3xl p-4 lg:p-6 min-h-[140px] lg:min-h-[180px]',
          'flex flex-col items-center justify-center text-center',
          department.active
            ? 'bg-[radial-gradient(61%_61%_at_50%_39%,_#FF9F71_0%,_#FF6B24_100%)]'
            : 'bg-[#F2F3F7]'
        ]"
      >
        <!-- Department Icon -->
        <div class="mb-3 lg:mb-4 flex-shrink-0">
          <div 
            :class="[
              'w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl',
              'flex items-center justify-center transition-all duration-300',
            
            ]"
          >
            <div>
              <img :src="department.icon" :alt="department.title" class=" object-contain" />
            </div>
          </div>
        </div>

        <!-- Department Title -->
        <h3 
          :class="[
            'font-semibold text-sm lg:text-base leading-tight',
            department.active 
              ? 'text-white' 
              : 'text-gray-800 group-hover:text-gray-900'
          ]"
        >
          {{ department.title }}
        </h3>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useDepartmentsContent, type Department } from '~/composables/home/useDepartmentsContent'

const { 
  departmentsContent, 
  setActiveDepartment, 
  getActiveDepartment 
} = useDepartmentsContent()

// Handle department card click
const handleDepartmentClick = (department: Department) => {
  // Set the clicked department as active
  setActiveDepartment(department.id)
  
  // Optional: Navigate to department page
  if (department.href) {
    // You can uncomment this line to enable navigation
    // navigateTo(department.href)
  }
  
  // Optional: Emit event for parent components
  console.log('Department selected:', department.title)
  
  // You could also emit a custom event:
  // emit('department-selected', department)
}

// Optional: Auto-rotate active department (demo purpose)
const startAutoRotation = () => {
  let currentIndex = 0
  
  setInterval(() => {
    const departments = departmentsContent.value.departments
    currentIndex = (currentIndex + 1) % departments.length
    setActiveDepartment(departments[currentIndex].id)
  }, 3000) // Change every 3 seconds
}

// Uncomment to enable auto-rotation
// onMounted(() => {
//   startAutoRotation()
// })
</script>