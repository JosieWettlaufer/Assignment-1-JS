// models/shoppingModel.js

//Define table properties
const tblData = {
  // Define the chart to be drawn.
  chartOptions: '',
  chartTitle: '',
  chartSections: 0,
  chartLabels: [],
  chartSubtotal: [], 
  chartTotal: 0,
  gridInterval: 10,
  yaxisTitle: '',
  xaxisTitle: ''
}

//returns tblData object
const getData = () => {
  return tblData;
};

//References Controller, puts form data into tblData object
const addTblData = (chartOptions, chartTitle, chartSections, chartLabels, chartSubtotal, chartTotal, gridInterval, yaxisTitle, xaxisTitle) => {
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
  tblData.gridInterval = gridInterval;
  tblData.yaxisTitle = yaxisTitle;
  tblData.xaxisTitle = xaxisTitle;

  console.log(tblData); // Debug output
};




module.exports = {
  getData,
  addTblData
};
