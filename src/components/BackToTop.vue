<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-4 right-4 border-2 border-[color:var(--color-bg)] bg-[color:var(--color-brown)] text-[color:var(--color-bg)] rounded-full w-12 h-12 flex items-center justify-center text-xl cursor-pointer transition-opacity duration-300 hover:bg-[color:var(--color-orange)]"
  >
    ↥
  </button>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isVisible = ref(false)
const handleScroll = () => {
  isVisible.value = window.scrollY > 300
}
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
