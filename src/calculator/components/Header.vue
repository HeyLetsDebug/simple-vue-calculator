<template>
  <div>
    <h1>{{dataFromComponent.headerText}}</h1>
  </div>
</template>

<script>
  import translationEventBus from "../translationEventBus";

  export default {
    data() {
      return {
        dataFromComponent: {}
      }
    },
    beforeMount() {
      translationEventBus.subscribeToDataFromComponent((dataFromComponent) => {
        this.dataFromComponent = dataFromComponent;
      })
    }
  }
</script>

<style scoped>
  h1 {
    color: #2c3e50;
  }
</style>
