<script setup>
import { useCartStore } from '@/stores/cartStore.js'
const cartStore = useCartStore()
</script>
<script>
export default {
  props:{
    product:Object,
    quantity: Number,
  }
}
</script>

<template>
  <div class="card card-side bg-base-100 shadow-xl  h-40 gap-0.5 mb-2">
    <figure class="w-36 "><img :src="product.image" alt="Album" class="object-cover h-full w-full" /></figure>
    <div class="card-body p-0  w-1/2 h-1/3">
      <h2 class="card-title text-xs">{{product.name}}</h2>
<!--      <span class="badge">{{category}}</span>-->
<!--      <p class="text-xs">{{description}}</p>-->

      <div class="card-actions justify-end">
        <p class="text-xs">{{product.price}}</p>
        <p>{{quantity}}</p>
        <button @click="cartStore.removeItem(product)" class="btn btn-primary min-h-2 h-8">Remove</button>
<!--        <button class="btn btn-primary min-h-2 h-8" @click="cartStore.addItem({id:id, title: name, price: price })">buy now</button>-->
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>