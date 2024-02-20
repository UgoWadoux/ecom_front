<template>
  <div class="navbar bg-base-100 flex justify-between">
    <div class="navbar-start w-auto">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">

          <i-ph-list-bold></i-ph-list-bold>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52">
          <li>
            <router-link to="/products">Produits</router-link>
          </li>
          <li>
            <router-link to="/services">Services</router-link>
          </li>
          <li><a>Blog</a></li>
          <li><a>Connexion</a></li>

        </ul>
      </div>
      <a class="" href="/"><img src="../assets/images/logo/logo_greenhub.webp" class="w-8"></a>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <i-ph-user-bold></i-ph-user-bold>
      </button>
      <router-link to="/cart">
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <i-ph-shopping-cart-bold></i-ph-shopping-cart-bold>
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import HomeView from '@/views/HomeView.vue'
import ProductList from '@/views/ProductList.vue'
</script>