import Vue from 'vue';

export default new Vue({
  data: {
  },
  methods: {
    emitDataFromComponent(dataFromComponent) {
      this.$emit('onDataFromComponentReceived', dataFromComponent);
    },
    subscribeToDataFromComponent(callback) {
      return this.$on('onDataFromComponentReceived', callback);
    }
  }
})
