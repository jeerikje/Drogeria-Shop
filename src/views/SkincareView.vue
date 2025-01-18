<script>
import NovinkyProdukty from "@/components/NovinkyProdukty.vue";
import {mapActions, mapState} from "pinia";
import {useCartStore} from "@/stores/CartStore.ts";
import Footer from '@/components/Footer.vue'

export default {
  name: "SkincareView",
  components: {NovinkyProdukty,Footer},
  computed: {
    ...mapState(useCartStore, {
      skincareProducts: (state) => state.products.skincare,
    }),
  },
  methods: {
    ...mapActions(useCartStore, ["addToCart"]),
    addToCartSkincare(product) {
      this.addToCart(product, "skincare");
    },
  }
}
</script>

<template>
  <div class="products-container">
    <h1>Zdravie produkty</h1>
    <div v-if="skincareProducts.length" class="products">
      <NovinkyProdukty
          v-for="produkt in skincareProducts"
          :key="produkt.id"
          :product="produkt"
          @addToCart="addToCartSkincare"
      />
    </div>
  </div>
  <Footer/>
</template>

<style scoped>
.products-container {
  font-family: 'Arial', sans-serif;
  text-align: center;
  color: #333;
  background: linear-gradient(120deg, #e3f2fd, #ffffff);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  padding: 20px;
}
</style>