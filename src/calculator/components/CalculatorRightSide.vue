<template>
  <div>
    <ul>
      <li v-for="el in array">
        <p>{{dataFromComponent.labelForPatientName}}: {{el.name}}</p>
        <p>{{dataFromComponent.labelForPatientSurname}}: {{el.surname}}</p>
        <p>{{dataFromComponent.labelForPatientWeight}}: {{el.weight}}</p>
        <p>{{dataFromComponent.labelForPatientDosage}}: {{el.dosage}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import translationEventBus from "../translationEventBus";

  export default {
    data() {
      return {
        dataFromComponent: {},
        array: [],
      }
    },
    beforeMount() {
      translationEventBus.subscribeToDataFromComponent((dataFromComponent) => {
        this.dataFromComponent = dataFromComponent;
      });

      translationEventBus.$on('onFormSubmitted', event => {
          this.array.push(event);

      })
    }
  }
</script>


<style scoped>
  div {
    width: 50%;
    box-sizing: border-box;
  }
  li {
    display: block;
    border: 1px solid grey;
    padding: 10px;
    margin-bottom: 3px;
  }

  li p {

  }
</style>
