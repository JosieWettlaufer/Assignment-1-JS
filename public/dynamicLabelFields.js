// Generates input fields based on number of sections
document
  .getElementById("chartSections")

  // Updates whenever user selects a different chart sections value
  .addEventListener("change", function () {
    let numSections = parseInt(this.value); // Parse the number of sections selected by the user
    const container = document.getElementById("chartFields"); 
    container.innerHTML = ""; // Clear previous inputs in the container

    // Runs a for loop based on the number of sections specified
    for (let i = 0; i < numSections; i++) {
      const formGroup = document.createElement("div"); // Create a new div for each section
      formGroup.classList.add("form-group", "row"); // Add form-group and row classes to the div
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
            // Ternary operator assigns readonly to the last input value section
            i === numSections - 1 ? 'id="readonlyValue" readonly' : ""
          }
          />
        </div>
      `;

      // Appends new form elements to the container
      container.appendChild(formGroup);
    }

    // Attach event listeners to input fields (excluding readonly inputs)
    attachInputListeners();
  });

// Listens to input fields except readonly to update calculated value in readonly
function attachInputListeners() {
  // Get all input fields with the class 'sectionValue'
  const inputs = document.querySelectorAll(".sectionValue"); 
  // Get the input field for total value
  const total = document.querySelector('input[name="chartTotal"]'); 

  inputs.forEach((input) => {
    if (!input.hasAttribute("readonly")) { // If input is not readonly, add event listener
      input.addEventListener("input", updateTotal); // Update total when the user changes an input field
    }
  });

  total.addEventListener("input", updateTotal); // Update total when the total input value is changed
}

// Determine value for readonly field
function updateTotal() {
  let total = 0; // Initialize a variable to track the sum of the section values
  document.querySelectorAll(".sectionValue").forEach((input) => {
    if (!input.hasAttribute("readonly")) { // Only sum values that are not readonly
      total += parseInt(input.value) || 0; // Convert input value to a number, default to 0 if empty
    }
  });

  // Assign calculated value to the readonly field
  let readonlyValue = document.getElementById("readonlyValue");
  let chartTotal =
    parseInt(document.querySelector('input[name="chartTotal"]').value) || 0; // Get the total value input
  let remainingValue = chartTotal - total; // Calculate the remaining value

  readonlyValue.value = remainingValue; // Set the remaining value to the readonly input

  // Validation: Check if the readonly value is greater than 0
  if (remainingValue <= 0) {
    readonlyValue.classList.add("is-invalid"); // Add a red border if the remaining value is less than or equal to 0
    alert("Total value must be greater than the sum of sections!"); // Show an alert if invalid
  } else {
    readonlyValue.classList.remove("is-invalid"); // Remove the red border if the value is valid
  }
}
