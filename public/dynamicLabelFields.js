//Generates input fields based on number of sections
document
  .getElementById("chartSections")
  //updates whenever user selects a different chart sections value
  .addEventListener("change", function () {
    let numSections = parseInt(this.value);
    const container = document.getElementById("chartFields");
    container.innerHTML = ""; // Clear previous inputs

    //runs for loop based on number of sections
    for (let i = 0; i < numSections; i++) {
      const formGroup = document.createElement("div");
      formGroup.classList.add("form-group", "row");
      formGroup.innerHTML = `
        <div class="form-group col-md-6">
          <label>Section ${i + 1} Label</label>
          <input type="text" class="form-control" name="chartLabels[]" placeholder="Enter chart labels" required />
        </div>

        <div class="form-group col-md-6">
          <label>Section ${i + 1} Value</label>
          <input type="number" class="form-control sectionValue" name="chartSubtotal[]" placeholder="Enter section value" required 
          min="1" max="1000"
          ${
            //Ternary operator assigns readonly to last input value section
            i === numSections - 1 ? 'id="readonlyValue" readonly' : ""
          }
          />
        </div>
      `;

      //appends new form elements to container
      container.appendChild(formGroup);
    }

    //attach event listener
    attachInputListeners();
  });

//attach event listener for all input fields except readonly to update calculated value in readonly
function attachInputListeners() {
  const inputs = document.querySelectorAll(".sectionValue");
  const total = document.querySelector('input[name="chartTotal"]');

  inputs.forEach((input) => {
    if (!input.hasAttribute("readonly")) {
      input.addEventListener("input", updateTotal);
    }
  });
  total.addEventListener("input", updateTotal);
}

// Determine value for readonly
function updateTotal() {
  let total = 0;
  document.querySelectorAll(".sectionValue").forEach((input) => {
    if (!input.hasAttribute("readonly")) {
      total += parseInt(input.value) || 0; // Convert to number, default to 0 if empty
    }
  });

  // Assign calculated value to readonly
  let readonlyValue = document.getElementById("readonlyValue");
  let chartTotal =
    parseInt(document.querySelector('input[name="chartTotal"]').value) || 0;
  let remainingValue = chartTotal - total;

  readonlyValue.value = remainingValue;

  // Validation: Check if the readonly value is greater than 0
  if (remainingValue <= 0) {
    readonlyValue.classList.add("is-invalid"); // Add a red border
    alert("Total value must be greater than the sum of sections!");
  } else {
    readonlyValue.classList.remove("is-invalid"); // Remove the red border if valid
  }
}