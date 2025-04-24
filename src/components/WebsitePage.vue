<script setup>
import ScrollGallery from '@/components/ScrollGallery.vue'
import PortfolioDB from '@/modules/PortfolioDatabase'

const sites = PortfolioDB.webProjects
</script>

<template>
  <ScrollGallery title1="Website" pageIndex="wd" :images="sites" />
</template>
