<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <br />

  <div class="section">
    <router-view />
  </div>
</template>
