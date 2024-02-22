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
    <figure class="w-1/2 flex items-center "><router-link :to="`/product/${product.id}`" ><img :src="product.image" alt="Album" class="object-contain h-full w-full" /></router-link></figure>
    <div class="card-body p-0  w-1/2 h-full">
      <h2 class="card-title text-xs">{{product.name}}</h2>
      <span class="badge">{{product.category}}</span>
<!--      <p class="text-xs">{{product.description}}</p>-->

      <p class="text-xs">{{product.price}}</p>
      <div class="card-actions flex justify-center mb-2">
        <button class="btn btn-primary min-h-2 h-8 w-28" @click="cartStore.addItem(product)">ajouter au panier</button>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>