// models/shoppingModel.js

//Define table properties
const tblData = {
  // Define the chart to be drawn.
  chartOptions: '',
  chartTitle: '',
  chartSections: 0,
  chartLabels: '',
  chartSubtotal: 0, 
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
  tblData.chartLabels = chartLabels;
  tblData.chartSubtotal = chartSubtotal;
  tblData.chartTotal = chartTotal;
};




module.exports = {
  getData,
  addTblData
};
