<script>
export default {
  props:{
    source:String,
    name: String,
    price: Number,
    description: String,
    category: String
  }
}
</script>
<template>
  <div class="card card-side bg-base-100 shadow-xl  h-40 gap-0.5 mb-2">
    <figure class="w-36 "><img :src="source" alt="Album" class="object-cover h-full w-full" /></figure>
    <div class="card-body p-0  w-1/2 h-1/3">
      <h2 class="card-title text-xs">{{name}}</h2>
      <span class="badge">{{category}}</span>
      <p class="text-xs">{{description}}</p>

      <div class="card-actions justify-end">
        <p class="text-xs">{{price}}</p>
        <button class="btn btn-primary min-h-2 h-8" >buy now</button>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>