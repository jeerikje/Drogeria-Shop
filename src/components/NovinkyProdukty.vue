<script lang="ts">
export default {
  name: "NovinkyProdukty",
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
.products-container h1 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #34495e;
  text-transform: uppercase;
  letter-spacing: 3px;
  border-bottom: 4px solid #bc1a1a;
  display: inline-block;
  padding-bottom: 8px;
}

.product-card {
  background: linear-gradient(
      135deg,
      #ead1dc,
      #d5a6bd,
      #c27ba0,
      #a64d79,
      #4c1130
  );
  border-radius: 16px;
  overflow: hidden;
  transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  max-height: 220px;
  object-fit: contain;
}

.product-card h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 12px;
}

.product-card p {
  font-size: 1.3rem;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 20px;
}

.quantity-info {
  font-size: 1rem;
  color: #00f4f4;
  margin-bottom: 20px;
}

.quantity-info .out-of-stock {
  color: #e74c3c;
  font-weight: bold;
}

.add-to-cart-btn {
  background: #1abc9c;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.add-to-cart-btn:hover {
  background: #16a085;
  transform: scale(1.05);
}

.add-to-cart-btn:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}
</style>
