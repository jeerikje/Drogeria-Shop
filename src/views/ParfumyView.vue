<script lang="ts">
import NovinkyProdukty from "@/components/NovinkyProdukty.vue";
import {mapActions, mapState} from "pinia";
import {useCartStore} from "@/stores/CartStore.ts";
import Footer from '@/components/Footer.vue'

export default {
  name: "ParfumyView",
  components: {NovinkyProdukty,Footer},
  computed: {
    ...mapState(useCartStore, {
      parfumyProducts: (state) => state.products.parfumy,
    }),
  },
  methods: {
    ...mapActions(useCartStore, ["addToCart"]),
    addToCartParfumy(product) {
      this.addToCart(product, "parfumy");
    },
  }
}
</script>

<template>
  <div class="products-container">
    <h1>Zdravie produkty</h1>
    <div v-if="parfumyProducts.length" class="products">
      <NovinkyProdukty
          v-for="produkt in parfumyProducts"
          :key="produkt.id"
          :product="produkt"
          @addToCart="addToCartParfumy"
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