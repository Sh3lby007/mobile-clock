<script setup>
import { ref } from "vue";

const showMenu = ref(false);
</script>

<template>
  <!-- Hero header: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
        </router-link>
        <!--
    Using the v-on: directive to listen for the click event and toggle the data property showNav. Also, using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
        <div class="navbar-burger" @click="showMenu = !showMenu" :class="{ 'is-active': showMenu }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!--
    Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
      <div class="navbar-menu has-text-right" :class="{ 'is-active': showMenu }">
        <div class="navbar-end">

          <router-link to="/" class="navbar-item">Clock</router-link>
          <router-link to="/Timer" class="navbar-item">Timer </router-link>
          <router-link to="/Settings" class="navbar-item">Settings</router-link>
          <a class="navbar-item" href="https://github.com/Sh3lby007/mobile-clock">Github</a>

        </div>
      </div>
    </nav>
  </div>
</template>