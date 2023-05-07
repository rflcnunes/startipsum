import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useIndextore = defineStore('index', () => {
  const theme = ref('light')

  return { theme }
})
