<script>
export default {
  name: "Produkty",
  props: {
    product:{
      type:Object,
      required:true
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
.product-card {
  text-align: center;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: contain;
  border-radius: 0.5rem;
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
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.add-to-cart-btn:hover {
  background-color: #218838;
  transform: scale(1.05);
}

.add-to-cart-btn:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

</style>