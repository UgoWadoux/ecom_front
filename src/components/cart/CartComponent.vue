// CartComponent.vue
<script setup>
import { useCartStore } from '@/stores/cartStore.js'
import CartItem from '@/components/cart/CartItem.vue'
const cartStore = useCartStore()
</script>

<template>
  <div>

    <cart-item
      v-for="item in cartStore.items"
      :product="item.item"
      :quantity="item.count">

      </cart-item>
    <p>Total Items: {{ cartStore.totalItems }}</p>
    <p>Total Cost: ${{ cartStore.totalCost.toFixed(2) }}</p>
    <button class="btn btn-primary">Commander</button>
<!--    <button @click="cartStore.addItem({ id:  1, title: 'Product', price:  100 })">Add Product</button>-->
  </div>
</template>
