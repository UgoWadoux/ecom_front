<template>
  <div
    class="rounded-lg mr-0 bg-base-100 p-2 shadow-md border-2 border-gray-50 mt-4 w-full  h-full max-w-96 flex flex-col  items-center justify-between">
    <figure class="flex items-center  w-32 sm:w-48 lg:w-56  h-32 sm:h-48 lg:h-56 justify-center "><img :src="product.source" alt="Shoes"
                                                                      class="object-cover h-32 sm:h-48 lg:h-56 w-full" /></figure>

    <div class="flex flex-col items-center w-full h-full ">
      <h2 class="card-title text-md font-roboto text-center h-4/5 p-2 ">{{ product.name }}</h2>
      <div>
        <p class="text-center text-xs font-roboto h-1/5">{{ product.description }}</p>
      </div>
      <div class="card-actions justify-center">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: Object
  }
}
</script>
<style>

</style>