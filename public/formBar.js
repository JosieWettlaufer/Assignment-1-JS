document
        .getElementById("chartOptions")
        .addEventListener("change", function () {
            const chartOptions = document.getElementById("chartOptions");

            const container = document.getElementById("barChartFields");

            if (chartOptions.value == 'BarChart') {
                container.innerHTML = ""; // Clear previous inputs
                const formGroup = document.createElement("div");
                formGroup.classList.add("form-group");
                formGroup.innerHTML = `

                        <label>Grid Intervals</label>
                        <input type="number" class="form-control" name="gridInterval" placeholder="Enter grid interval [10-100]" required />
                    </div>

                    <div class="form-group row">
                    <div class="form-group col-md-6">
                        <label>Y-Axis Title</label>
                        <input type="text" class="form-control" name="yaxisTitle" placeholder="Enter y-axis title" required />
                    </div>

                    <div class="form-group col-md-6">
                        <label>X-Axis Title</label>
                        <input type="text" class="form-control" name="xaxisTitle" placeholder="Enter x-axis title" required />
                    </div>
                    
                `;

                container.appendChild(formGroup);
            } else {
                container.innerHTML = ""; // Clear the form fields when the selection changes to something other than 'BarChart'
            }
          });