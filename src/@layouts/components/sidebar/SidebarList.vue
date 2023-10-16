<script lang="ts" setup>
import { usePaddingStore } from '@/store/changPadding';
import sidebarItem from './sidebarItem';

const items = sidebarItem

const activeItem = null;

const isVisible = ref(false)

watch(
      () => usePaddingStore().paddingValue,
      (newValue) => {
        isVisible.value = newValue;

      }
    );
</script>

<template>
   <v-list dense
  >
        <v-list-item
          v-for="item in items"
          :key="item.name"
          :to="item.path"
          link
          class="list-item"
        >
          <div style="display: flex; flex-direction: row; ">
            <v-icon class="mr-4">{{ item.icon }}</v-icon>
            <v-list-item-title :class="{'d-none':isVisible}">{{ item.name }}</v-list-item-title>

          </div>
        </v-list-item>
    </v-list>
</template>

<style lang="scss" scoped>




.list-item{

  //border-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  height: 8px;
  color: #ffffff;
  // margin-left: 10px;
}
.v-list-item--active {
     background-color: rgb(99, 78, 221);
     width: 240px;
  }



</style>
