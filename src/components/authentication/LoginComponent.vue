<template>
  <div class="flex flex-col items-center ">

    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl font-roboto text-center">Se connecter</h1>


          <input
            v-model="email"
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email" />


          <input
            v-model="password"
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password" />


          <button
            @click="loginAction"
            type="submit"
            class="w-full text-center py-3 rounded btn btn-primary   text-white hover:bg-green-dark focus:outline-none my-1"
          >Connexion
          </button>

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Terms of Service
            </a> and
            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Privacy Policy
            </a>
          </div>
        </div>

        <div class="text-grey-dark mt-6">
          Pas encore de compte ?
          <router-link to="/register">

            <a class="no-underline border-b border-blue text-blue">
              Créer un compte
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>


</template>
<script>
import { useHttpStore } from '@/stores/httpStore.js'

export default {
  data() {
    return {
      email: null,
      password: null,
      isSubmit: false
    }
  },
  methods: {
    async loginAction() {
      let dataLogin, login
      const httpStore = useHttpStore()

      dataLogin = {
        email: this.email,
        password: this.password
      }
      this.isSubmit = true

      login = await httpStore.login(dataLogin)
      console.log(login)
    }
  }
}
</script>