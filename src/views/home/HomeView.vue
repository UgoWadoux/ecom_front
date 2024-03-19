<script setup>

import ProductItemHome from '@/components/products/ProductItemHome.vue'
import ServiceItemHome from '@/components/services/ServiceItemHome.vue'
</script>

<template>
  <main class="flex justify-center mb-auto ">
<!--    <img src="../../assets/images/accueil_mobile.png" class=" visible sm:invisible">-->
    <img src="../../assets/images/Greeen-Hub-restyle-1.webp" alt="" class="max-h-96">
  </main>
  <div class="flex justify-center font-r">
    <h2 class="font-roboto text-xl m-4 ">Nos derniers produits !</h2>
  </div>
  <div class="flex justify-center ">
    <ProductItemHome
      v-for="product in products"
      :key="product.id"
      :source="product.source"
      :name="product.name"
      :description="product.description"
    ></ProductItemHome>
  </div>
  <div class="flex justify-center m-4 text-center">
    <h2 class="font-roboto text-xl">Des services eco-responsable ? C'est possible!!</h2>
  </div>

  <div class="flex justify-center">

    <ServiceItemHome
      v-for="service in services"
      :key="service.id"
      :source="service.source"
      :name="service.name"
      :description="service.description"
    ></ServiceItemHome>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
  data() {
    return {
      products: [
        {
          id: '668c492a-06d2-47f8-8fd9-cd90000c4fde',
          name: 'Cube Vaisselle',
          source: '/product/cube_vaisselle.webp',
          description: 'Savon solide pour la vaisselle '
        },
        {
          id: '130b9f03-6c51-487d-b231-0fc3580dd6a9',
          name: 'Charlotte Alimentaire',
          source: 'product/charlotte_alimentaire.webp',
          description: 'Nos charlottes alimentaires proposés à l\'unité ou par lot de 3,'
        }
      ],
      services:[
        {
          id: 'a63f630a-ef00-40d1-8e57-6b7139e12cf0',
          name: 'Lavage Voiture',
          source: '/service/lavage_voiture.webp',
          description: 'Lavage Voiture eco-responsable'
        },
        {
          id: '3d49dafe-a21e-49c1-b278-c9426eea4ec0',
          name: 'Location vélo',
          source: '/service/location_velo.webp',
          description: 'Location de vélo, voyagez vert!'
        }
      ]
    }
  }
}
</script>
