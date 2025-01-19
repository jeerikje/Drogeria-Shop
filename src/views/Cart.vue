<script lang="ts">
import { mapState, mapActions } from "pinia";
import { useCartStore } from "@/stores/CartStore.ts";

export default {
  name: "CartPage",
  computed: {
    ...mapState(useCartStore, ["cart", "totalPrice"]),
  },
  methods: {
    ...mapActions(useCartStore, ["increment", "decrement", "removeFromCart"]),
  },
};
</script>

<template>
  <p>Celkova cena: {{ totalPrice.toFixed(2) }}€</p>
  <div v-for="item in cart" :key="item.id" class="cart-item">
    <img :src="item.image" :alt="item.name" class="cart-item-image" />
    <span>{{ item.name }}</span>
    <span>€{{ (item.price * item.quantity).toFixed(2) }}</span>
    <div>
      <button @click="decrement(item.id)">-</button>
      <span>{{ item.quantity }}</span>
      <button @click="increment(item.id)">+</button>
    </div>
    <button @click="removeFromCart(item.id)">Remove</button>
  </div>
</template>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 12px;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
}

.cart-item:hover {
  background-color: #f1f1f1;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.cart-item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
}

.cart-item span:first-child {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  flex-grow: 1;
}

.cart-item span:nth-child(2) {
  font-size: 1.1rem;
  font-weight: 600;
  color: #007bff;
  margin-right: 15px;
}

.cart-item div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

button {
  padding: 5px 10px;
  font-size: 1rem;
  border: 1px solid #007bff;
  background-color: #fff;
  color: #007bff;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 0 5px;
}

button:hover {
  background-color: #007bff;
  color: white;
}

p {
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 150px;
  color: #000000;
}
</style>
