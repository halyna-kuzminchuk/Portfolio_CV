<template>
  <footer
    class="flex justify-between items-center xl:px-16 px-4 py-2 border-t-2 border-[color:var(--color-orange)] bg-[color:var(--color-bg)]"
  >
    <div class="flex items-start flex-col md:flex-row py-2">
      <div
        class="flex items-center bg-gradient-to-br shadow-sm from-[#D9D9D9] to-[#EDD0C6] relative"
        ref="feedbackWrapper"
      >
        <button
          class="border-none px-4 text-[color:var(--color-orange)] text-lg font-text] p-2 cursor-pointer hover:scale-105"
          @click="toggleFeedback"
        >
          Leave feedback
        </button>
        <div
          ref="feedbackContainer"
          v-if="showFeedback"
          class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-full max-h-96 bg-[color:var(--color-brown)] text-[color:var(--color-bg)] rounded-sm shadow-lg p-4 z-10 space-y-2 text-sm font-text"
        >
          <p>Your feedback:</p>
          <input
            v-model="newFeedbackText"
            type="text"
            maxlength="100"
            class="bg-[color:var(--color-bg)] w-full h-fit px-2 text-[color:var(--color-brown)]"
          />
          <p>Your name:</p>
          <input
            v-model="newFeedbackName"
            @keydown.enter="handleFeedback"
            type="text"
            class="bg-[color:var(--color-bg)] w-full h-fit px-2 text-[color:var(--color-brown)]"
          />
        </div>
        <font-awesome-icon
          :icon="['fas', 'quote-left']"
          class="text-xl px-4 text-[color:var(--color-brown)]"
        />
      </div>
      <div>
        <p
          ref="feedbackText"
          class="text-lg text-[color:var(--color-brown)] text-left font-text p-2"
        >
          "{{ currentFeedback.text }}"
          <span class="italic text-[color:var(--color-orange)] ml-2"
            >— {{ currentFeedback.name }}</span
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import PortfolioDB from '@/modules/PortfolioDatabase'

const showFeedback = ref(false)

const feedbackWrapper = ref(null)

const feedbackContainer = ref(null)

const toggleFeedback = () => {
  showFeedback.value = !showFeedback.value
}

// Hide  by click outside
const handleClickOutside = (event) => {
  if (feedbackWrapper.value && !feedbackWrapper.value.contains(event.target)) {
    showFeedback.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

const userFeedback = PortfolioDB.getAllFeedback()
const newFeedbackText = ref('')
const newFeedbackName = ref('')

const handleFeedback = async () => {
  if (!newFeedbackText.value.trim() || !newFeedbackName.value.trim()) return

  try {
    await fetch('http://localhost:3001/api/send-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newFeedbackName.value,
        feedback: newFeedbackText.value,
      }),
    })

    console.log('✅ Feedback email sent!')
  } catch (err) {
    console.error('❌ Failed to send feedback:', err)
  }

  //Database function
  PortfolioDB.addFeedback(newFeedbackText.value, newFeedbackName.value)

  // Reset form
  newFeedbackText.value = ''
  newFeedbackName.value = ''
  showFeedback.value = false

  // Update immediately
  currentIndex.value = userFeedback.value.length - 1
  currentFeedback.value = userFeedback.value[currentIndex.value]
}
const currentIndex = ref(0)
const currentFeedback = ref(userFeedback.value[0])
const feedbackText = ref(null)

const showNextFeedback = () => {
  const el = feedbackText.value

  // Fade out
  gsap.to(el, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      // Update content
      currentIndex.value = (currentIndex.value + 1) % userFeedback.value.length
      currentFeedback.value = userFeedback.value[currentIndex.value]

      // Fade in
      gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        delay: 0.3, // short pause between fade out and in
      })
    },
  })
}

onMounted(() => {
  // Loop through every 4 seconds
  setInterval(showNextFeedback, 4000)
})
</script>
