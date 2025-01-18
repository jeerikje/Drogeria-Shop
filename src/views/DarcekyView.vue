<script lang="ts">
import NovinkyProdukty from "@/components/NovinkyProdukty.vue";
import {mapActions, mapState} from "pinia";
import {useCartStore} from "@/stores/CartStore.ts";
import Footer from '@/components/Footer.vue'

export default {
  name: "DarcekyView",
  components: {NovinkyProdukty,Footer},
  computed: {
    ...mapState(useCartStore, {
      darcekyProducts: (state) => state.products.darceky,
    }),
  },
  methods: {
    ...mapActions(useCartStore, ["addToCart"]),
    addToCartDarceky(product) {
      this.addToCart(product, "darceky");
    },
  }
}
</script>

<template>
  <div class="products-container">
    <h1>Zdravie produkty</h1>
    <div v-if="darcekyProducts.length" class="products">
      <NovinkyProdukty
          v-for="produkt in darcekyProducts"
          :key="produkt.id"
          :product="produkt"
          @addToCart="addToCartDarceky"
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