<template>
  <section ref="section" class="w-full mt-25 md:mt-50 overflow-hidden" id="about">
    <div class="bg-[color:var(--color-brown)] w-full h-fit relative">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start text-[color:var(--color-bg)] px-4 py-4 xl:px-16 xl:py-8"
      >
        <!-- Text Content -->
        <div>
          <h3 class="text-3xl md:text-4xl lg:text-5xl font-title py-4">
            Studying Multimedia design at EASV, based in Esbjerg, Denmark
          </h3>
          <div class="flex items-center text-sm sm:text-base py-2">
            <font-awesome-icon
              :icon="['fas', 'arrow-turn-up']"
              class="transform rotate-90 text-xl mr-2"
            />
            <span>previously Ukraine</span>
          </div>
          <p class="text-sm sm:text-base py-4 xl:py-6 max-w-full lg:max-w-3xl">
            In recent years, I have embraced the opportunity to live in Denmark, where I am pursuing
            my dream of transitioning into the digital world, focusing on coding and design.
            Previously, I enjoyed a successful career as an English language instructor and
            interpreter.
          </p>
        </div>

        <!-- Image -->
        <div class="relative flex justify-center items-center">
          <img
            src="/images/Back.jpg"
            alt="Window view"
            class="w-full h-auto object-cover rounded-lg shadow-lg md:mt-30"
          />
          <img
            ref="newImage"
            src="/images/My_girls.jpg"
            alt="Children"
            class="w-full h-auto object-cover rounded-lg shadow-lg md:mt-30 absolute top-0 right-[-100%] transition-transform opacity-0"
          />
        </div>
      </div>
      <div
        ref="messageBox"
        class="m-4 absolute z-20 center bottom-3 max-w-1/2 md:min-w-64 text-pretty h-fit md:left-1/3 md:bottom-1/8 md:max-w-1/5 bg-[color:var(--color-pink)] rounded-sm p-4 text-[color:var(--color-brown)] font-text"
      >
        <div>
          <font-awesome-icon
            :icon="['fas', 'face-smile']"
            class="text-lg text-[color:var(--color-orange)] mx-2"
          />

          <p class="text-normal m-2">Surprise!</p>
        </div>
        <p class="text-sm m-2">
          Hi, we are Daria and Maria - our mom’s most successful project. Just imagine what she can
          create for you!
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const newImage = ref(null)
const messageBox = ref(null)
const section = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section.value,
      start: 'top top', // start when top hits top of viewport
      end: '+=100',
      pin: true, // this makes the section "stick"
      scrub: true,
    },
  })

  tl.fromTo(
    messageBox.value,
    { autoAlpha: 0, scale: 0.3, transformOrigin: 'center center' },
    { autoAlpha: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
  ).to(
    newImage.value,
    { x: '-100%', opacity: 1, duration: 1, ease: 'power2.inOut' },
    '<+0.3', // slight delay overlap after popup
  )
})
</script>
