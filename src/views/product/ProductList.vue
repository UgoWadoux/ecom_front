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
import ProductItem from '@/components/products/ProductItem.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components : { ProductItem },
  data() {
    return {
      products: null
    }
  },
  methods: {
    async fetchProducts() {
      const httpStore = useHttpStore()
      this.products = await httpStore.getProducts()
    }
  },
  created() {
    this.fetchProducts()
  },


})
</script>
