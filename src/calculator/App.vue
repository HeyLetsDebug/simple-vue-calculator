<template>
  <div>
    <Header></Header>
    <div class="container">
      <CalculatorLeftSide></CalculatorLeftSide>
      <CalculatorRightSide></CalculatorRightSide>
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
        msg: 'Welcome to Your Vue.js App'
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
