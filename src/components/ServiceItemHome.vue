<script>
export default {
  props:{
    source:String,
  }
}
</script>
<template>
  <div class="card bg-base-100 shadow-xl w-32">
    <figure class="w-32h h-32"><img :src="source" alt="Shoes"  class="object-cover h-full w-full"/></figure>
    <div class="card-body p-2 items-center">
      <h2 class="card-title">Shoes!</h2>
      <p class="text-xs">If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary ">Buy Now</button>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script setup>
</script>