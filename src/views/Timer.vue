<script setup>
import { ref } from "vue";

let timeLeft = ref(60);

function interval() {
  if (timeLeft.value > 0) {
    timeLeft.value--;
  } else {
    clearInterval(interval);
  }
}

function countDown() {
  setInterval(interval, 1000);
}
</script>

<template>
  <div class="columns is-mobile is-multiline is-centered">
    <div class="column is-full">
      <h1 class="has-text-centered">Timer</h1>
      <h1 class="has-text-centered">{{ timeLeft }}</h1>
    </div>

    <div class="column">Hours box</div>
    <div class="column">Minutes box</div>
    <div class="column">Seconds box</div>

    <div class="column is-full">
      <button
        @click.once="countDown"
        class="button is-primary is-fullwidth is-responsive"
      >
        Start
      </button>
    </div>
  </div>
</template>
