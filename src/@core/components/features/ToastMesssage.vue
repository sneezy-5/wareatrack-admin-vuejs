

<script lang="ts" setup>

// const toast = ref({
//   show: false,
//   text: '',
//   color: '',
// });


interface ToastPropType{
  toast:{
    show:boolean,
    text:string,
    color:string,
  }
}
const props = withDefaults(defineProps<ToastPropType>(), {
})



</script>

<template>

   <!--shoxw toats message-->
 <VSnackbar
      v-model="props.toast.show"
      :timeout="3000"
      :color="props.toast.color"
      top='top' >
    {{ props.toast.text }}
    <template #action="{ attrs }">
      <VBtn text v-bind="attrs" @click="props.toast.show = false">
        <VIcon>mdi-close</VIcon>
      </VBtn>
    </template>
  </VSnackbar>
</template>
