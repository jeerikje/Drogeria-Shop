<script lang="ts">
import { mapState, mapActions } from "pinia";
import { useCartStore } from "@/stores/CartStore.ts";

import banner from "@/components/banner.vue";
import Produkty from "@/components/Produkty.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "deti",
  components: { Produkty, banner, Footer },
  data() {
    return {
      bannerImage: "/src/assets/Obrazky/KidBanner.png",
      bannerText:
        "Ponúkame produkty, ktoré sú bezpečné, dermatologicky testované. Pretože vieme, že starostlivosť o vaše deti je pre vás prioritou.",
    };
  },
  computed: {
    ...mapState(useCartStore, {
      detiProducts: (state) => state.products.deti,
    }),
  },
  methods: {
    ...mapActions(useCartStore, ["addToCart"]),
    addToCartDeti(product) {
      this.addToCart(product, "deti");
    },
  },
};
</script>

<template>
  <banner :bannerImage="bannerImage" :bannerText="bannerText" />
  <div class="products-container">
    <h1>Výbava pre bábätko</h1>
    <div v-if="detiProducts.length" class="products">
      <Produkty
        v-for="produkt in detiProducts"
        :key="produkt.id"
        :product="produkt"
        @addToCart="addToCartDeti"
      />
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.products-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
}

</style>
