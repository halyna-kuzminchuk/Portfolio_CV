<template>
  <section class="mt-25 md:mt-50 mx-auto" id="designs">
    <div class="flex flex-col justify-center items-center p-4 xl:px-16">
      <div
        class="grid grid-cols-1 items-center md:grid-cols-2 md:grid-rows-2 md:gap-x-5 w-full border-y-2 border-[color:var(--color-brown)] py-6 md:py-8"
      >
        <div class="col-1 row-end-2 justify-center md:items-center">
          <span
            class="font-title text-center text-4xl md:text-6xl py-2 font-semibold text-[color:var(--color-brown)]"
          >
            Less talk.
          </span>
        </div>
        <div
          class="col-1 row-2 justify-center md:col-2 row-start-2 items-center md:justify-self-end"
        >
          <span
            class="font-title text-center text-4xl md:text-6xl font-semibold text-[color:var(--color-brown)]"
          >
            More
          </span>
          <span
            class="pl-2 font-title text-center text-4xl md:text-6xl font-semibold text-[color:var(--color-orange)]"
          >
            designs.
          </span>
        </div>
      </div>
    </div>
    <p
      class="font-text text-start text-lg font-normal px-4 my-4 text-[color:var(--color-brown)] xl:px-16"
    >
      It is time to see some work. Here are a few projects I’ve done so far.
    </p>
    <div
      class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3 design-grid"
    >
      <div
        v-for="design in designs"
        :key="design.id"
        @click="goToGallery(design.id)"
        class="cursor-pointer group rounded-sm h-100 p-12 bg-[color:var(--color-brown)] border border-[color:var(--color-brown)] design-card"
      >
        <div class="justify-self-end content-center h-24 w-24 xl:h-28 xl:w-28">
          <img :src="design.icon" alt="design icon" />
        </div>
        <div class="text-left">
          <h3 class="pt-8 font-title text-lg text-[color:var(--color-bg)] font-medium lg:text-xl">
            {{ design.name }}
          </h3>
          <p class="font-text text-[color:var(--color-orange)] pt-4 text-sm md:text-base">
            {{ design.description }}
          </p>
        </div>
        <div class="py-4 w-full border-b-2 border-[color:var(--color-orange)]"></div>

        <font-awesome-icon
          :icon="['fas', 'plus']"
          class="text-[color:var(--color-orange)] pt-4 text-sm md:text-base"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PortfolioDB from '@/modules/PortfolioDatabase'
import { useRouter } from 'vue-router'

const router = useRouter()
function goToGallery(id) {
  router.push(`/Gallery/${id}`)
}

gsap.registerPlugin(ScrollTrigger)

const designs = PortfolioDB.designs
const route = useRoute()

onMounted(() => {
  const designCards = document.querySelectorAll('.design-card')

  designCards.forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      y: 60,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        end: 'bottom 10%',
        toggleActions: 'play reverse play reverse',
      },
    })
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -8,
        boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.3)',
        duration: 0.4,
        ease: 'power2.out',
      })
    })

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        duration: 0.4,
        ease: 'power2.inOut',
      })
    })
  })

  // Refresh
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 100)
})

watch(route, () => {
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 100)
})
</script>
