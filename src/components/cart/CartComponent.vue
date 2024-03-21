// CartComponent.vue
<script setup>
import { useCartStore } from '@/stores/cartStore.js'
import CartItem from '@/components/cart/CartItem.vue'

const cartStore = useCartStore()
</script>

<template>
  <div class="grid grid-cols-1 place-items-center flex-wrap gap-3 m-4 ">

    <cart-item
      v-for="item in cartStore.items"
      :product="item.item"
      :quantity="item.count">

    </cart-item>
  </div>
  <div class="grid grid-cols-1  place-items-center  flex-wrap gap-3 m-4">
    <div class="flex flex-col items-center gap-3">
      <p class="font-roboto">Nombre de produits : {{ cartStore.totalItems }}</p>
      <p class="font-roboto">Total : {{ cartStore.totalCost.toFixed(2) }} €</p>
    </div>
    <button class="btn btn-primary max-w-96 w-full ">Commander</button>
  </div>
</template>
