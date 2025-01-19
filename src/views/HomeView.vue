<script lang="ts">
import banner from "@/components/banner.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HomeView",
  components: { banner, Footer },
  data() {
    return {
      bannerImage: "/src/assets/Obrazky/banner.png",
      bannerText:
        "Vítajte v našej drogérii. U nás nájdete široký výber produktov pre každodennú hygienu, krásu a zdravie",
    };
  },
  methods: {
    parfumy() {
      this.$router.push("/parfumy");
    },
    kozmetika() {
      this.$router.push("/kozmetika");
    },
    skincare() {
      this.$router.push("/skincare");
    },
    darceky() {
      this.$router.push("/darceky");
    },
  },
};
</script>

<template>
  <banner :bannerImage="bannerImage" :bannerText="bannerText" />

  <section class="categories-section">
    <h2>Nezmeškajte naše novinky</h2>
    <div class="categories-grid">
      <div class="category-card">
        <img
          src="@/assets/Obrazky/parfum.png"
          alt="Perfume"
          @click="parfumy"
        />
        <h3>Parfumy</h3>
      </div>
      <div class="category-card">
        <img
          src="@/assets/Obrazky/kozmetika.jpg"
          alt="Cosmetics"
          @click="kozmetika"
        />
        <h3>Kozmetika</h3>
      </div>
      <div class="category-card">
        <img
          src="@/assets/Obrazky/skincare.jpg"
          alt="Skincare"
          @click="skincare"
        />
        <h3>Skincare</h3>
      </div>
      <div class="category-card">
        <img src="@/assets/Obrazky/darceky.png" alt="Gifts" @click="darceky" />
        <h3>Darčeky</h3>
      </div>
    </div>
  </section>
  <Footer />
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
  font-family: 'Playfair Display', serif;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.category-card {
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

.category-card:hover {
  transform: scale(1.05);
  cursor: pointer;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
}

.category-card img {
  width: 100%;
  height: 250px;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  object-fit: cover;
}

.category-card h3 {
  font-size: 1.2rem;
  color: #333;
}
h2{
  font-family: 'Playfair Display', serif;
}
</style>
