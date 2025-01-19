<script lang="ts">
import { mapState, mapActions } from "pinia";
import { useCartStore } from "@/stores/CartStore.ts";

import Produkty from "@/components/Produkty.vue";
import banner from "@/components/banner.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "zdravie",
  components: { Produkty, banner, Footer },
  data() {
    return {
      bannerImage: "/src/assets/Obrazky/HealthBanner.png",
      bannerText:
        "Objavte širokú ponuku produktov na podporu vášho zdravia a pohody. Nájdete u nás vitamíny, minerály, doplnky stravy, produkty pre starostlivosť o telo, aj špeciálne riešenia na posilnenie imunity či regeneráciu.",
    };
  },
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
  <banner :bannerImage="bannerImage" :bannerText="bannerText" />
  <div class="products-container">
    <h1>Starostlivosť o zdravie</h1>
    <div v-if="zdravieProducts.length" class="products">
      <Produkty
        v-for="produkt in zdravieProducts"
        :key="produkt.id"
        :product="produkt"
        @addToCart="addToCartZdravie"
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
