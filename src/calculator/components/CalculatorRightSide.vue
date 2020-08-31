<template id="temp2">
  <div>
    <ul>
      <li v-for="el in patients">
        <p>{{dataFromComponent.labelForPatientName}}: {{el.name}}</p>
        <p>{{dataFromComponent.labelForPatientSurname}}: {{el.surname}}</p>
        <p>{{dataFromComponent.labelForPatientWeight}}: {{el.weight}}</p>
        <p>{{dataFromComponent.labelForPatientDosage}}: {{el.dosage}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      patients: {
        type: Array,
      }
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
</style>
