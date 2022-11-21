<script setup>
import { useStore } from "../stores/counter";

const timeStore = useStore();
</script>

<template>
  <div class="container is-fullhd">
    <div class="section py-o">
      <div class="columns is-mobile is-centered is-multiline is-desktop">
        <div class="column is-full">
          <div class="box">Version</div>
        </div>

        <div class="column is-full">
          <div class="box">Stay Awake</div>
        </div>

        <div class="column is-full">
          <div class="box">High Frequency</div>
        </div>

        <div class="column is-full">
          <div class="box">
            Choose Time format
            <div class="select is-primary is-fullwidth">
              <select
                v-model="timeStore.settings.displayStyle"
                name="displayStyle"
              >
                <option :value="1">Time Only</option>
                <option :value="2">Short Date and Time</option>
                <option :value="3">Full Date and Time</option>
              </select>
            </div>
          </div>
        </div>

        <div class="column is-full">
          <div class="box">Check against network clock</div>
        </div>
        <div class="column is-full">
          <button
            @click="$router.push('/')"
            class="button is-primary is-large is-fullwidth is-responsive"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
