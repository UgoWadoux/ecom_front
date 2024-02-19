<script>
export default {
  props:{
    source:String
  }
}
</script>
<template>
  <div class="card card-side bg-base-100 shadow-xl h-36">
    <figure class="w-36"><img :src="source" alt="Album" class="object-cover h-full w-full"/></figure>
    <div class="card-body p-1">
      <h2 class="card-title text-xs">New album is released!</h2>
      <p class="text-xs">Click the button to listen on Spotiwhy app.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary min-h-2 h-8" >buy now</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>