<template>
  <div class="navbar flex justify-between mt-auto border-b">
    <div class="navbar-start w-auto">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">

          <i-ph-list-bold></i-ph-list-bold>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52">
          <li>
            <router-link to="/products">
              Produits
            </router-link>
          </li>
          <li>
            <router-link to="/services">
              Services
            </router-link>
          </li>
          <li><a>Blog</a></li>
          <li v-if="httpStore.currentUser==null">
            <router-link to="/login">
              Connexion
            </router-link>
          </li>
          <li v-if="httpStore.currentUser!=null">
            <a @click="httpStore.logout()">Déconnexion</a>
          </li>
          <li v-if="httpStore.currentUser!=null">
            <router-link to="/profil">
              Profil
            </router-link>
          </li>
        </ul>
      </div>
      <router-link to="/"><img src="../../assets/images/logo/logo_greenhub.webp" class="w-8"></router-link>
    </div>

    <div class="navbar-end">
      <router-link to="/login">
        <button class="btn btn-ghost btn-circle">
          <i-ph-user-bold></i-ph-user-bold>
        </button>
      </router-link>

      <router-link to="/cart">
        <button class="btn btn-ghost hover:btn-circle">
          <div class="indicator">
            <i-ph-shopping-cart-bold></i-ph-shopping-cart-bold>
            <span class="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
import { useHttpStore } from '@/stores/httpStore.js'
export default {
  setup(){
    const httpStore = useHttpStore()

    return { httpStore }
  }
}
</script>

<style scoped>

</style>