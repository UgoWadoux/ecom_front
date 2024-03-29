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
    <button class="btn btn-primary max-w-96 w-full " @click="sendOder">Commander</button>
  </div>
</template>
<script>
import { useCartStore } from '@/stores/cartStore.js'
import CartItem from '@/components/cart/CartItem.vue'
import { defineComponent } from 'vue'
import { useHttpStore } from '@/stores/httpStore.js'

export default defineComponent({
  components: { CartItem },
  setup(){
    const cartStore = useCartStore()
    return { cartStore }
  },
  methods :{
    sendOder(){
      let products = useCartStore().currentCart
      console.log(products[1])
      let productsObjects = []
      products.forEach(product=>{
        productsObjects.push({
          'quantity': product.count,
          'id': product.item.id
        })
      })
      console.log(productsObjects)

    }
  }

})

</script>