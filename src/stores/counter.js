import { defineStore } from "pinia";

export const useStore = defineStore("home", {
  state: () => ({
    settings: {
      displayStyle: 2,
    },
  }),
});
