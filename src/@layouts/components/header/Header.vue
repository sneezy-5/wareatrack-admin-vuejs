<script lang="ts" setup>
import { useVIsibleStore } from '@/store/activateSide';
import UserProfile from '@/layouts/default/UserProfile.vue'

interface sidebarPropType{
  open:boolean,
  setChange:()=>void,
}

const props = withDefaults(defineProps<sidebarPropType>(), {
})

// const setChange = ()=>{
//   const visibleStore = useVIsibleStore()
//   visibleStore.changeVisible(true)
//   console.log(visibleStore.visible)
// }

// const isVisible = ref(false)
// watch(
//   () =>useVIsibleStore().visible,
//   (newvalue) => {
//    isVisible.value = newvalue
//   })
const isOpen = ref(true)
watch(
     () => props.open,
     (value) =>{
      isOpen.value = value
    }
)
</script>

<template>
  <v-col >
    <v-toolbar
    style="background-color: #ffffff;"

    >
    <v-app-bar-nav-icon  class="ms-n3 d-lg-none " variant="text" @click.stop="setChange"></v-app-bar-nav-icon>
     <!-- <v-btn   class="ms-n3 d-lg-none " @click="props.setChange" icon="mdi-menu"   variant="text"></v-btn> -->

     <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <UserProfile/>
    </v-toolbar>
  </v-col>




</template>

<style lang="scss">

.header{
  position: relative;
  left: 100px;
  width: 1000px;
 // background: blue;
  //right: 50px;
}

</style>
