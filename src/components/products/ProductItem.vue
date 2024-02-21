<script setup>
import { useCartStore } from '@/stores/cartStore.js'
import '@/components/products/ProductItem.vue'
const cartStore= useCartStore()
</script>
<script>
export default {
  props:{
    product:Object,
  }
}
</script>
<template>
  <div class="card card-side bg-base-100 shadow-xl  h-40 gap-0.5 mb-2">
    <figure class="w-36 "><router-link :to="`/product/${product.id}`" ><img :src="product.image" alt="Album" class="object-cover h-full w-full" /></router-link></figure>
    <div class="card-body p-0  w-1/2 h-1/3">
      <h2 class="card-title text-xs">{{product.name}}</h2>
      <span class="badge">{{product.category}}</span>
<!--      <p class="text-xs">{{product.description}}</p>-->

      <div class="card-actions justify-end">
        <p class="text-xs">{{product.price}}</p>
        <button class="btn btn-primary min-h-2 h-8" @click="cartStore.addItem(product)">buy now</button>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>