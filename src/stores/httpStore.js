import { defineStore } from 'pinia'
import axios from './axiosInstance.js'

// axios.defaults.baseURL = import.meta.env.VITE_FAKESTORE_URL
// axios.defaults.baseURL = import.meta.env.VITE_API_URL
// axios.defaults.withCredentials = true
// axios.defaults.withXSRFToken = true
export const useHttpStore = defineStore({
  id: 'http',
  state: () => ({
    products: null,
    product: null,
    user: null
  }),
  getters: {
    currentUser(){
      return this.user
    },
  },
  actions: {

    async getProducts() {
      try {
        let response = await axios.get('/products')
        this.products = response.data.products
        return this.products
      } catch (error) {
        console.log(error)
      }
    },

    async getProduct(id) {
      try {
         let response = await axios.get('/products/' + id)
        this.product = response.data.product
        return this.product
      } catch (error) {
        console.log(error)
      }
    },

    async register(userData) {
      try {
        return await axios.post('/register', userData)
      } catch (error) {
        console.log(error)
      }
    },
    async login(loginData) {
      try {
        let response = await axios.post('login', loginData)
        this.user = response.data.data.user
        let token = response.data.data.token
        // setting the token for future request
        axios.defaults.headers.common = {
          'Authorization': `Bearer ${token}`
        }
        return this.user
      } catch (error) {
        console.log(error)
      }
    },
    logout(){
      this.user = null
      // deleting the token
      delete axios.defaults.headers.common
    },
    async postOrder(orderData){
      let response = await axios.post('/orders', orderData)
      return response.data
    }
  }
})



