<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const options = {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      };
      // series: [{
      //   name: 'series-1',
      //   data: [30, 40, 45, 50, 49, 60, 70, 91]
      // }]


const series = [{ data: [37, 57, 45, 75, 57, 40, 65] }]

</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Evolution des ventes du mois</VCardTitle>

      <!-- <template #append>
        <div class="me-n3">
          <MoreBtn />
        </div>
      </template> -->
    </VCardItem>

    <VCardText>
      <VueApexCharts
        type="bar"
        :options="options"
        :series="series"
        :height="220"
      />



      <VBtn block to="/inventory"   color="primary"  >
        Details
      </VBtn>
    </VCardText>
  </VCard>
</template>
