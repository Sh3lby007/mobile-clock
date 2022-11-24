<script setup>
import { ref } from "vue";

const showMenu = ref(false);

const toggleNav = () => (showMenu.value = !showMenu.value);
</script>

<template>
  <!-- Hero header: will stick at the top -->
  <nav class="navbar is-fixed-top">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="30"
          height="30"
        />
      </router-link>
      <!--
          Using the v-on: directive to listen for the click event and toggle the data property showMenu. Also, using the v-bind: directive to reactively update the class attribute 'is-active' based on the showMenu property.
        -->
      <div
        class="navbar-burger"
        @click="toggleNav"
        :class="{ 'is-active': showMenu }"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!--
        Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showMenu property.
      -->
    <div class="navbar-menu has-text-right" :class="{ 'is-active': showMenu }">
      <div class="navbar-end">
        <router-link to="/" class="navbar-item" @click="toggleNav">
          Clock
        </router-link>
        <router-link to="/Timer" class="navbar-item" @click="toggleNav">
          Timer
        </router-link>
        <router-link to="/Settings" class="navbar-item" @click="toggleNav">
          Settings</router-link
        >
        <a class="navbar-item" href="https://github.com/Sh3lby007/mobile-clock">
          Github
        </a>
      </div>
    </div>
  </nav>
</template>
