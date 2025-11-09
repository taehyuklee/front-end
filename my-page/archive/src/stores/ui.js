// stores/ui.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
    const isSidebarClosed = ref(true)
    const isDark = ref(false)

    function toggleSidebar() {
        isSidebarClosed.value = !isSidebarClosed.value
    }

    function toggleDarkMode() {
        isDark.value = !isDark.value
    }

    return { isSidebarClosed, isDark, toggleSidebar, toggleDarkMode }
})
