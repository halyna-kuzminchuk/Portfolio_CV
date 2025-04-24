<script setup>
import ScrollGallery from '@/components/ScrollGallery.vue'
import PortfolioDB from '@/modules/PortfolioDatabase'

const posters = PortfolioDB.photoProjects
</script>

<template>
  <ScrollGallery title1="Photoshop" pageIndex="pd" :images="posters" />
</template>
