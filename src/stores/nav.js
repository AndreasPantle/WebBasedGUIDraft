import {defineStore} from 'pinia';

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    actualComponent: 'Area1',
    showNavigationDrawer: false,
  }),

  getters: {
    getSelectedComponent(state) {
      return state.actualComponent;
    },

    getNavigationDrawerVisible(state) {
      return state.showNavigationDrawer;
    },
  },

  actions: {
    setComponent(componentname) {
      this.actualComponent = componentname;
    },

    setNavigationDrawerVisible() {
      this.showNavigationDrawer = !this.showNavigationDrawer;
    },
  },
});
