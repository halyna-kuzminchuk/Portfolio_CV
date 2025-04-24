<script setup>
import { defineAsyncComponent } from 'vue'
const BusinessCardHero = defineAsyncComponent(() => import('@/components/BusinessCardHero.vue'))
const DesignCards = defineAsyncComponent(() => import('@/components/DesignCards.vue'))
const FinalWord = defineAsyncComponent(() => import('@/components/FinalWord.vue'))
const PhotoCards = defineAsyncComponent(() => import('@/components/PhotoCards.vue'))
const AboutMe = defineAsyncComponent(() => import('@/components/AboutMe.vue'))
const CoffeeBreakCV = defineAsyncComponent(() => import('@/components/CoffeeBreakCV.vue'))
const CoffeeBreakVideo = defineAsyncComponent(() => import('@/components/CoffeeBreakVideo.vue'))
const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'))
const FooterZone = defineAsyncComponent(() => import('@/components/FooterZone.vue'))
const BackToTop = defineAsyncComponent(() => import('@/components/BackToTop.vue'))
</script>

<template>
  <main class="bg-[color:var(--color-bg)]">
    <NavBar />
    <BusinessCardHero />
    <PhotoCards />
    <CoffeeBreakVideo />
    <AboutMe />
    <CoffeeBreakCV />

    <DesignCards />

    <FinalWord />
    <FooterZone />
    <BackToTop />
  </main>
</template>
