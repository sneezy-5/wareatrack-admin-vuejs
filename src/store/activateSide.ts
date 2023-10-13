// paddingStore.ts
import { defineStore } from 'pinia';

export const useVIsibleStore = defineStore('activateAside', {
  state: () => ({
    visible: false,
  }),

  actions: {
    changeVisible(value:boolean) {
      this.visible = value;
    },
  },
});
