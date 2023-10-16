<script setup lang="ts">

interface propPropType{
  open: boolean;
  title: string;
  // OnSave: () => void
  // OnCancel: () => void
}
const props = withDefaults(defineProps<propPropType>(), {
})


</script>

<template>


    <!-- popup de suppression  -->
    <v-dialog v-model="props.open" max-width="500px">
    <v-card>
      <v-card-title class="headline">{{ props.title }}</v-card-title>
        <div class="">
          <slot name="container"></slot>
        </div>

      <!-- <v-card-actions>
        <v-btn  @click="props.OnSave"  color="danger" >Confimer</v-btn>
        <v-btn  @click="props.OnCancel">Annuler</v-btn>
      </v-card-actions> -->
    </v-card>
  </v-dialog>
</template>

<style scoped>

.contenair{
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  /* gap:2px; */
}

</style>
