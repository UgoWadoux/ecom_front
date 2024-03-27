import { defineStore } from 'pinia'
import axios from 'axios'

// axios.defaults.baseURL = import.meta.env.VITE_FAKESTORE_URL
axios.defaults.baseURL = import.meta.env.VITE_API_URL
// axios.defaults.withCredentials = true
// axios.defaults.withXSRFToken = true
export const useHttpStore = defineStore({
  id: 'http',
  state:()=>({
    products:null,
    product:null
  }),
  actions:{
    async getProducts(){
      try{
        let response = await axios.get('/products')
        this.products = response.data.products
        return this.products
      }catch (error){
        console.log(error)
      }
    },
    async getProduct(id){
      try {
        let response = await axios.get('/products/'+id)
        this.product = response.data.product
        return this.product
      }catch (error){
        console.log(error)
      }
    },
    async register(userData){
      try {
        let response = await axios.post('/register', userData)
        return response
      }catch (error){
        console.log(error)
      }
    }
  }
})



