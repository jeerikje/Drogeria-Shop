<script lang="ts">
import NovinkyProdukty from "@/components/NovinkyProdukty.vue";
import { mapActions, mapState } from "pinia";
import { useCartStore } from "@/stores/CartStore";
import Footer from "@/components/Footer.vue";

export default {
  name: "KozmetikaView",
  components: { NovinkyProdukty, Footer },
  computed: {
    ...mapState(useCartStore, {
      kozmetikaProducts: (state) => state.products.kozmetika,
    }),
  },
  methods: {
    ...mapActions(useCartStore, ["addToCart"]),
    addToCartKozmetika(product) {
      this.addToCart(product, "kozmetika");
    },
  },
};
</script>

<template>
  <div class="products-container">
    <h1>Kozmetika, ktorá zvýrazní vašu prirodzenú krásu a poskytne starostlivosť na profesionálnej úrovni.</h1>
    <div v-if="kozmetikaProducts.length" class="products">
      <NovinkyProdukty
        v-for="produkt in kozmetikaProducts"
        :key="produkt.id"
        :product="produkt"
        @addToCart="addToCartKozmetika"
      />
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.products-container {
  font-family: "Arial", sans-serif;
  text-align: center;
  color: #333;
  background: #d5a6bd;
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
h1{
  font-family: 'Playfair Display', serif;
}
</style>
