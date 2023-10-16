<script setup lang="ts">
import { subscriptionService,prostpectService } from '@/_services';
import Popup from '@/@core/components/features/Popup.vue';
import ToastMesssage from '@/@core/components/features/ToastMesssage.vue'
import { useActivatePopupStore } from '@/store/activatePopup';

const toast = ref({
  show: false,
  text: '',
  color: '',
});

const prostpects: any[] = reactive([]);
const subscriptions = [30,60, 90, 120,150, 180,210,240, 270, 300, 330,360];

const showCreateDialog = ref(false);


const form = reactive({
  prospect:"",
  subscription_month:30,
  expired_date:"2022-10-10",
  formErrors:{
    prostpect:false,
  subscription_month: false,

  }
});


let page = ref(1);
const limit = 5;
 const getEl =()=>{
  const offset = (page.value - 1) * limit;
  const filter =`?limit=${limit}&offset=${offset}`
  prostpectService.getProstpects(filter)
      .then((res:{data: any}) => {
        const data = res.data.results;

        for (let i = 0; i < data.length; i++) {
        prostpects.push({state:data[i].username,abbr:data[i].id});
        }
        console.log(res)
    })
  };

watch(
     () =>  useActivatePopupStore().openCreate,
     (value) =>{
      showCreateDialog.value = value;
      if(value==true)
        getEl();
    }
)

const closeCreateDialog = () => {
  useActivatePopupStore().changeOpenCreate(false)
};


/**
 * edit one prospect elmement
 * @param form
 */
 const createSubscription = ()=>{

  subscriptionService.createSubscritpion(form)
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
    if(error.response.data['prostpect']){

        form.formErrors.prostpect = true;
        toast.value = {
        show: true,
        text: error.response.data['prostpect'],
        color: 'error',
        };
        }else{

        form.formErrors.prostpect = false;

        }
        if(error.response.data['subscription_month']){

          form.formErrors.subscription_month = true;
          toast.value = {
          show: true,
          text: error.response.data.Errors['subscription_month'],
          color: 'error',
          };
          }else{

          form.formErrors.subscription_month = false;

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
        <VForm @submit.prevent="createSubscription">
            <VCard>

              <VCol cols="12" md="12">
            <VSelect
            label="prostpect"
            :items="prostpects"
            item-title="state"
            item-value="abbr"
            persistent-hint
            single-line
              v-model="form.prospect"
                :error="form.formErrors.subscription_month"
                />
            </VCol>
            <VCol cols="12" md="12">
            <VSelect  label="prostpect" :items="subscriptions"
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
