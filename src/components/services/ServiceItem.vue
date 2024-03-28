<!--<script setup>-->
<!--import '@/components/products/ProductItem.vue'-->
<!--</script>-->

<template>
  <div
    class="rounded-lg mr-0 bg-base-100 p-2 shadow-md border-2 border-gray-50 mt-4  flex flex-col h-auto items-center justify-between">
    <figure class="flex items-center  w-32 h-32 justify-center "><img :src="service.image" alt="Shoes"
                                                                      class="object-cover h-32 w-full" /></figure>
    <div class="flex flex-col items-center w-full h-full ">
      <h2 class="card-title text-md font-roboto text-center h-4/5 p-2 ">{{ service.name }}</h2>
      <div>
        <p class="text-center text-xs font-roboto h-1/5">{{ service.description }}</p>
      </div>
      <span class="badge text-center text-xs font-roboto h-8">{{ service.category }}</span>

      <p class="text-sm font-roboto text-center font-bold ">{{ service.price }} €</p>

      <div class="card-actions justify-center">
        <!--        <button class="btn btn-primary text-xs">voir plus</button>-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    service: Object
  }
}
</script>
<style scoped>

</style>