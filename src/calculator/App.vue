<template>
  <div>
    <Header></Header>
    <div class="container">
      <CalculatorLeftSide @patientAdded="addPatient"></CalculatorLeftSide>
      <CalculatorRightSide :patients="patients"></CalculatorRightSide>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import CalculatorLeftSide from "./components/CalculatorLeftSide";
  import CalculatorRightSide from "./components/CalculatorRightSide";

  export default {
    name: 'app',
    data() {
      return {
        patients: [],
      }
    },
    methods: {
      addPatient(patient) {
        this.patients.push(patient);
      }
    },
    components: {
      Header, CalculatorLeftSide, CalculatorRightSide
    }
  }
</script>

<style>
  .container {
    display: flex;
  }
</style>
