<script setup>
import { ref } from "vue";
let seconds = ref(0);
let minutes = ref(0);
let hours = ref(0);
let timeLeft = ref(0);

// This intervalID will be randomnly generated for the clearinterval function to read, thus giving it a reactive data property because we require it to change and react in our function later to stop the timer
let intervalID = ref(undefined);

// Prepare this reactive variable as false as we want to use conditional rendering later in the if-else blocks.
let timerRunning = ref(false);

// This function is to be placed in a setInterval function to ensure that the seconds decreases every second and that once the seconds counter reaches 0, the timer should stop counting. This function should be called like this if interval() is to be called multiple times.
// function interval() {
//   if (timeLeft.value > 0) {
//     timeLeft.value--;
//   } else {
//     stopTimer();
//   }
// }

// Import sound for when time is up.
const timeUpAudio = new Audio(
  "http://soundbible.com/mp3/analog-watch-alarm_daniel-simion.mp3"
);
const timeTickingAudio = new Audio(
  "https://www.soundjay.com/clock/sounds/clock-ticking-4.mp3"
);

function countDown() {
  // A preliminary version to primitively add all the amount of seconds together for the timer to countdown properly. Aim to implement it to show 3 boxes which hours, minutes and seconds. Whereby every 60 seconds will minus 1 minute and every 60 mintes will minus 1 hour.
  timeLeft.value = seconds.value + minutes.value * 60 + hours.value * 3600;

  // Initial part to ensure that all the values are double digit
  hours.value = hours.value < 10 ? "0" + hours.value : hours.value;
  minutes.value = minutes.value < 10 ? "0" + minutes.value : minutes.value;
  seconds.value = seconds.value < 10 ? "0" + seconds.value : seconds.value;

  // In MDN web docs the setInterval function returns a random intervalID which identifies the timer created by the call to setInterval(); this value can be passed to clearInterval() to cancel the interval.
  intervalID.value = setInterval(() => {
    // If the timer completes, reset the timer value and stop the timer interval from running
    if (timeLeft.value <= 0) {
      timeUpAudio.play();
      timeTickingAudio.pause();
      alert("Time up!");
      resetTimer();
    } else {
      timeLeft.value--;
      timeTickingAudio.play();
    }

    // Number of seconds left before the end of the timer
    const currentSecondsLeft = timeLeft.value;

    const hoursLeft = Math.floor(currentSecondsLeft / 3600);
    hours.value = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;

    const minutesLeft = Math.floor(
      (currentSecondsLeft - hours.value * 3600) / 60
    );
    minutes.value = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;

    const secondsLeft =
      currentSecondsLeft - hours.value * 3600 - minutes.value * 60;
    seconds.value = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
  }, 1000);

  // Changes the value of the timer running to true to make the start butotn disappear and the stop and reset button appear.
  timerRunning.value = true;
}

function stopTimer() {
  // Since the clearInterval requires an intervalID to cancel the interval, we will use it here to tell the timer to stop counting down.
  clearInterval(intervalID.value);
  timeTickingAudio.pause();
  timerRunning.value = false;
}

// To improve user experience where all the input numbers and timeleft values are cleared once reset button is pressed.
function resetTimer() {
  stopTimer();
  timeLeft.value = 0;
  seconds.value = 0;
  minutes.value = 0;
  hours.value = 0;
}
</script>

<template>
  <div class="columns is-mobile is-multiline is-centered">
    <!-- Show this v-if block if the timer is running-->
    <div v-if="timerRunning" class="column is-full">
      <h1 class="has-text-centered">Timer</h1>
      <h1 class="has-text-centered">
        {{ hours }} : {{ minutes }} : {{ seconds }}
      </h1>
    </div>

    <div v-if="!timerRunning" class="column is-full">
      <div class="columns is-mobile is-centered">
        <!-- Using the v-model directive to bind the appropriate data to the respective number input boxes. -->
        <div class="column is-4">
          Hours
          <input type="number" v-model="hours" />
        </div>
        <div class="column is-4">
          Minutes
          <input type="number" v-model="minutes" />
        </div>
        <div class="column is-4">
          Seconds
          <input type="number" v-model="seconds" />
        </div>
      </div>
    </div>

    <div class="column is-full">
      <!-- Shows the start button when the timer is not running. When countDown function runs, it turns the timerRunning boolean value to true and this will disappear -->
      <button
        v-if="!timerRunning"
        @click="countDown"
        class="button is-success is-fullwidth is-responsive"
      >
        Start
      </button>
      <!-- When the timer starts running when countdown function is run, this will appear since it is in the v-if/else conditional rendering block. -->
      <button
        v-else
        @click="stopTimer"
        class="button is-warning is-fullwidth is-responsive"
      >
        Stop
      </button>
      <br />
      <button
        @click="resetTimer"
        class="button is-danger is-fullwidth is-responsive"
      >
        Reset
      </button>
    </div>
  </div>
</template>
