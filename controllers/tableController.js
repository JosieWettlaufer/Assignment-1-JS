// controllers/tableController.js
const tableModel = require("../models/tableModel");

//gets table properties from model, passes to view
const showTable = (req, res) => {
  const tblData = tableModel.getData();
  res.render("index", { tblData });
};

//GETS form data and passes it to model
const addItem = (req, res) => {
  const {
    chartOptions,
    chartTitle,
    chartSections,
    chartLabels,
    chartSubtotal,
    chartTotal,
    gridInterval,
    yaxisTitle,
    xaxisTitle,
  } = req.body; //attrs names from html
  tableModel.addTblData(
    chartOptions,
    chartTitle,
    chartSections,
    chartLabels,
    chartSubtotal,
    chartTotal,
    gridInterval,
    yaxisTitle,
    xaxisTitle
  );
  res.redirect("/");
};

//export methods
module.exports = {
  showTable,
  addItem,
};
