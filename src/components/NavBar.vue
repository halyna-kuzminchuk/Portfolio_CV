<script setup>

import logo from '../assets/svg/logo.svg'
import bar from '../assets/svg/Menu_Bar.svg'
import cross from '../assets/svg/Cross.svg'


import { ref } from 'vue'
const Menu = ref([
    { name: 'About Me', link: '#about' },
    { name: 'Designs', link: '#designs' },
    { name: 'CV', link: '#cv' },
    { icon: ['fab', 'linkedin'], link: 'https://www.linkedin.com/in/halyna-kuzminchuk-design' },
    { icon: ['fab', 'facebook'], link: 'https://www.facebook.com/galia.kuzminchuk/' }

  ])

  const isMenuOpen = ref(false);
  const scrollToSection = (href) => {
        isMenuOpen.value = false; // Close the menu when a link is clicked
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }

  };




</script>


<template>
    <header class="flex justify-between items-center xl:px-16 px-4 py-2 border-b-2 border-[color:var(--color-orange)] bg-[color:var(--color-bg)]  relative z-20 " >
       <a href="#home" ><img class="size-12" :src="logo" alt=""> </a>
    <div class="md:hidden z-30">
        <!-- Mibile toggle menu -->
      <button type="button" class="block focus:outline-none"
      @click="isMenuOpen = !isMenuOpen">
          <span v-if="isMenuOpen" class="text-5xl">
            <img :src="cross" alt="" width="30" height="30">
          </span>
          <span v-else class="text-5xl">
            <img :src="bar" alt="" width="30" height="30">
          </span>

      </button>
    </div>


     <!-- Nav Bar link -->
      <nav
      :class="['fixed inset-0 z-20 flex flex-col items-center justify-center  bg-[color:var(--color-bg)] md:relative md:bg-transparent md:flex md:flex-row md:justify-between', isMenuOpen ? 'block' : 'hidden']">

        <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-6 md:space-y-0">

          <li v-for="item in Menu" :key="item.link">
            <a :href="item.link"
            class="block font-normal font-text text-[color:var(--color-brown)] transition
             hover:text-[color:var(--color-orange)] ease-linear text-2xl md:text-xl"
            @click="scrollToSection(item.link)">
              <font-awesome-icon v-if="item.icon" :icon="item.icon" />
              <!-- Otherwise show text -->
              <span v-else>{{ item.name }}</span>
            </a>


          </li>


        </ul>
      </nav>



    </header>
</template>

<style scoped>




</style>
