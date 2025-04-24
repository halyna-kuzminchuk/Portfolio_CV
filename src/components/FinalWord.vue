<template>
  <section class="w-full pb-20 mt-25">
    <div
      class="final-card w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto"
    >
      <div class="flex flex-col justify-center items-center">
        <h2
          class="line font-title text-center text-4xl md:text-6xl py-2 font-semibold text-[color:var(--color-brown)]"
        >
          That’s it! Now it’s your turn to say hi.
        </h2>

        <p
          class="line font-text text-center text-xl font-normal pt-9 md:pt-12 text-[color:var(--color-orange)]"
        >
          I’ll make it easy for you. This is how you pronounce my name:
        </p>
      </div>

      <div
        class="line flex gap-10 items-center pt-9 md:pt-12 flex-col sm:flex-row sm:w-max sm:mx-auto"
      >
        <button
          @click="playSound"
          class="transparent px-6 md:px-7 py-3 rounded-full group w-full sm:w-max flex justify-center"
        >
          <div class="flex justify-center gap-5 items-center h-6">
            <font-awesome-icon
              :icon="['fas', isPressed ? 'pause' : 'circle-play']"
              class="text-3xl p-5 text-[color:var(--color-orange)]"
            />
            <span class="p-4 text-[color:var(--color-brown)] text-lg"> Halyna</span>
          </div>
        </button>
        <ContactButton />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// control icon toggle
const isPressed = ref(false)

const playSound = () => {
  const audio = new Audio('/pronunciation_uk_.mp3')
  audio.play()
  isPressed.value = true // show pause icon

  //  switch back to play
  audio.addEventListener('ended', () => {
    isPressed.value = false
  })
}

const ContactButton = defineAsyncComponent(() => import('@/components/ContactButton.vue'))

onMounted(() => {
  const card = document.querySelector('.final-card')
  const lines = card.querySelectorAll('.line')

  // Initial state
  gsap.set(lines, { opacity: 0, y: 60 })

  // Scroll-triggered animation
  gsap
    .timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      },
    })
    .to(lines, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.25,
    })
})
</script>
