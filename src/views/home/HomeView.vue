<template>
  <div class="mb-8">
    <main class="flex justify-center mb-auto ">
      <!--    <img src="../../assets/images/accueil_mobile.png" class=" visible sm:invisible">-->
      <img src="../../assets/images/Greeen-Hub-restyle-1.webp" alt="" class="max-h-96">
    </main>
    <div class="flex justify-center font-r">
      <h2 class="font-roboto text-xl mt-8 font-bold ">Nos derniers produits !</h2>
    </div>
    <div class="grid grid-cols-1 grid-rows-1 flex-wrap gap-3 m-4  place-items-center ">
      <div class="grid grid-cols-2 grid-rows-1 flex-wrap gap-3 m-4 place-items-center w-full max-w-3xl">
        <ProductItemHome
          v-for="product in products"
          :product=product
        ></ProductItemHome>
      </div>
    </div>

    <div class="flex justify-center mt-8 text-center font-bold">
      <h2 class="font-roboto text-xl">Des services eco-responsable ? C'est possible!!</h2>
    </div>

    <div class="grid grid-cols-1 grid-rows-1 flex-wrap  gap-3 m-4 place-items-center ">
      <div class="grid grid-cols-2 grid-rows-1 flex-wrap gap-3 m-4 place-items-center w-full max-w-3xl">
        <ServiceItemHome
          v-for="service in services"
          :service=service
        ></ServiceItemHome>
      </div>
    </div>

  </div>


</template>
<script>
import ProductItemHome from '@/components/products/ProductItemHome.vue'
import ServiceItemHome from '@/components/services/ServiceItemHome.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    ProductItemHome,
    ServiceItemHome
  },
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
      services: [
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
})
</script>
