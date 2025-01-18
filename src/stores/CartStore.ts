import { defineStore } from 'pinia';
import MuziProducts from '@/stores/MuziProducts.json';
import ZenyProducts from '@/stores/ZenyProducts.json';
import detiProducts from '@/stores/detiProducts.json';
import zdravieProducts from '@/stores/ZdravieProducts.json';
import zvierataProducts from '@/stores/zvierataProducts.json';

import darcekyProducts from '@/stores/darceky.json'
import parfumyProducts from '@/stores/parfumy.json'
import kozmetikaProducts from '@/stores/kozmetika.json'
import skincareProducts from '@/stores/skincare.json'

const MAX_CART_QUANTITY = 10;

export const useCartStore = defineStore('CartStore', {
  state: () => ({
    products: {
      muzi: MuziProducts,
      zeny: ZenyProducts,
      deti: detiProducts,
      zdravie: zdravieProducts,
      zvierata: zvierataProducts,
      parfumy: parfumyProducts,
      darceky: darcekyProducts,
      kozmetika: kozmetikaProducts,
      skincare: skincareProducts,
    },
    cart: [],
  }),

  getters: {
    totalPrice: (state) => state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0),

    getProduct: (state) => (type, productId) => {
      const productList = state.products[type];
      return productList?.find((product) => product.id === productId);
    }
  },

  actions: {
    addToCart(product, type) {
      const productInProducts = this.getProduct(type, product.id);

      if (!productInProducts || productInProducts.maxAmount <= 0) return;

      this.$patch((state) => {
        const existingItem = state.cart.find((item) => item.id === product.id);

        if (existingItem) {
          const availableStock = productInProducts.maxAmount;
          if (existingItem.quantity < MAX_CART_QUANTITY && availableStock > 0) {
            existingItem.quantity++;
            productInProducts.maxAmount--;
            existingItem.maxAmount = productInProducts.maxAmount;
          }
        } else {
          state.cart.push({
            ...product,
            quantity: 1,
            type,
            maxAmount: productInProducts.maxAmount - 1
          });
          productInProducts.maxAmount--;
        }
      });
    },

    removeFromCart(productId, type) {
      const cartItem = this.cart.find((item) => item.id === productId);
      if (!cartItem) return;

      const productType = type || cartItem.type;
      const product = this.getProduct(productType, productId);

      if (product) {
        product.maxAmount += cartItem.quantity;
      }

      this.cart = this.cart.filter((item) => item.id !== productId);
    },

    increment(productId) {
      const cartItem = this.cart.find((item) => item.id === productId);
      if (!cartItem) return;

      const product = this.getProduct(cartItem.type, productId);
      if (!product) return;

      if (cartItem.quantity < MAX_CART_QUANTITY && product.maxAmount > 0) {
        cartItem.quantity++;
        product.maxAmount--;
      }
    },

    decrement(productId) {
      const cartItem = this.cart.find((item) => item.id === productId);
      if (!cartItem) return;

      const product = this.getProduct(cartItem.type, productId);
      if (!product) return;

      if (cartItem.quantity > 1) {
        cartItem.quantity--;
        product.maxAmount++;
      } else {
        this.removeFromCart(productId, cartItem.type);
      }
    }
  },
});