<script lang="ts">
export default {
  name: "Theme",
  data() {
    return {
      currentTheme: "light",
    }
  },
  methods: {
    cycleTheme(){
      this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
      this.$emit("themeChanged", this.currentTheme);
    }
  }
}
</script>

<template>
  <div class="theme">
    <img src="@/assets/Obrazky/8208760.png" width="60" height="60"  alt="" @click="cycleTheme" class="themeImage"/>
  </div>
</template>

<style scoped>

.themeImage:hover{
  cursor: pointer;
}
</style>