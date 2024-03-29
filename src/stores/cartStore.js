// cartStore.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    totalItems: JSON.parse(localStorage.getItem('cartTotalItems')) || 0,
    totalCost: JSON.parse(localStorage.getItem('cartTotalCost')) || 0,
  }),
  getters: {
    formatedTotalCost: (state) => Math.round((state.totalCost + Number.EPSILON) * 100) / 100,
    currentCart(){
      return this.items
    }
  },
  actions: {
    persistToLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.items))
      localStorage.setItem('cartTotalItems', JSON.stringify(this.totalItems))
      localStorage.setItem('cartTotalCost', JSON.stringify(this.totalCost))
    },
    addItem(item) {
      let targetItem = this.items.find((currItem) => currItem.item.id === item.id)
      if (targetItem) {
        targetItem.count += 1
      } else {
        this.items.push({ item, count: 1 })
      }
      this.totalItems += 1
      this.totalCost = Math.round((this.totalCost + item.price + Number.EPSILON) * 100) / 100
      // this.totalCost += item.price
      this.persistToLocalStorage()
    },
    removeItem(item) {
      let targetItem = this.items.find(currItem => currItem.item.id === item.id)
      if (targetItem.count === 1) {
        this.items = this.items.filter(currItem => currItem.item.id !== item.id)
      } else {
        targetItem.count -= 1
      }
      this.totalItems -= 1
      this.totalCost = Math.round((this.totalCost - item.price + Number.EPSILON) * 100) / 100
      // this.totalCost += item.price

      this.persistToLocalStorage()
    }
  }
})
