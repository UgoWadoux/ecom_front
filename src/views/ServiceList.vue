<script setup>
import lavageAuto from '@/assets/images/service/lavage_voiture.webp'
import locationVelo from '@/assets/images/service/location-velo.webp'
import ServiceItem from '@/components/ServiceItem.vue'
</script>
<template>
  <div class="flex  flex-col justify-around">
    <service-item :source="lavageAuto"></service-item>
    <service-item :source="locationVelo"></service-item>
  </div>
</template>