<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
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
        <img src="@/assets/Obrazky/CartLogo.png" width="100" height="80"  alt=""/>
      </router-link>
    </div>
    </nav>
    <router-view />
  </div>
</template>

<style>

</style>
