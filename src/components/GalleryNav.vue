<script setup>
import logo from '../assets/svg/Logo_light.svg'
import bar from '../assets/svg/Menu_Bar_light.svg'
import cross from '../assets/svg/Cross_light.svg'

import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const Menu = ref([
  { name: 'Graphic designs', link: 'GraphicPage' },
  { name: 'Website design', link: 'WebsitePage' },
  { name: 'Photoshop designs', link: 'PhotoshopPage' },
  {
    icon: ['fab', 'linkedin'],
    link: 'https://www.linkedin.com/in/halyna-kuzminchuk-design',
    external: true,
  },
  { icon: ['fab', 'facebook'], link: 'https://www.facebook.com/galia.kuzminchuk/', external: true },
])

const isMenuOpen = ref(false)

function navigateTo(item) {
  isMenuOpen.value = false
  if (item.external) {
    window.open(item.link, '_blank')
  } else {
    router.push(`/gallery/${item.link}`)
  }
}
</script>

<template>
  <header
    class="flex justify-between items-center xl:px-16 px-4 py-2 bg-[color:var(--color-brown)] relative z-20"
  >
    <router-link to="/">
      <a href="#home"><img class="size-12" :src="logo" alt="" /> </a
    ></router-link>

    <div class="md:hidden z-30">
      <!-- Mibile toggle menu -->
      <button type="button" class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
        <span v-if="isMenuOpen" class="text-5xl">
          <img :src="cross" alt="" width="30" height="30" />
        </span>
        <span v-else class="text-5xl">
          <img :src="bar" alt="" width="30" height="30" />
        </span>
      </button>
    </div>

    <!-- Nav Bar link -->
    <nav
      :class="[
        'fixed inset-0 z-20 flex flex-col items-center justify-center  bg-[color:var(--color-brown)] md:relative md:bg-transparent md:flex md:flex-row md:justify-between',
        isMenuOpen ? 'block' : 'hidden',
      ]"
    >
      <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-6 md:space-y-0">
        <li v-for="item in Menu" :key="item.link">
          <a
            v-if="item.external"
            :href="item.link"
            target="_blank"
            rel="noopener"
            class="block font-normal font-text text-[color:var(--color-bg)] transition hover:text-[color:var(--color-orange)] ease-linear text-2xl md:text-xl"
          >
            <font-awesome-icon :icon="item.icon" />
          </a>
          <!-- Otherwise show text -->
          <button
            v-else
            @click="navigateTo(item)"
            class="block font-normal font-text text-[color:var(--color-bg)] transition hover:text-[color:var(--color-orange)] ease-linear text-2xl md:text-xl"
          >
            {{ item.name }}
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
