<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { defineAsyncComponent } from 'vue'
const GalleryNav = defineAsyncComponent(() => import('@/components/GalleryNav.vue'))
const BackToTop = defineAsyncComponent(() => import('@/components/BackToTop.vue'))

const route = useRoute()
const component = ref(null)

watch(
  () => route.params.id,
  async (id) => {
    try {
      component.value = (await import(`@/components/${id}.vue`)).default
    } catch (err) {
      console.error('Component not found:', id, err)
      component.value = null
    }
  },
  { immediate: true },
)
</script>

<template>
  <main class="bg-[color:var(--color-brown)]"></main>
  <GalleryNav />
  <section>
    <component :is="component" v-if="component" />
    <p v-else class="text-red-500">No matching section found.</p>
  </section>
  <BackToTop />
</template>
