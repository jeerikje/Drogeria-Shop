<script>
import Produkty from "@/components/Produkty.vue";
import {mapActions, mapState} from "pinia";
import {useCartStore} from "@/stores/CartStore.js";

export default {
  name: "DarcekyView",
  components: {Produkty},
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
      <Produkty
          v-for="produkt in darcekyProducts"
          :key="produkt.id"
          :product="produkt"
          @addToCart="addToCartDarceky"
      />
    </div>
  </div>
</template>

<style scoped>

</style>