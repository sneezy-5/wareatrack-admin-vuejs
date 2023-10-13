// paddingStore.ts
import { defineStore } from 'pinia';

export const usePaddingStore = defineStore('padding', {
  state: () => ({
    paddingValue: false,
  }),

  actions: {
    changePadding(value:boolean) {

      this.paddingValue = value
    },
  },
});
