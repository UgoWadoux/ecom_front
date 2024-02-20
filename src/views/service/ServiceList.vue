<script setup>
import lavageAuto from '../../../public/service/lavage_voiture.webp'
import locationVelo from '../../../public/service/location_velo.webp'
import ServiceItem from '@/components/services/ServiceItem.vue'
import ProductItem from '@/components/products/ProductItem.vue'
</script>
<template>
  <div class="flex  flex-col justify-around">
    <ServiceItem
      v-for="service in services"
      :key="service.id"
      :source="service.source"
      :name="service.name"
      :price="service.price"
      :category="service.category"
      :description="service.description"
    ></ServiceItem>
  </div>
</template>
<script>
export default {
  data(){
    return{
      services:[
        {
          id: 'a63f630a-ef00-40d1-8e57-6b7139e12cf0',
          name: 'Lavage Voiture',
          source: '/service/lavage_voiture.webp',
          price:12,
          description: 'Lavage Voiture eco-responsable',
          category:'lavage',
        },
        {
          id: '3d49dafe-a21e-49c1-b278-c9426eea4ec0',
          name: 'Location vélo',
          source: '/service/location_velo.webp',
          price: 6,
          description: 'Location de vélo, voyagez vert!',
          category: 'transport',
        }
      ]
    }
  }
}
</script>