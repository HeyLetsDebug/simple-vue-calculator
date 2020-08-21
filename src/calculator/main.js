import Vue from 'vue'
import App from './App.vue'
import translationEventBus from "./translationEventBus";

export default function activate(dataFromComponent) {
  new Vue({
    el: dataFromComponent.container,
    render: h => h(App)
  });

  translationEventBus.emitDataFromComponent(dataFromComponent)
}
