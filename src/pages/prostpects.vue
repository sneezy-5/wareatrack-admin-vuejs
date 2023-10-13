<script lang="ts" setup>
import ProstpectsTable from '@/views/pages/tables/ProstpectsTable.vue'

</script>

<template>


<v-row class="contenair">


  <VCol cols="12">
      <VCard title="Prostpects">
        <!-- <VCardText>
          You can show a dense version of the table by using the <code>density</code> prop.
        </VCardText> -->
        <ProstpectsTable />
      </VCard>
    </VCol>
</v-row>
</template>

