<script setup>
import { ref } from 'vue'

let timeLeft = ref(60)

const countDown = setInterval(timer, 1000)

function timer() {
    if (timeLeft > 0) {
        timeLeft.value--
    } else {
        clearInterval(countDown)
    }
}


</script>

    
<template>
    <div class="timer">
        {{ timeLeft }}
    </div>
    <button @click="countDown" class="button is-primary is-fullwidth is-responsive">Start</button>
</template>
