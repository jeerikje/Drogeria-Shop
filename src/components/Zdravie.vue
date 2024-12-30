<script>
import { mapState, mapActions } from "pinia";
import { useCartStore } from "@/stores/CartStore";
import Produkty from "@/components/Produkty.vue";

export default {
  name: "zdravie",
  components: {Produkty},
  computed: {
    ...mapState(useCartStore, {
      zdravieProducts: (state) => state.products.zdravie,
    }),
  },
  methods: {
    ...mapActions(useCartStore, ["addToCart"]),
    addToCartZdravie(product) {
      this.addToCart(product, "zdravie");
    },
  },
};
</script>

<template>
  <div class="products-container">
    <h1>Zdravie produkty</h1>
    <div v-if="zdravieProducts.length" class="products">
      <Produkty
          v-for="produkt in zdravieProducts"
          :key="produkt.id"
          :product="produkt"
          @addToCart="addToCartZdravie"
      />
    </div>
  </div>
</template>

<style scoped>
.products-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
}
</style>


