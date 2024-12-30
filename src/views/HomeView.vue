<script>
export default {
  name: "HomeView",
  methods: {
    registracia(){
      this.$router.push("/registracia");
    },
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
  <div class="homepage-container">
    <section class="hero-banner">
      <div class="hero-content">
        <h1>Srdečne vás vítame na našej stránke! Sme šťastní, že ste tu s nami.</h1>

        <p>Objavte tie najlepšie produkty pre vás, vaše telo a vašu pokožku..</p>
        <button @click="registracia" class="shop-now-btn">Zaregistruj sa!</button>
      </div>
    </section>

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

    <section class="cta-section">
      <h2>Exclusive Offers Just for You</h2>
      <p>Sign up now and get 10% off your first order!</p>
      <button class="sign-up-btn">Sign Up</button>
    </section>
  </div>
</template>
<style>
.homepage-container {
  font-family: Arial, sans-serif;
}

.hero-banner {
  background-image: url('/src/assets/Obrazky/banner.png');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 5rem 3rem;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.shop-now-btn {
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.shop-now-btn:hover {
  background-color: #0056b3;
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

.cta-section {
  background-color: #28a745;
  color: white;
  text-align: center;
  padding: 2rem 1rem;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.sign-up-btn {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  background-color: white;
  color: #28a745;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.sign-up-btn:hover {
  background-color: #218838;
  color: white;
}

</style>
