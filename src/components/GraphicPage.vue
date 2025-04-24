<script setup>
import ScrollGallery from '@/components/ScrollGallery.vue'
import PortfolioDB from '@/modules/PortfolioDatabase'

const images = PortfolioDB.graphicsProjects
</script>

<template>
  <ScrollGallery title1="Graphic" pageIndex="gd" :images="images" />
</template>
