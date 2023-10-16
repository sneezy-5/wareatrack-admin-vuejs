// paddingStore.ts
import { defineStore } from 'pinia';

export const useActivatePopupStore = defineStore('popup', {
  state: () => ({
    openCreate: false,
    openEdit: false,
  }),

  actions: {
    changeOpenCreate(value:boolean) {

      this.openCreate = value
    },
    changeOpenEdit(value:boolean) {

      this.openEdit = value
    },
  },
});
