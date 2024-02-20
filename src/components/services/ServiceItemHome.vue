<script>
export default {
  props: {
    id:String,
    source: String,
    name:String,
    description: String,
  }
}
</script>
<template>
  <div class="card  bg-base-100 shadow-xl w-32">
    <figure class="w-32h h-32"><img :src="source" alt="Shoes" class="object-cover h-full w-full" /></figure>
    <div class="card-body p-2 items-center h-1/3">
      <h2 class="card-title text-s">{{name}}</h2>
      <p class="text-xs">{{description}}</p>
      <div class="card-actions justify-center">
        <button class="btn btn-primary text-xs">voir plus</button>
      </div>
    </div>
  </div>
</template>
<style>

</style>