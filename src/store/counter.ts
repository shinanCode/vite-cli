import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// hooks写法
export const useCounterStore = defineStore('counter', () => {
  const counter = ref(0)

  const counterComputer = computed(() => {
    return counter.value * 2
  })

  const add = () => {
    counter.value++
  }

  return {
    counter,
    add,
    counterComputer
  }
})
