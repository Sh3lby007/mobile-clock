<script setup>
import { ref } from "vue";

const showMenu = ref(false);
</script>

<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <!-- Most left side of navbar -->
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

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="showMenu = !showMenu"
        :class="{ 'is-active': showMenu }"
      >
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <!-- Most right side of navbar -->
    <div
      class="navbar-menu is-active has-text-right"
      :class="{ 'is-active': showMenu }"
    >
      <div @click="showMenu = false" class="navbar-end">
        <router-link to="/" class="navbar-item">Clock</router-link>
        <router-link to="/Timer" class="navbar-item">Timer </router-link>
        <router-link to="/Settings" class="navbar-item">Settings</router-link>

        <a class="navbar-item" href="https://github.com/Sh3lby007/mobile-clock"
          >Github</a
        >
      </div>
    </div>
  </nav>
</template>
