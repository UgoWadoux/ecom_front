// cartStore.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: JSON.parse(localStorage.getItem('cartItems'))||[],
    totalItems:0,
    totalCost:0
  }),
  actions: {
    persistToLocalStorage(){
      localStorage.setItem('cartItems',JSON.stringify(this.items))
    },
    addItem(item) {
      let targetItem = this.items.find((currItem) => currItem.item.id === item.id)

      // console.log(item.id)
      //
      // console.log(targetItem)
      if (targetItem){
        targetItem.count+=1;
      }else {
        this.items.push({item, count:1});
      }
      this.totalItems += 1
      this.totalCost += item.price
      this.persistToLocalStorage()
    },
    removeItem(item) {
      let targetItem = this.items.find(currItem => currItem.item.id === item.id)
      if (targetItem.count ===  1) {
        this.items = this.items.filter(currItem => currItem.item.id !== item.id)
      } else {
        targetItem.count -=  1
      }
      this.totalItems -=  1
      this.totalCost -= item.price
      this.persistToLocalStorage()
      }
  }
})
