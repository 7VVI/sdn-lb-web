import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('sideMenu', () => {
  const menu= ref(null)


  return { menu }
})
