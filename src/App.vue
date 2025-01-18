<script lang="ts">
import {RouterLink, RouterView} from "vue-router";
import Theme from '@/components/Theme.vue'

export default {
  name: "App",
  components: {RouterView, RouterLink,Theme},
  data() {
    return{
      currentTheme: "light",
    }
  },
  methods: {
    changeTheme(newTheme){
      this.currentTheme = newTheme;
      document.body.className = newTheme + '-theme';
    }
  }
}
</script>

<template>
    <nav id="nav">
      <div class="nav-left">
        <router-link to="/">
          <img src="@/assets/Obrazky/logo.png" width="80" height="80"  alt=""/>
        </router-link>
      </div>

      <div class="nav-center">
        <router-link to="/muzi">Muži</router-link>
        <router-link to="/zeny">Ženy</router-link>
        <router-link to="/deti">Deti</router-link>
        <router-link to="/zdravie">Zdravie</router-link>
        <router-link to="/zvierata">Zvieratá</router-link>
      </div>
      <div class="nav-right">
        <router-link to="/cart">
          <img src="@/assets/Obrazky/CartLogo.png" width="100" height="86"  alt=""/>
        </router-link>
      </div>
      <Theme @themeChanged="changeTheme"/>
    </nav>
    <router-view />
</template>

<style scoped>

</style>