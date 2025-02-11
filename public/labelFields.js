document
        .getElementById("chartSections")
        .addEventListener("change", function () {
          let numSections = parseInt(this.value);
          const container = document.getElementById("chartFields");
          container.innerHTML = ""; // Clear previous inputs

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
                <input type="number" class="form-control sectionValue" name="chartSubtotal[]" placeholder="Enter section value" required ${
                  i === numSections - 1 ? 'id="readonlyValue" readonly' : ""
                }/>
              </div>
            `;

            container.appendChild(formGroup);
          }

          //attach event listener
          attachInputListeners();
        });

      //attach event listener for all input fields except readonly
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

      //determine value for readonly
      function updateTotal() {
        let total = 0;
        document.querySelectorAll(".sectionValue").forEach((input) => {
          if (!input.hasAttribute("readonly")) {
            total += parseInt(input.value) || 0; // Convert to number, default to 0 if empty
          }
        });

        document.getElementById("readonlyValue").value =
          document.querySelector('input[name="chartTotal"]').value - total; // Update total in last readonly input
      }