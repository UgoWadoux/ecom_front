<template>
  <!-- component -->
  <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="mb-8 text-3xl font-roboto text-center">Sign up</h1>
        <input
          v-model="name"
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="fullname"
          placeholder="Full Name" />

        <input
          v-model="email"
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email" />

        <input
          v-model="address"
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="address"
          placeholder="Address" />

        <input
          v-model="password"
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="password"
          placeholder="Password" />
        <input
          v-model="passwordConfirmation"
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="confirm_password"
          placeholder="Confirm Password" />

        <button
          @click="registerAction"
          type="submit"
          class="w-full text-center py-3 rounded btn btn-primary   text-white hover:bg-green-dark focus:outline-none my-1"
        >Create Account
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
        Already have an account?
        <router-link to="/login">

          <a class="no-underline border-b border-blue text-blue">
            Log in
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useHttpStore } from '@/stores/httpStore.js'
export default {
  data() {
    return {
      name: '',
      email: '',
      address: '',
      password: '',
      passwordConfirmation: '',
      isSubmit: false
    }
  },
  methods: {
    async registerAction() {
      let userData, user
      const httpStore = useHttpStore()

      userData = {
        name: this.name,
        email: this.email,
        address: this.address,
        password: this.password ,
        password_confirmation: this.passwordConfirmation
      }
      this.isSubmit = true

      user = await httpStore.register(userData)
      console.log(user)
    }
  }
}
</script>