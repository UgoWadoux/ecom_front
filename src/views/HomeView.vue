<script setup>
import ProductItem from '@/components/ProductItemHome.vue'
import ServiceItem from '@/components/ServiceItemHome.vue'
import charlotteAlimentaire from '@/assets/images/product/charlotte_alimentaire.webp'
import cubeVaisselle from '@/assets/images/product/cube_vaisselle.webp'
import lavageVoiture from '@/assets/images/service/lavage_voiture.webp'
import locationVelo from '@/assets/images/service/location-velo.webp'
</script>

<template>
  <main class="flex justify-center mb-auto">
    <img src="../assets/images/accueil_mobile.png">
  </main>
  <h2>Nos derniers produits !</h2>
  <div class="flex justify-between">
    <ProductItem :source="charlotteAlimentaire"></ProductItem>
    <ProductItem :source="cubeVaisselle"></ProductItem>
  </div>
  <h2>Des services eco-responsable ? C'est possible!!</h2>
  <div class="flex justify-between">
    <ServiceItem :source="lavageVoiture"></ServiceItem>
    <ServiceItem :source="locationVelo"></ServiceItem>
  </div>
</template>
<script>
export default {
  name: "HomeView"
}
</script>
