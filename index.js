const calculate = () => {
  let fixedSalary = parseFloat(document.getElementById("fixedSalary").value);
  let savingsPercentage = parseFloat(
    document.getElementById("savingsPercentage").value
  );
  let raisePercentage = parseFloat(
    document.getElementById("raisePercentage").value
  );
  let initialAge = parseInt(document.getElementById("initialAge").value);
  let retirementAge = parseInt(document.getElementById("retirementAge").value);

  let age = initialAge;
  let savings = 0;

  while (age < retirementAge) {
    let annualSavings = fixedSalary * (savingsPercentage / 100);
    savings += annualSavings;

    fixedSalary += fixedSalary * (raisePercentage / 100);

    age++;
  }

  const resultElement = document.getElementById("result");
  resultElement.textContent = `Accumulated amount from saving: ${savings.toFixed(
    2
  )} DH`;
  console.log(savings);
};
