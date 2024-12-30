<script>
export default {
  name: "NovinkyProdukty",
  props: {
    product:{
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price.toFixed(2) }}€</p>
    <div class="quantity-info">
      <span v-if="product.maxAmount > 0">{{ product.maxAmount }} left</span>
      <span v-else class="out-of-stock">No more left</span>
    </div>
    <button
        @click="$emit('addToCart', product)"
        :disabled="product.maxAmount === 0"
        class="add-to-cart-btn"
    >
      Add to Cart
    </button>
  </div>
</template>

<style scoped>

</style>