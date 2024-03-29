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
    <button class="btn btn-primary max-w-96 w-full " @click="dataProduct">Commander</button>
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
    dataProduct(){
      let products = useCartStore().currentCart
      let productsObjects = []

      products.forEach(product=>{
        productsObjects.push({
          'quantity': product.count,
          'id': product.item.id
        })
      })
      // console.log(productsObjects)
      return productsObjects
    },
    dataOrder(){
      let user = useHttpStore().currentUser
      let products = this.dataProduct()
      let deliver = 0
      return {
        'deliver': deliver,
        'user_id': user.id,
        'products': products
      }
    },
  }

})

</script>