import {defineStore} from 'pinia';
import * as constants from '@/constants.js';
import {useProgressStore} from '@stores/progress.js';
import {useErrorStore} from '@stores/error.js';
import axios from 'axios';

/* URLs */
const urlDummy = 'https://dummyjson.com/';
const urlProducts = urlDummy + 'products/';

export const useDummyStore = defineStore('dummy', {
  state: () => ({
    products: null,
  }),

  getters: {
    getProducts(state) {
      if (state.products !== null) {
        return state.products;
      }

      return false;
    },
  },

  actions: {
    async apiGetProducts() {
      useProgressStore().progressRequestEnable();

      try {
        const response = await axios({
          method: 'get',
          url: urlProducts + '?delay=1500',
          timeout: __APP_TIMEOUT__,
        });

        useProgressStore().progressRequestDisable();

        // If (response.data[constants.API_STATUS] === true) {
        if (response.data) {
          /* The API returns the status entry with true. */
          // this.products = response.data[constants.API_MESSAGE];
          this.products = response.data;
        } else {
          /* The API returns the status entry with false or nothing. */
          this.products = null;
          // useErrorStore().setErrorFromResponse(response.data[constants.API_MESSAGE]);
        }
      } catch (error) {
        this.products = null;
        useErrorStore().setErrorFromResponse(error);
        useProgressStore().progressRequestDisable();
      }
    },
  },
});
