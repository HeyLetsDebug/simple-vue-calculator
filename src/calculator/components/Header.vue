<template>
  <div>
    <h1>{{dataFromComponent.headerText}}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataFromComponent: {}
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: #2c3e50;
  }
</style>
