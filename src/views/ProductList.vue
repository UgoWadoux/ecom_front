<script setup>
import ProductItem from '@/components/ProductItem.vue'
import cubeVaisselle from '@/assets/images/product/cube_vaisselle.webp'
import charlotteAlimentaire from '@/assets/images/product/charlotte_alimentaire.webp'
</script>
<template>
  <div class="flex  flex-col justify-around">
    <product-item :source="cubeVaisselle"></product-item>
    <product-item :source="charlotteAlimentaire"></product-item>
  </div>
</template>
