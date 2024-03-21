<script setup>
import ProductItem from '@/components/products/ProductItem.vue'
import { useHttpStore } from '@/stores/httpStore.js'
</script>
<template>
  <div class="sm:justify-center:flex">
  <div class="grid grid-cols-2 xl:grid-cols-3  flex-wrap gap-3 m-4 ">
    <ProductItem
      v-for="product in products"
      :product="product"
    ></ProductItem>
  </div>
  </div>
</template>
<script>
import { useHttpStore } from '@/stores/httpStore.js'

export default {
  data() {
    return {
      // products: [
      //   {
      //     id: '668c492a-06d2-47f8-8fd9-cd90000c4fde',
      //     name: 'Cube Vaisselle',
      //     price: 6.90,
      //     source: '/product/cube_vaisselle.webp',
      //     description: 'Savon solide pour la vaisselle',
      //     category:'menage'
      //   },
      //   {
      //     id: '130b9f03-6c51-487d-b231-0fc3580dd6a9',
      //     name: 'Charlotte Alimentaire',
      //     source: 'product/charlotte_alimentaire.webp',
      //     price: 10.00,
      //     description: 'Nos charlottes alimentaires proposés à l\'unité ou par lot de 3,',
      //     category: 'maison'
      //   }
      // ]
      products: null,
    }
  },
  methods:{
    async fetchProducts(){
      const httpStore = useHttpStore()
      this.products = await httpStore.getProducts()
      }
    },
  created() {
    this.fetchProducts()
  }

}
</script>
