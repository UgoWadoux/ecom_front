

<template>
  <div
    class="rounded-lg mr-0 bg-base-100 p-2 shadow-md border-2 border-gray-50 mt-4 w-full max-w-96 flex flex-col h-auto items-center justify-between">
    <figure class="flex items-center  w-32 h-32 justify-center">
      <router-link :to="`/product/${product.id}`" class="mt-auto">
        <img :src="product.image" alt="Album" class="object-contain h-32" />
      </router-link>
    </figure>
    <div class="flex flex-col items-center w-full h-full justify-between gap-1.5">
      <h2 class="card-title text-sm font-roboto text-center h-4/5 p-2 ">{{ product.title }}</h2>
      <div class="flex flex-col justify-end h-8 w-full">
        <p class="text-sm font-roboto text-center  ">{{ product.price }} €</p>
        <p class="text-sm font-roboto text-center  ">quantité : {{ quantity }}</p>
      </div>
      <div class="card-actions justify-end">
        <button @click="cartStore.removeItem(product)" class="btn btn-primary min-h-2 h-8">supprimer</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore.js'


export default {
  setup(){
    const cartStore = useCartStore()
    return { cartStore }
  },
  props: {
    product: Object,
    quantity: Number
  }
}
</script>
<style scoped>

</style>