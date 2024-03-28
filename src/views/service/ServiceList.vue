<script setup>
import ServiceItem from '@/components/services/ServiceItem.vue'
</script>
<template>
  <div class="grid grid-cols-2 xl:grid-cols-3  flex-wrap gap-3 m-4 ">
    <ServiceItem
      v-for="service in services"
      :service=service
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
          image: '/service/lavage_voiture.webp',
          price:12,
          description: 'Lavage Voiture eco-responsable',
          category:'lavage',
        },
        {
          id: '3d49dafe-a21e-49c1-b278-c9426eea4ec0',
          name: 'Location vélo',
          image: '/service/location_velo.webp',
          price: 6,
          description: 'Location de vélo, voyagez vert!',
          category: 'transport',
        }
      ]
    }
  }
}
</script>