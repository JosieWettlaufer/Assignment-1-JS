// controllers/shoppingController.js
const shoppingModel = require("../models/tableModel");

const showTable = (req, res) => {
  //gets table properties from model, passes to view
  const tblData = shoppingModel.getData();
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
  shoppingModel.addTblData(
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
