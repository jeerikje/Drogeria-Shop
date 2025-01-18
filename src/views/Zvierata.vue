<script lang="ts">
import { mapState, mapActions } from "pinia";
import { useCartStore } from "@/stores/CartStore.ts";

import Produkty from "@/components/Produkty.vue";
import banner from '@/components/banner.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "zvierata",
  components: {Produkty,banner,Footer},
  data(){
    return {
      bannerImage: "/src/assets/Obrazky/AnimalBanner.png",
      bannerText: "Vyberte si z našej ponuky kvalitných krmív pre vašich miláčikov, ktoré spĺňajú všetky ich nutričné potreby."
    }
  },
  computed: {
    ...mapState(useCartStore, {
      zvierataProducts: (state) => state.products.zvierata,
    }),
  },
  methods: {
    ...mapActions(useCartStore, ["addToCart"]),

    addToCartZvierata(product) {
      this.addToCart(product, "zvierata");
    },
  },
};
</script>

<template>
  <banner :bannerImage="bannerImage" :bannerText="bannerText"/>
  <div class="products-container">
    <h1>Chovateľské potreby</h1>
    <div v-if="zvierataProducts.length" class="products">
      <Produkty
          v-for="produkt in zvierataProducts"
          :key="produkt.id"
          :product="produkt"
          @addToCart="addToCartZvierata"
      />
    </div>
  </div>
  <Footer/>
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


