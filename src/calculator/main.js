import Vue from 'vue'
import App from './App.vue'

export default function activate(dataFromComponent) {
  Vue.mixin({
    data() {
      return {
        dataFromComponent,
      }
    }
  });

  new Vue({
    el: dataFromComponent.container,
    render: h => h(App),
  });
}
