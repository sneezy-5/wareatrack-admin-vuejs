<script setup lang="ts">
import { prostpectService } from '@/_services';
import TableSkelethon from '@/@core/components/features/TableSkelethon.vue'
import DeletePopup from '@/components/popup/DeletePopup.vue'
import CreatePopup from '@/components/popup/prostpects/form/CreatePopup.vue'
import ToastMesssage from '@/@core/components/features/ToastMesssage.vue'
import EditPopup from '@/components/popup/prostpects/form/EditPopup.vue';
import { useActivatePopupStore } from '@/store/activatePopup';
const toast = ref({
  show: false,
  text: '',
  color: '',
});

const desserts:any[] = reactive([]);
const loading = ref(false);

let deleteId = ref(0)
const showDialog = ref(false);

const openCreateDialog = () => {
  useActivatePopupStore().changeOpenCreate(true)};

const openEditDialog = (value:number) => {
  deleteId.value = value;
  useActivatePopupStore().changeOpenEdit(true)
};

//open delete dialog
const openDialog = (id:number) => {
  deleteId.value =id
  showDialog.value = true;
};

//close delete dialog
const closeDialog = () => {
  showDialog.value = false;
};

//get all data form database(api)
let page = ref(1);
const limit = 5;
const getAll =()=>{
  loading.value = true;
  const offset = (page.value - 1) * limit;
  const filter =`?limit=${limit}&offset=${offset}`
  prostpectService.getProstpects(filter)
      .then((res: { data: { results: any; }; }) => {
        const data = res.data.results

        desserts.pop()
        desserts.push(res.data)
        loading.value = false;

        console.log(filter, data, page.value)
    })
    .catch((error: { status: string; }) => {
            if(error.status ="401"){

                    console.error(error)

            }
            loading.value = false;
     })

}



watch(
     () =>  useActivatePopupStore().openCreate,
     (value) =>{

      if(value==false)
        getAll();

    }
)

watch(
     () =>  useActivatePopupStore().openEdit,
     (value) =>{

      if(value==false)
        getAll();

    }
)

const deleteProstpect = () => {
  prostpectService.deleteProstpect(deleteId.value)
      .then((res: { data: { results: any; }; }) => {
        getAll();
        toast.value = {
          show: true,
          text: 'Supprimsé avec susccès',
          color: 'success',
          };
    })
    .catch((error: { status: string; }) => {

     })

     showDialog.value = false;
};



onMounted(() => {
  getAll();
});

const numPages = computed(() => Math.ceil(desserts[0]?.count / 5));

</script>

<template>
   <!-- <div v-if="loading">Chargement en cours...</div> -->
      <VCol class="flex-end">
        <VBtn @click="openCreateDialog" color="primary">+Ajouter</VBtn>
      </VCol>
   <TableSkelethon v-if="loading" />

  <VTable  v-else>
    <thead>
      <tr>
        <th class="text-uppercase">
          Uername
        </th>
        <th class="text-uppercase text-center">
          Database
        </th>
        <th class="text-uppercase text-center">
          Email
        </th>
        <th class="text-uppercase text-center">
          Contact
        </th>
        <th class="text-uppercase text-center">
         logo
        </th>
        <th class="text-uppercase text-center">
         Action
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
      v-for="item in desserts[0]?.results"
        :key="item.id"
      >
        <td>
          {{ item.username }}
        </td>
        <td class="text-center">
          {{ item.database }}
        </td>
        <td class="text-center">
          {{ item.email }}
        </td>
        <td class="text-center">
          {{ item.contact }}
        </td>
        <td class="text-center">
          {{ item.picture }}
        </td>
        <td class="text-center">
          <button @click="openEditDialog(item.id)">
            <VIcon icon="mdi-pencil-outline"></VIcon>

        </button>

          <button @click="openDialog(item.id)">
          <VIcon icon="mdi-trash-can-outline" style="color: red;"></VIcon>
      </button>
        </td>
      </tr>

    </tbody>
  </VTable>
    <div class="text-xs-center">

      <v-pagination v-model="page"
      :length="numPages"
      :total-visible="5"
      rounded="circle"
      @click="getAll"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right" />
  </div>
  <!-- show toast -->
  <ToastMesssage :toast="toast"/>
    <!-- popup de suppression -->
    <DeletePopup :open="showDialog" :Ondelete="deleteProstpect" :OnCancel="closeDialog"></DeletePopup>

    <!-- popu de  creation des prostpects-->
    <CreatePopup  />

    <EditPopup :id="deleteId"/>
</template>

<style scoped>

.flex-end{
  display: flex;
  justify-content: end;
  margin-right: 10px;
}

</style>
