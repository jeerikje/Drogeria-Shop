<script lang="ts">
import { mapState, mapActions } from "pinia";
import { useCartStore } from "@/stores/CartStore.ts";

import Produkty from "@/components/Produkty.vue";
import banner from '@/components/banner.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "zeny",
  components: {Produkty,banner,Footer},
  data(){
    return {
      bannerImage: "/src/assets/Obrazky/WomanBanner.png",
      bannerText: "Objavte širokú ponuku produktov navrhnutých s ohľadom na jedinečné potreby každej ženy. Od pleti a vlasov cez telo až po očarujúce vône – máme všetko."
    }
  },
  computed: {
    ...mapState(useCartStore, {
      zenyProducts: (state) => state.products.zeny,
    }),
  },
  methods: {
    ...mapActions(useCartStore, ["addToCart"]),
    addToCartZeny(product) {
      this.addToCart(product, "zeny");
    },
  },
};
</script>

<template>
  <banner :bannerImage="bannerImage" :bannerText="bannerText"/>
  <div class="products-container">
    <h1>Pánska kozmetika a starostlivosť</h1>
    <div v-if="zenyProducts.length" class="products">
      <Produkty
          v-for="produkt in zenyProducts"
          :key="produkt.id"
          :product="produkt"
          @addToCart="addToCartZeny"
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


