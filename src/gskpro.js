import activate from './calculator/main'

const el = document.querySelectorAll('.calculator');

el.forEach(element => {
  const {dataset} = element;

  activate({
    container: dataset.appContainer,
    headerText: dataset.headerText,
    labelForPatientName: dataset.patientName,
    labelForPatientSurname: dataset.patientSurname,
    labelForPatientWeight: dataset.patientWeight,
    labelForPatientDosage: dataset.patientDosage,
    submitButtonText: dataset.patientAdd,
  });
});

