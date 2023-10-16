<template>
  <div>
    <div >
      <div class="skeleton-header">
        <div class="skeleton-cell"></div>
        <div class="skeleton-cell"></div>
        <div class="skeleton-cell"></div>
        <div class="skeleton-cell"></div>
        <div class="skeleton-cell"></div>
      </div>

      <div class="skeleton-row" v-for="n in 5" :key="n">
        <div class="skeleton-cell animated"></div>
        <div class="skeleton-cell animated"></div>
        <div class="skeleton-cell animated"></div>
        <div class="skeleton-cell animated"></div>
        <div class="skeleton-cell animated"></div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.skeleton-header {
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #eee;
}

.skeleton-cell {
  flex: 1;
  height: 20px;
  background-color: #ccc;
  margin: 4px;
}

.skeleton-row {
  display: flex;
  align-items: center;
  padding: 8px;
}

/* Animation pour le clignotement */
.animated {
  animation: blink 1s infinite;
}

@keyframes blink {
  0% {
    background-color: hsl(200, 20%, 70%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
</style>
