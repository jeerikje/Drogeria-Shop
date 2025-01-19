<script lang="ts">
export default {
  name: "Produkty",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
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
.product-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(31, 38, 135, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: contain;
  border-radius: 0.5rem;
  background-color: transparent;
  margin-bottom: 1rem;
}

.product-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0.5rem 0;
  color: #333;
}

.product-card p {
  font-size: 1rem;
  font-weight: bold;
  color: #007bff;
  margin: 0.5rem 0;
}

.quantity-info {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: #666;
}

.add-to-cart-btn {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  background: rgba(40, 167, 69, 0.8);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  cursor: pointer;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover {
  background: rgba(40, 167, 69, 0.9);
  transform: scale(1.05);
}

.add-to-cart-btn:disabled {
  background: rgba(108, 117, 125, 0.8);
  cursor: not-allowed;
}

.products-container h1 {
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}


</style>
