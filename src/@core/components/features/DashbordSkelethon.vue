<template>
  <v-row class="contenair">
    <v-col cols="12" md="3" class="col-custom">
      <div class="skeleton-award">
        <div class="skeleton-title"></div>
        <div class="skeleton-value"></div>
      </div>
    </v-col>
    <v-col cols="12" md="3" class="col-custom">
      <div class="skeleton-award">
        <div class="skeleton-title"></div>
        <div class="skeleton-value"></div>
      </div>
    </v-col>
    <v-col cols="12" md="3" class="col-custom">
      <div class="skeleton-award">
        <div class="skeleton-title"></div>
        <div class="skeleton-value"></div>
      </div>
    </v-col>
    <v-col cols="12" md="3" class="col-custom">
      <div class="skeleton-award">
        <div class="skeleton-title"></div>
        <div class="skeleton-value"></div>
      </div>
    </v-col>
    <v-col cols="12" md="12">
      <div class="skeleton-chart-bar"></div>
    </v-col>
  </v-row>
</template>

<style scoped>
.skeleton-award {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  background-color: #eee;
}

.skeleton-title {
  width: 80%;
  height: 20px;
  background-color: #ccc;
  margin: 4px;
}

.skeleton-value {
  width: 60%;
  height: 20px;
  background-color: #ccc;
  margin: 4px;
}

.skeleton-chart-bar {
  height: 200px;
  background-color: #ccc;
  margin: 4px;
}
</style>
