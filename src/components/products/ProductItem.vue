<script setup>
import '@/components/products/ProductItem.vue'

// const cartStore = useCartStore()
</script>
<script>
export default {
  props: {
    product: Object
  }
}
</script>
<template>
  <div
    class="rounded-lg mr-0 bg-white p-2 shadow-md border-2 border-gray-50 mt-4  flex flex-col h-auto items-center justify-between">

    <figure class="flex items-center  w-32 h-32 justify-center ">

      <router-link :to="`/product/${product.id}`" class="mt-auto">
        <img :src="product.image" alt="Album" class="object-contain h-32" />
      </router-link>

    </figure>

    <div class="flex flex-col items-center w-full h-full justify-between ">

      <h2 class="card-title text-sm font-roboto text-center h-4/5 p-2 ">{{ product.name }}</h2>

      <span class="badge border-none text-center bg-secondary text-white text-xs font-roboto h-8">{{ product.category.name }}</span>

      <div class="flex flex-col justify-end h-8 w-full">
        <p class="text-sm font-roboto text-center font-bold ">{{ product.price }} €</p>
      </div>

    </div>

  </div>

</template>

<style scoped>

</style>