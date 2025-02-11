// models/shoppingModel.js

//Define table properties
const tblData = {
  // Define the chart to be drawn.
  chartOptions: '',
  chartTitle: '',
  chartSections: 0,
  chartLabels: [],
  chartSubtotal: [], 
  chartTotal: 0
}

//returns tblData object
const getData = () => {
  return tblData;
};

//References Controller, puts form data into tblData object
const addTblData = (chartOptions, chartTitle, chartSections, chartLabels, chartSubtotal, chartTotal) => {
  tblData.chartOptions = chartOptions;
  tblData.chartTitle = chartTitle;
  tblData.chartSections = chartSections;
  tblData.chartLabels = []; //reset array
  tblData.chartSubtotal = []; //reset array
  for (let i = 0; i < chartSections; i++) {
    tblData.chartLabels.push(chartLabels[i]);
    tblData.chartSubtotal.push(chartSubtotal[i]);
  }
  tblData.chartTotal = chartTotal;

  console.log(tblData); // Debug output
};




module.exports = {
  getData,
  addTblData
};
