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

interface editProspectPropType{
  id: number;
}
const props = withDefaults(defineProps<editProspectPropType>(), {
})




const showCreateDialog = ref(false);


const form = reactive({
  id:null,
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

/**
 * get prospect data by id
 * @param props.id
 */
const getEl =()=>{
  prostpectService.getProstpect(props.id)
      .then((res:{data: any}) => {
        console.log(res.data)
    form.id =res.data.id
    form.username = res.data.username;
    form.email = res.data.email;
    form.contact = res.data.contact,
        console.log(res)
    })

}


watch(
     () =>  useActivatePopupStore().openEdit,
     (value) =>{
      showCreateDialog.value = value;
      if(value==true)
        getEl();

    }
)

const closeCreateDialog = () => {
  useActivatePopupStore().changeOpenEdit(false)
};




/**
 * edit one prospect elmement
 * @param form
 */

const editProstpect = ()=>{

  prostpectService.updateProstpect(form)
      .then((res: { data: { results: any; }; }) => {
        // showCreateDialog.value = false;
        useActivatePopupStore().changeOpenEdit(false)
        toast.value = {
          show: true,
          text: 'Modifié avec susccès',
          color: 'success',
          };
        console.log(res)
    })
    .catch((error: { status: number; response:any}) => {
      if(error.response.data['username']){

          form.formErrors.username = true;
          toast.value = {
          show: true,
          text: error.response.data['username'],
          color: 'error',
          };
          }else{

          form.formErrors.username = false;

          }
          if(error.response.data['email']){

            form.formErrors.email = true;
            toast.value = {
            show: true,
            text: error.response.data['email'],
            color: 'error',
            };
            }else{

            form.formErrors.email = false;

            }

            if(error.response.data['contact']){

            form.formErrors.contact = true;
            toast.value = {
            show: true,
            text: error.response.data['contact'],
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

  <!-- TODO ajouter le skelton de de chargment pour  la popup de form -->
    <!-- popu de  creation des prostpects-->
    <Popup :open="showCreateDialog" title="Editer" >
      <template #container>
        <VForm @submit.prevent="editProstpect">
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
