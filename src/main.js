import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

/* Vuetify */
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

const vuetify = createVuetify({
  defaults: {
    global: {
      ripple: false,
    },
  },
  theme: {
    defaultTheme: "light",
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

const pinia = createPinia();
const app = createApp(App);
app.use(vuetify);
app.use(pinia);
app.mount("#app");
