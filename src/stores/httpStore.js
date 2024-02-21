import { defineStore } from 'pinia'
import axios from 'axios'
import { data } from 'autoprefixer'

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
        let data = await axios.get('/products')
        this.products = data.data
        return this.products
      }catch (error){
        console.log(error)
      }
    },
    async getProduct(id){
      try {
        let data = await axios.get(`/product/${id}`)
        this.product = data.data
        return this.product
      }catch (error){
        console.log(error)
      }
    }
  }
})



