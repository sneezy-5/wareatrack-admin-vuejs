<script lang="ts" setup>
import Sidebar from '@layouts/components/sidebar/Sidebar.vue'
import Header from '@layouts/components/header/Header.vue'
import { useVIsibleStore } from '@/store/activateSide';
import { usePaddingStore } from '@/store/changPadding';

const isVisible = ref(false)
// watch(
//   () =>useVIsibleStore().visible,
//   (value) => {
//     if (value == true){
//       openSidebar()
//     }else{
//       closeSidebar()
//     }
//   })

  const open = ref(false);

  // watch(
  //     () => usePaddingStore().paddingValue,
  //     (newValue) => {
  //       if( newValue=='100px'){
  //         isVisible.value = true;
  //       }else{
  //         isVisible.value = false
  //       }
  //       console.log(newValue)
  //     }
  //   );
const openSidebar = ()=>{
  open.value =true;
  useVIsibleStore().changeVisible(true);
};

const closeSidebar = ()=>{
  open.value = false;
  useVIsibleStore().changeVisible(false);
};



</script>


<template>


  <v-app  >

    <Sidebar :open="open"  :toggleIsOverlayNavActive="closeSidebar" />
    <v-main style=" position: absolute; right: 10px; width: 97%;"  >
      <Header :open="open" :setChange="openSidebar" />
      <router-view></router-view>
    </v-main>

  </v-app>




</template>


<style lang="scss" scoped>



</style>
