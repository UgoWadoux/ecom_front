
<template>
  <div class="mt-8 mb-8">
    <register-component></register-component>
  </div>/
</template>
<script >
import { defineComponent } from 'vue'
import RegisterComponent from '@/components/authentication/RegisterComponent.vue'
export default defineComponent({
  components: {RegisterComponent}
})
</script>