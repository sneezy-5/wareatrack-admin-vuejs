<script lang="ts" setup>
import AnalitycAward from '@/views/dashboard/AnalitycAward.vue'
import AnalitycChartBar from '@/views/dashboard/AnalitycChartBar.vue'
import DashbordSkelethon from '@/@core/components/features/DashbordSkelethon.vue'

const loading = ref(true);

setTimeout(()=>{
  console.log('load data');
  loading.value = false
}, 3000);
</script>

<template>

<DashbordSkelethon v-if="loading"/>
<v-row class="contenair" v-else>
  <v-col cols="12" md="3" class="col-custom">
    <AnalitycAward title="Propspect" value="126"/>

  </v-col>
  <v-col cols="12" md="3"  class="col-custom">
    <AnalitycAward title="Abonnements" value="1680"/>
  </v-col>
  <v-col cols="12" md="3"  class="col-custom">
    <AnalitycAward title="Products" value="11680"/>
  </v-col>
  <v-col cols="12" md="3"  class="col-custom">
    <AnalitycAward title="Users" value="1450"/>
  </v-col>
  <v-col cols="12" md="12"  >
    <AnalitycChartBar/>
  </v-col>
</v-row>
</template>

<style lang="scss" scoped>
.contenair{
  //  background: blue !important ;
  width: 100%;
  height: 100vh;
}

.custom{
background: red !important;
}

.col-custom{
  display: flex;
   align-items: end;
   justify-content: center;
}
</style>
