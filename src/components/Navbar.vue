<script setup>
import { ref } from 'vue';

const showMenu = ref(false)
</script>

<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">

    <!-- Most left side of navbar -->
  <div class="navbar-brand">
    <a class="navbar-item" href="https://vuejs.org/">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="showMenu = !showMenu" :class="{'is-active': showMenu}">
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>

<!-- Most right side of navbar -->
<div class="navbar-menu is-active has-text-right" :class="{'is-active': showMenu}">
  <div class="navbar-end">
    <a class="navbar-item">Clock</a>
    <a class="navbar-item">Settings</a>
    <a class="navbar-item" href="https://github.com/Sh3lby007/mobile-clock">Github</a>
  </div>
</div>

</nav>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
