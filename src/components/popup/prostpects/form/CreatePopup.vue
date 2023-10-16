<script setup lang="ts">
import { prostpectService } from '@/_services';
import Popup from '@/@core/components/features/Popup.vue';
import ToastMesssage from '@/@core/components/features/ToastMesssage.vue'
import { useActivatePopupStore } from '@/store/activatePopup';
const toast = ref({
  show: false,
  text: '',
  color: '',
});




const subscriptions = [30,60, 90, 120,150, 180,210,240, 270, 300, 330,360]

const showCreateDialog = ref(false);


const form = reactive({
  username:"",
  email: "",
  password:"",
  subscription_month:30,
  contact:null,
  formErrors:{
    username:false,
    email: false,
  password: false,
  subscription_month: false,
  contact:false,
  }
})



watch(
     () =>  useActivatePopupStore().openCreate,
     (value) =>{
      showCreateDialog.value = value;
    }
)

const closeCreateDialog = () => {
  useActivatePopupStore().changeOpenCreate(false)
};




/**
 * edit one prospect elmement
 * @param form
 */
 const createProstpect = ()=>{

prostpectService.createProstpect(form)
    .then((res: { data: { results: any; }; }) => {
      // showCreateDialog.value = false;
      useActivatePopupStore().changeOpenCreate(false)
      toast.value = {
        show: true,
        text: 'Enregistré avec susccès',
        color: 'success',
        };
      console.log(res)
  })
  .catch((error: { status: number; response:any}) => {
    if(error.response.data.Errors['username']){

        form.formErrors.username = true;
        toast.value = {
        show: true,
        text: error.response.data.data['username'],
        color: 'error',
        };
        }else{

        form.formErrors.username = false;

        }
        if(error.response.data.Errors['email']){

          form.formErrors.email = true;
          toast.value = {
          show: true,
          text: error.response.data.Errors['email'],
          color: 'error',
          };
          }else{

          form.formErrors.email = false;

          }
          if(error.response.data.Errors['password']){

          form.formErrors.password = true;
          toast.value = {
          show: true,
          text: error.response.data.Errors['password'],
          color: 'error',
          };
          }else{

          form.formErrors.password = false;

          }
          if(error.response.data.Errors['contact']){

          form.formErrors.contact = true;
          toast.value = {
          show: true,
          text: error.response.data.data['contact'],
          color: 'error',
          };
          }else{

          form.formErrors.contact = false;

          }
          console.log(error)
         })
}




</script>

<template>

  <!-- show toast -->
  <ToastMesssage :toast="toast"/>

    <!-- popu de  creation des prostpects-->
    <Popup :open="showCreateDialog" title="Ajputer">
      <template #container>
        <VForm @submit.prevent="createProstpect">
            <VCard>
              <VCol cols="12" md="12">
                <VTextField label="usermane"
                v-model="form.username"
                :error="form.formErrors.username"
                />
            </VCol>
            <VCol cols="12" md="12">
              <VTextField label="email" type="email"
              v-model="form.email"
                :error="form.formErrors.email"
                />
            </VCol>
            <VCol cols="12" md="12">
              <VTextField label="contact" type="number"
              v-model="form.contact"
                :error="form.formErrors.contact"
                />
            </VCol>
            <VCol cols="12" md="12">
              <VTextField label="password" type="password"
              v-model="form.password"
                :error="form.formErrors.password"
                />
            </VCol>
            <VCol cols="12" md="12">
            <VSelect  label="Subscription" :items="subscriptions"
              v-model="form.subscription_month"
                :error="form.formErrors.subscription_month"
                />
            </VCol>
            </VCard>
           <VCol style="display: flex; align-items: center; justify-self: center; gap:6px">
            <VBtn type="submit" color="primary">Submit</VBtn>
            <VBtn @click="closeCreateDialog" color="error">Cancel</VBtn>
           </VCol>
        </VForm>

      </template>
    </Popup>

</template>

<style scoped>



</style>
