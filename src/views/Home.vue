<!-- 
1. Get the time now from JavaScript
2. Get the time and display it into a box
3. Show the box to display it in
4. Make the time change every second  -->

<script setup>
import { ref } from "vue";

let time = ref(new Date());

setInterval(function () {
  time.value = new Date();
}, 1000);

// in settings page, add button to click back to home page
// in settings page, add a select dropdown for user to choose type of date/time display they want
//     for the above selection, save the data into pinia store
</script>

<template>
  <div class="columns is-mobile is-centered">
    <div class="column is-half">
      <div class="box">
        {{ time }}
      </div>
    </div>
  </div>
</template>
