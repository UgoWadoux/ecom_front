<script setup>
import ProductItem from '@/components/products/ProductItem.vue'
import cubeVaisselle from '../../../public/product/cube_vaisselle.webp'
import charlotteAlimentaire from '../../../public/product/charlotte_alimentaire.webp'
import ProductItemHome from '@/components/products/ProductItemHome.vue'
</script>
<template>
  <div class="flex  flex-col justify-around">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :source="product.source"
      :name="product.name"
      :price="product.price"
      :category="product.category"
      :description="product.description"
    ></ProductItem>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          id: '668c492a-06d2-47f8-8fd9-cd90000c4fde',
          name: 'Cube Vaisselle',
          price: 6.90,
          source: '/product/cube_vaisselle.webp',
          description: 'Savon solide pour la vaisselle',
          category:'menage'
        },
        {
          id: '130b9f03-6c51-487d-b231-0fc3580dd6a9',
          name: 'Charlotte Alimentaire',
          source: 'product/charlotte_alimentaire.webp',
          price: 10.00,
          description: 'Nos charlottes alimentaires proposés à l\'unité ou par lot de 3,',
          category: 'maison'
        }
      ]
    }
  }
}
</script>
