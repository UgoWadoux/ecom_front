<template>
  <div class="mt-8 mb-8">
    <login-component ></login-component>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import LoginComponent from '@/components/authentication/LoginComponent.vue'

export default defineComponent({
  components: {LoginComponent}
})
</script>