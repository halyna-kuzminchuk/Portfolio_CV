<template>
  <section class="w-full mt-25">
    <div
      class="business-card w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto"
    >
      <div class="line mt-6 flex flex-col justify-center items-center md:flex-row gap-2">
        <img src="/images/Small_image.png" width="100px" height="120px" />
        <span class="font-text uppercase text-sm font-semibold text-[color:var(--color-brown)]"
          >Halyna Kuzminchuk</span
        >
      </div>
      <div class="flex flex-col justify-center items-center">
        <h1
          class="line font-title text-center text-4xl xl:text-8xl md:text-6xl py-2 font-semibold text-[color:var(--color-brown)]"
        >
          Multimedia Designer
        </h1>
        <p
          class="line font-text text-center text-xl font-normal pt-9 md:pt-12 text-[color:var(--color-orange)]"
        >
          Open to new opportunities and job offers.
        </p>
      </div>

      <div
        class="line flex items-center gap-3 pt-9 md:pt-12 flex-col sm:flex-row sm:w-max sm:mx-auto"
      >
        <!-- Button with tooltip menu at click -->
        <ContactButton />

        <button
          class="border border-[color:var(--color-orange)] px-6 md:px-7 py-3 rounded-full group w-full sm:w-max flex justify-center"
        >
          <div
            class="hover:scale-105 transition-all ease-in-out flex justify-center items-center h-6"
          >
            <svg
              class="download-icon"
              width="25"
              height="18"
              viewBox="0 0 27.28 40.17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                class="fill-[color:var(--color-orange)]"
                points="13.64 40.17 0 19.41 8.31 19.41 8.31 0 8.41 0 23.45 0 27.11 0 27.11 10.66 23.45 10.66 19.01 10.66 18.97 10.66 18.97 19.41 27.28 19.41 13.64 40.17"
              />
            </svg>
            <a href="#designs" class="pl-2 text-[color:var(--color-orange)] text-nowrap">
              See my designs</a
            >
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineAsyncComponent, onMounted } from 'vue'

import gsap from 'gsap'

const ContactButton = defineAsyncComponent(() => import('@/components/ContactButton.vue'))

onMounted(() => {
  const card = document.querySelector('.business-card')
  const lines = card.querySelectorAll('.line')

  // Initial
  gsap.set(lines, { opacity: 0, y: 60 })

  //  on load
  gsap.timeline().to(lines, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.25, // each line comes in one after another
  })
})
</script>
