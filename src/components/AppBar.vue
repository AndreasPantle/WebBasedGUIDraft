<template>
  <div>
    <v-app-bar flat color="primary">
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="storeNavigation.setNavigationDrawerVisible"
      />
      <v-app-bar-title>WebBasedGUIDraft</v-app-bar-title>
      <v-spacer />
      <v-btn
        :prepend-icon="mdiMemory"
        class="me-4"
        :active="storeNavigation.getActualComponent === 'Area1'"
        @click="storeNavigation.setComponent('Area1')"
      >
        Area 1
      </v-btn>
      <v-btn
        :prepend-icon="mdiCog"
        class="me-4"
        :active="storeNavigation.getActualComponent === 'Area2'"
        @click="storeNavigation.setComponent('Area2')"
      >
        Area 2
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
/* Stores */
import { useNavigationStore } from "@stores/nav";

/* Icons */
import { mdiMemory, mdiCog } from "@mdi/js";

export default {
  name: "AppBar",
  setup() {
    const storeNavigation = useNavigationStore();
    return {
      storeNavigation,
      mdiMemory,
      mdiCog,
    };
  },
};
</script>

<style scoped></style>
