<template id="calc1">
  <div>
    <form @submit="onFormSubmit">
      <div>
        <label for="name">{{dataFromComponent.labelForPatientName}}
          <input type="text" id="name">
        </label>
      </div>
      <div>
        <label for="surname">{{dataFromComponent.labelForPatientSurname}}
          <input type="text" id="surname">
        </label>
      </div>
      <div>
        <label for="weight">{{dataFromComponent.labelForPatientWeight}}
          <input type="text" id="weight">
        </label>
      </div>
      <div>
        <label for="dosage">{{dataFromComponent.labelForPatientDosage}}
          <input type="text" id="dosage">
        </label>
      </div>
      <button type="submit">{{dataFromComponent.submitButtonText}}</button>
    </form>
  </div>
</template>

<script>
  export default {
    methods: {
      onFormSubmit($event) {
        $event.preventDefault();

        let {name, surname, weight, dosage} = $event.target;

        this.$emit('patientAdded', {
          name: name.value,
          surname: surname.value,
          weight: weight.value,
          dosage: dosage.value,
        });

        $event.target.name.value = '';
        $event.target.surname.value = '';
        $event.target.weight.value = '';
        $event.target.dosage.value = '';
      }
    }
  }
</script>

<style scoped>
  div {
    width: 35%;
    box-sizing: border-box;
  }
</style>
