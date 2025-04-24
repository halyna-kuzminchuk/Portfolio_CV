<template>
  <!-- Button with tooltip menu at click -->
  <div class="relative w-full" ref="tooltipWrapper">
    <button
      @click="toggleTooltip"
      class="px-6 md:px-7 py-3 rounded-full w-full sm:w-max flex items-center justify-center gap-2 bg-[color:var(--color-orange)] text-[color:var(--color-bg)]"
    >
      <div class="hover:scale-105 transition-all ease-in-out flex justify-center items-center h-6">
        <svg
          class="download-icon"
          width="25"
          height="auto"
          viewBox="0 0 538.54 421.29"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-[color:var(--color-bg)]"
            d="M518.7,17.72c-.13-.14-.24-.28-.37-.41-.32-.32-.66-.61-1.01-.88-11.34-10.2-26.32-16.42-42.74-16.42H63.96c-16.42,0-31.4,6.22-42.74,16.42-.35.27-.68.57-1.01.89-.13.13-.25.27-.37.41C7.63,29.37,0,45.79,0,63.96v293.37c0,18.17,7.63,34.59,19.84,46.24.13.14.24.28.37.41.32.32.66.61,1,.88,11.34,10.2,26.32,16.43,42.74,16.43h410.62c16.42,0,31.41-6.22,42.74-16.43.35-.27.68-.57,1-.88.13-.13.25-.27.37-.41,12.21-11.66,19.84-28.07,19.84-46.24V63.96c0-18.17-7.63-34.59-19.84-46.24ZM344.17,210.65L508.93,44.02c3.42,5.86,5.38,12.67,5.38,19.94v293.37c0,7.26-1.97,14.07-5.38,19.94l-164.76-166.62ZM474.58,24.22c5.84,0,11.38,1.28,16.38,3.55l-172.32,174.26s0,0,0,0c0,0,0,0-.01.01l-30.03,30.37c-5.14,5.2-12,8.06-19.31,8.06s-14.17-2.86-19.31-8.07l-30.03-30.36s-.01-.01-.02-.02c0,0,0,0-.01-.01L47.58,27.76c5-2.27,10.54-3.55,16.38-3.55h410.62ZM29.6,377.27c-3.42-5.86-5.38-12.67-5.38-19.94V63.96c0-7.26,1.97-14.07,5.38-19.94l164.76,166.62L29.6,377.27ZM63.96,397.07c-5.84,0-11.38-1.28-16.38-3.55l163.81-165.66,21.34,21.58c9.73,9.84,22.7,15.26,36.53,15.26s26.81-5.42,36.53-15.26l21.34-21.58,163.81,165.66c-5,2.27-10.54,3.55-16.38,3.55H63.96Z"
          />
        </svg>
        <span class="pl-2 flex items-center justify-center text-[color:var(--color-bg)]"
          >Contact Me</span
        >
      </div>
    </button>

    <!-- Tooltip -->

    <div
      ref="tooltipContainer"
      v-if="showOptions"
      class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-[color:var(--color-brown)] text-[color:var(--color-bg)] rounded-sm shadow-lg p-4 z-10 space-y-2 text-sm font-text"
    >
      <button
        class="w-full pb-2 border-b-2 border-[color:var(--color-bg)]"
        @click="copyToClipboard"
      >
        <font-awesome-icon :icon="['fas', 'copy']" />
        <span class="p-2">Copy to clipboard</span>
      </button>
      <button class="w-full" @click="openMail">
        <font-awesome-icon :icon="['fas', 'paper-plane']" />
        <span class="p-2">Open your mail app</span>
      </button>
    </div>
  </div>
  <!-- Custom Alert -->
  <div
    class="fixed top-4 right-4 bg-[color:var(--color-brown)] border-[color:var(--color-bg)] border-2 text-[color:var(--color-bg)] px-4 py-2 rounded-sm shadow-lg text-sm animate-fade-in-out"
    v-if="showAlert"
  >
    {{ alertText }}
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showOptions = ref(false)
const email = 'galiakuzminchuk@gmail.com'
const showAlert = ref(false)
const alertText = ref('')
const tooltipWrapper = ref(null)

const tooltipContainer = ref(null)

let hideTimeout = null

const toggleTooltip = () => {
  showOptions.value = true
  clearTimeout(hideTimeout)
  hideTimeout = setTimeout(() => {
    showOptions.value = false
  }, 3000)
}

const copyToClipboard = () => {
  navigator.clipboard.writeText(email)
  showOptions.value = false
  triggerAlert('Copied to clipboard!')
}

const openMail = () => {
  showOptions.value = false
  window.location.href = `mailto:${email}`
}

const triggerAlert = (msg) => {
  alertText.value = msg
  showAlert.value = true
  setTimeout(() => {
    showAlert.value = false
  }, 2500)
}

// Hide the tooltip by click outside
const handleClickOutside = (event) => {
  if (tooltipWrapper.value && !tooltipWrapper.value.contains(event.target)) {
    showOptions.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
