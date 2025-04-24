<template>
  <section class="mt-25 md:mt-50 w-full">
    <div
      class="photo-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-8 md:px-12"
    >
      <div
        v-for="photo in photos"
        :key="photo.id"
        class="photo-box relative overflow-hidden shadow-lg opacity-0 translate-y-[80px] transition-transform duration-500 ease-out"
      >
        <img
          :src="photo.image"
          alt="Photo"
          class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, watch, ref, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const photos = ref([
  {
    id: 1,
    image: '/images/Laptop_Me.jpg',
  },
  {
    id: 2,
    image: '/images/Desk.jpg',
  },
  {
    id: 3,
    image: '/images/Hands.jpg',
  },
])
const route = useRoute()

onMounted(async () => {
  await nextTick()

  const boxes = document.querySelectorAll('.photo-box')

  boxes.forEach((box) => {
    gsap.fromTo(
      box,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: box,
          start: 'top 95%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        },
      },
    )
  })

  ScrollTrigger.refresh()
})

// hope one day i will understand why we need this
watch(route, () => {
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 100)
})
</script>
