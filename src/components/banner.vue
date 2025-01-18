<script lang="ts">
export default {
  name: "banner",
  props: {
    bannerImage: {
      type: String,
      required: true
    },
    bannerText: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="banner">
    <img :src="bannerImage" alt="" class="banner-image" />
    <h1>{{ bannerText }}</h1>
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  margin: 0;
  padding: 0;
}

.banner-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
  display: block;
}

h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}
</style>