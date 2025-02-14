// Event listener for when user selects bar or pie chart
document.getElementById("chartOptions").addEventListener("change", function () {

  // Get references to the chart options dropdown and container for dynamic form inputs
  const chartOptions = document.getElementById("chartOptions");
  const container = document.getElementById("ColumnChartFields");

  // Check if the selected chart type is "ColumnChart"
  if (chartOptions.value == "ColumnChart") {
    container.innerHTML = ""; // Clear previous inputs in the container

    // Create a new div to hold the input fields for the bar chart
    const formGroup = document.createElement("div");
    formGroup.classList.add("form-group");

    // Define the inner HTML for the form inputs related to the bar chart
    formGroup.innerHTML = `
        <label>Grid Intervals</label>
        <input type="number" class="form-control" name="gridInterval" placeholder="Enter grid interval [10-100]" required 
        min="10" max="100"/>
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

    // Append the newly created form inputs to the container div
    container.appendChild(formGroup);
  } else {
    // If the user selects a chart other than "ColumnChart" (e.g., pie chart), clear the container
    container.innerHTML = ""; 
  }
});
