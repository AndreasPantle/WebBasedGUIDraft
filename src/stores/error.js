import {defineStore} from 'pinia';
import clp from 'console-log-plus';
import * as constants from '@/constants.js';

export const useErrorStore = defineStore('error', {
  state: () => ({
    errorMessage: null,
    errorPrintToConsole: true,
  }),

  getters: {
    getError(state) {
      if (state.errorMessage === null) {
        return false;
      }

      return state.errorMessage;
    },
  },

  actions: {
    ackError() {
      /* Removes the given error. */
      this.errorMessage = null;
    },

    setErrorFromResponse(error) {
      if (error.response) {
        this.setError(error.response.status
        	+ '" -> "'
        	+ error.response.data[constants.API_MESSAGE]
        	+ '".');
      } else if (error.message && error.code) {
        this.setError('Can\'t get data from the backend: "'
        	+ error.message
        	+ '" -> "'
        	+ error.code
        	+ '". Is the backend running? / CORS activated?');
      } else {
        this.setError(error);
      }

      if (this.errorPrintToConsole === true) {
        clp({type: 'error', prefix: 'Error', message: this.errorMessage});
      }
    },

    setError(error) {
      if (this.errorMessage === null) {
        this.errorMessage = error;
      } else {
        this.errorMessage += '<br />' + error;
      }

      if (this.errorPrintToConsole === true) {
        clp({type: 'error', prefix: 'Error', message: this.errorMessage});
      }
    },

    setPrintToConsole() {
      this.errorPrintToConsole = !this.errorPrintToConsole;
    },
  },
});
