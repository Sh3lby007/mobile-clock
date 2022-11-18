<template>

  <div class="container is-fullhd">
    <div class="section py-o">
      <div class="columns is-mobile is-centered is-multiline is-desktop">
        <div class="column is-full">
          <div class="box">
            Version
          </div>
        </div>

        <div class="column is-full">
          <div class="box">
            Stay Awake
          </div>
        </div>

        <div class="column is-full">
          <div class="box">
            High Frequency
          </div>
        </div>

        <div class="column is-full">
          <div class="box">
            Choose Time format
            <div class="select is-primary is-fullwidth">
              <select>
                <option>Time Only</option>
                <option>Short Date and Time</option>
                <option>Date and Time</option>
              </select>
            </div>
          </div>
        </div>

        <div class="column is-full">
          <div class="box">
            Check against network clock
          </div>
        </div>
        <div class="column is-full">

          <button @click="$router.push('/')" class="button is-primary is-large is-fullwidth is-responsive">Home</button>
        </div>
      </div>
    </div>
  </div>

</template>


<script setup>

</script>


<style>

</style>
