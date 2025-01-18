<script lang="ts">

import banner from '@/components/banner.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: "HomeView",
  components: {banner,Footer},
  data(){
    return{
      bannerImage: "/src/assets/Obrazky/banner.png",
      bannerText: "Vítajte v našej drogérii. U nás nájdete široký výber produktov pre každodennú hygienu, krásu a zdravie"
    }
  },
  methods: {
    parfumy(){
      this.$router.push("/parfumy");
    },
    kozmetika(){
      this.$router.push("/kozmetika");
    },
    skincare(){
      this.$router.push("/skincare");
    },
    darceky(){
      this.$router.push("/darceky");
    }
  }
}

</script>

<template>
  <banner :bannerImage="bannerImage" :bannerText="bannerText"/>

    <section class="categories-section">
      <h2>Nezmeškajte naše novinky</h2>
      <div class="categories-grid">
        <div class="category-card">
          <img src="@/assets/Obrazky/parfumy.jpg" alt="Perfume" @click="parfumy">
          <h3>Parfumy</h3>
        </div>
        <div class="category-card">
          <img src="@/assets/Obrazky/kozmetika.jpg" alt="Cosmetics" @click="kozmetika">
          <h3>Kozmetika</h3>
        </div>
        <div class="category-card">
          <img src="@/assets/Obrazky/skincare.jpg" alt="Skincare" @click="skincare">
          <h3>Skincare</h3>
        </div>
        <div class="category-card">
          <img src="@/assets/Obrazky/darceky.png" alt="Gifts" @click="darceky">
          <h3>Darčeky</h3>
        </div>
      </div>
    </section>
  <Footer/>
</template>
<style>


.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.categories-section {
  padding: 2rem 1rem;
  text-align: center;
}

.categories-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.category-card {
  background: #f8f9fa;
  border-radius: 0.5rem;
  text-align: center;
  padding: 1rem;
  transition: transform 0.3s;
}

.category-card:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.category-card img {
  width: 100%;
  height: 250px;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

.category-card h3 {
  font-size: 1.2rem;
  color: #333;
}

</style>
