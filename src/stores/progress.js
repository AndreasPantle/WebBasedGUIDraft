import {defineStore} from 'pinia';

export const useProgressStore = defineStore('progress', {
  state: () => ({
    progressApplication: false,
    progressRequest: false,
  }),

  getters: {
    getProgressApplication(state) {
      return state.progressApplication;
    },

    getProgressRequest(state) {
      return state.progressRequest;
    },
  },

  actions: {
    progressApplicationEnable() {
      this.progressApplication = true;
    },

    progressApplicationDisable() {
      this.progressApplication = false;
    },

    progressRequestEnable() {
      this.progressRequest = true;
    },

    progressRequestDisable() {
      this.progressRequest = false;
    },
  },
});
