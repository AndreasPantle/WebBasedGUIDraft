<template>
  <div>
    <v-app>
      <v-layout>
        <SystemBar />
        <AppBar />
        <v-main>
          <v-navigation-drawer
            v-model="onNavigationDrawerChange"
            temporary
          />
          <Transition
            name="fade"
            mode="out-in"
          >
            <component :is="storeNavigation.getSelectedComponent" />
          </Transition>
        </v-main>
      </v-layout>
      <v-snackbar
        :model-value="!!storeError.getError"
        color="error"
        vertical
        multi-line
        :icon="mdiAlertCircle"
        :timeout="-1"
      >
        <div class="text-h6">
          ERROR
        </div>
        <span v-html="storeError.getError" />
        <template #actions>
          <v-btn
            variant="tonal"
            :prepend-icon="mdiAlertCircle"
            block
            @click="storeError.ackError()"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <v-overlay
        :model-value="
          storeProgress.getProgressRequest ||
            storeProgress.getProgressApplication
        "
        class="align-center justify-center"
        persistent
      >
        <v-progress-circular
          indeterminate
          :size="128"
          :width="12"
        />
      </v-overlay>
    </v-app>
  </div>
</template>

<script>
/* Stores */
import { useErrorStore } from '@stores/error.js';
import { useProgressStore } from '@stores/progress.js';
import { useNavigationStore } from '@stores/nav';
import { useDummyStore } from '@stores/dummy.js';

/* Components */
import SystemBar from '@cmp/SystemBar.vue';
import AppBar from '@cmp/AppBar.vue';
import Area1 from '@cmp/Area1/Area1.vue';
import Area2 from '@cmp/Area2/Area2.vue';

/* Helpers */
import { sleep } from '@/helpers/sleeper.js';

/* Icons */
import { mdiAlertCircle } from '@mdi/js';

export default {
  name: 'WebBasedGUIDraft',
  components: {
    SystemBar,
    AppBar,
    Area1,
    Area2,
  },
  setup() {
    console.log('WebBasedGUIDraft: ' + __APP_VERSION__);
    console.log('App.vue: Setup!');
    const storeError = useErrorStore();
    const storeProgress = useProgressStore();
    const storeNavigation = useNavigationStore();
    const storeDummy = useDummyStore();
    storeDummy.apiGetProducts();
    return {
      storeError,
      storeProgress,
      storeNavigation,
      mdiAlertCircle,
    };
  },
  data() {
    return {};
  },
  computed: {
    onNavigationDrawerChange: {
      /* Because you can click outside the drawer: */
      get() {
        return this.storeNavigation.getNavigationDrawerVisible;
      },
      set(value) {
        this.storeNavigation.setNavigationDrawerVisible();
      },
    },
  },
  watch:{
    "storeNavigation.getSelectedComponent": {
      handler(newVal, oldVal) {
        console.log('App.vue: Watcher for getSelectedComponent triggered!', newVal, oldVal);
      },
    },
  },
  beforeCreate() {
    console.log('App.vue: Before Create!');
  },
  created() {
    console.log('App.vue: Created!');
  },
  beforeMount() {
    console.log('App.vue: Before Mount!');
  },
  mounted() {
    console.log('App.vue: Mounted!');
    /*this.storeProgress.progressApplicationEnable();
    sleep(1500).then(() => {
      this.storeProgress.progressApplicationDisable();
    });*/
  },
  beforeUpdate() {
    console.log('App.vue: Before Update!');
  },
  updated() {
    console.log('App.vue: Updated!');
  },
  beforeUnmount() {
    console.log('App.vue: Before Unmount!');
  },
  unmounted() {
    console.log('App.vue: Unmounted!');
  },
  errorCaptured(err, vm, info) {
    console.error('App.vue: Error Captured!', err, vm, info);
    this.storeError.setError(err.message);
    return false; // Prevents the error from propagating further
  },
  activated() {
    console.log('App.vue: Activated!');
  },
  deactivated() {
    console.log('App.vue: Deactivated!');
  },
  methods: {
  }, 
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
