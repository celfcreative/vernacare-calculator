document.addEventListener('DOMContentLoaded', function () {
  const fourBase = 0.0232028603386667;
  const sevenBase = 0.0324919040386667;

  const unitsFourFiveInput = document.getElementById('unitsFourFive');
  const unitsSevenInput = document.getElementById('unitsSeven');
  const resultSpan = document.querySelector('.result');

  function calculateTotalCO2() {
    const unitsFourFiveValue = unitsFourFiveInput.value
      ? parseFloat(unitsFourFiveInput.value) * fourBase
      : 0;
    const unitsSevenValue = unitsSevenInput.value
      ? parseFloat(unitsSevenInput.value) * sevenBase
      : 0;
    const totalCO2 = unitsFourFiveValue + unitsSevenValue;
    resultSpan.textContent = totalCO2.toFixed(2);
  }

  unitsFourFiveInput.addEventListener('input', calculateTotalCO2);
  unitsSevenInput.addEventListener('input', calculateTotalCO2);
});
