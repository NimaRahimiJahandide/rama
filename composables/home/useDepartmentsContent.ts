export interface Department {
  id: number
  title: string
  icon: string
  active: boolean
  href?: string
}

export const useDepartmentsContent = () => {
  const departmentsContent = ref({
    title: "دپارتمان‌های آکادمی راما",
    departments: [
      {
        id: 1,
        title: "بازار فارکس",
        icon: "/icons/forex-1.svg",
        active: false,
        href: "/departments/forex"
      },
      {
        id: 2,
        title: "بازار فارکس",
        icon: "/icons/forex-2.svg", 
        active: false,
        href: "/departments/forex-advanced"
      },
      {
        id: 3,
        title: "بازار فارکس",
        icon: "/icons/forex-3.svg",
        active: true, // This is the highlighted/active card
        href: "/departments/forex-pro"
      },
      {
        id: 4,
        title: "بازار فارکس",
        icon: "/icons/forex-4.svg",
        active: false,
        href: "/departments/forex-expert"
      },
      {
        id: 5,
        title: "بازار فارکس",
        icon: "/icons/forex-5.svg",
        active: false,
        href: "/departments/forex-master"
      }
    ] as Department[]
  })

  // Function to set active department
  const setActiveDepartment = (id: number) => {
    departmentsContent.value.departments.forEach(dept => {
      dept.active = dept.id === id
    })
  }

  // Function to get active department
  const getActiveDepartment = (): Department | undefined => {
    return departmentsContent.value.departments.find(dept => dept.active)
  }

  // Function to update department content
  const updateDepartmentContent = (newContent: Partial<typeof departmentsContent.value>) => {
    Object.assign(departmentsContent.value, newContent)
  }

  // Function to add new department
  const addDepartment = (department: Omit<Department, 'id'>) => {
    const newId = Math.max(...departmentsContent.value.departments.map(d => d.id)) + 1
    departmentsContent.value.departments.push({
      ...department,
      id: newId
    })
  }

  return {
    departmentsContent: readonly(departmentsContent),
    setActiveDepartment,
    getActiveDepartment,
    updateDepartmentContent,
    addDepartment
  }
}