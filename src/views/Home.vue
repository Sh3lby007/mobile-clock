<!-- 
1. Get the time now from JavaScript
2. Get the time and display it into a box
3. Show the box to display it in
4. Make the time change every second  -->

<script setup>
import { ref } from "vue";

let time = ref(new Date());
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;


const interval = setInterval(function () {
  time.value = new Date();
}, 1000);

// in settings page, add button to click back to home page
// in settings page, add a select dropdown for user to choose type of date/time display they want
//     for the above selection, save the data into pinia store
</script>

<template>
  <div class="columns is-mobile is-centered is-multiline">
    <div class="column is-full">
      <h1 class="title has-text-weight-normal">
        {{ timeZone }}
      </h1>
    </div>

    <div class="column is-full">
      <h1 class="title has-text-weight-normal">
        {{
            new Intl.DateTimeFormat("default", {
              day: "2-digit",
              weekday: "long",
              month: "long",
              year: "numeric",
            }).format(time)
        }}
      </h1>
    </div>

    <div class="column is-full">
      <div class="box has-text-centered">
        <h1 class="title has-text-weight-normal">
          {{ time.toLocaleTimeString() }}
        </h1>
      </div>
    </div>
  </div>
</template>
