<template>
  <section
    class="relative w-full bg-[color:var(--color-brown)] pb-24 overflow-hidden"
    id="{{pageIndex}}"
  >
    <div class="flex flex-col items-center px-4 xl:px-16 pt-2 pb-8">
      <div
        class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:gap-x-5 w-full border-y-2 border-[color:var(--color-orange)] py-6 md:py-8"
      >
        <div class="col-1 row-end-2 justify-center md:items-center">
          <span
            class="font-title text-center text-4xl md:text-6xl py-2 font-semibold text-[color:var(--color-bg)]"
          >
            {{ title1 }}
          </span>
        </div>
        <div
          class="col-1 row-2 justify-center md:col-2 row-start-2 items-center md:justify-self-end"
        >
          <span
            class="font-title text-center text-4xl md:text-6xl font-semibold text-[color:var(--color-orange)]"
            >designs.
          </span>
        </div>
      </div>

      <p
        class="font-text text-start text-lg font-normal px-4 my-4 text-[color:var(--color-orange)] xl:px-16"
      >
        It is time to see some work. Here are a few projects I’ve done so far.
      </p>
    </div>

    <div class="pt-4 wrapper relative w-full h-screen">
      <div
        class="item absolute inset-0 flex flex-col md:flex-row items-stretch samples px-4 xl:px-16 bg-[color:var(--color-brown)]"
        v-for="image in images"
        :key="image.id"
      >
        <!-- Image right-->
        <div
          v-if="Array.isArray(image.image)"
          class="w-full md:w-1/2 bg-gradient-to-br rounded-sm from-[#D9D9D9] to-[#EDD0C6] p-6 aspect-video md:aspect-auto flex flex-col items-center justify-center"
        >
          <img
            v-for="(img, i) in image.image"
            :key="i"
            :src="img"
            alt="Project Image"
            class="object-contain w-full aspect-video"
          />
        </div>
        <div
          v-else
          class="w-full md:w-1/2 rounded-sm bg-gradient-to-br from-[#D9D9D9] to-[#EDD0C6] p-6 aspect-video md:aspect-auto flex items-center justify-center"
        >
          <img
            :src="image.image"
            alt="Project Image"
            class="object-contain w-full max-h-full aspect-video md:aspect-auto"
          />
        </div>
        <!-- Left: content -->
        <div
          class="w-full md:w-1/2 bg-[color:var(--color-brown)] text-[color:var(--color-orange)] flex flex-col justify-center p-6 md:p-12 space-y-4"
        >
          <h2 class="text-xl font-title font-medium">{{ image.title }}</h2>
          <p class="text-[color:var(--color-bg)] font-text leading-relaxed text-sm md:text-base">
            {{ image.description }}
          </p>
          <a
            v-if="image.link"
            :href="image.link"
            target="_blank"
            rel="noopener"
            class="font-text text-sm"
            >See it here</a
          >
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center px-4">
      <h1
        class="line font-title text-center text-xl md:text-4xl py-2 font-normal text-[color:var(--color-bg)]"
      >
        Halyna Kuzminchuk
      </h1>
      <p
        class="line font-text text-center text-xl font-normal pb-4 md:pt-6 text-[color:var(--color-orange)]"
      >
        Open to new opportunities and job offers.
      </p>
      <div><ContactButton /></div>
    </div>
  </section>
</template>

<script setup>
import { defineAsyncComponent, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ContactButton = defineAsyncComponent(() => import('@/components/ContactButton.vue'))

gsap.registerPlugin(ScrollTrigger)

defineProps({
  title1: String,
  pageIndex: String,
  images: Array,
})

onMounted(() => {
  const wrapper = document.querySelector('.wrapper')
  const items = wrapper.querySelectorAll('.item')

  // Set initial positions (hide all but first)
  items.forEach((item, index) => {
    if (index !== 0) {
      gsap.set(item, { yPercent: 100 })
    }
  })

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      pin: true,
      start: 'top top',
      end: () => `+=${items.length * 100}%`,
      scrub: 1,
      invalidateOnRefresh: true,
    },
    defaults: { ease: 'none' },
  })

  items.forEach((item, index) => {
    timeline.to(item, { scale: 0.9, borderRadius: '10px' })

    if (items[index + 1]) {
      timeline.to(
        items[index + 1],
        { yPercent: 0 },
        '<', // sync with previous animation
      )
    }
  })
})
</script>
