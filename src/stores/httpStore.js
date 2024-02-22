import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_FAKESTORE_URL
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
        this.products = response.data
        return this.products
      }catch (error){
        console.log(error)
      }
    },
    async getProduct(id){
      try {
        let response = await axios.get('/products/'+id)
        this.product = response.data
        return this.product
      }catch (error){
        console.log(error)
      }
    }
  }
})



