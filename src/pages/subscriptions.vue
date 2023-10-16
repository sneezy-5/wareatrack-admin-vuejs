<script lang="ts" setup>
import SubscriptionTable from '@/views/pages/tables/SubscriptionTable.vue'

</script>

<template>


<v-row class="contenair">


  <VCol cols="12">
      <VCard title="Prostpects">
        <!-- <VCardText>
          You can show a dense version of the table by using the <code>density</code> prop.
        </VCardText> -->
        <SubscriptionTable />
      </VCard>
    </VCol>
</v-row>
</template>

