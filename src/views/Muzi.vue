<script lang="ts">
import { mapState, mapActions } from "pinia";
import { useCartStore } from "@/stores/CartStore.ts";

import Produkty from "@/components/Produkty.vue";
import banner from "@/components/banner.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "muzi",
  components: { Produkty, banner, Footer },
  data() {
    return {
      bannerImage: "/src/assets/Obrazky/ManBanner.png",
      bannerText:
        "Ponúkame všetko, čo moderný muž potrebuje. Od kvalitných holiacich potrieb cez produkty o starostlivosť o telo a pleť",
    };
  },
  computed: {
    ...mapState(useCartStore, {
      muziProducts: (state) => state.products.muzi,
    }),
  },
  methods: {
    ...mapActions(useCartStore, ["addToCart"]),
    addToCartMuzi(product) {
      this.addToCart(product, "muzi");
    },
  },
};
</script>

<template>
  <banner :bannerImage="bannerImage" :bannerText="bannerText" />
  <div class="products-container">
    <h1>Pánska kozmetika a starostlivosť</h1>
    <div v-if="muziProducts.length" class="products">
      <Produkty
        v-for="produkt in muziProducts"
        :key="produkt.id"
        :product="produkt"
        @addToCart="addToCartMuzi"
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
