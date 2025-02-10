// controllers/shoppingController.js 
const shoppingModel = require('../models/shoppingModel'); 

const showTable = (req, res) => { 
    //gets table properties from model
    const tblData = shoppingModel.getData(); 
    res.render('index', { tblData }); 
}; 
  
//GETS form data and passes it to model
const addItem = (req, res) => { 
    const { chartOptions, chartTitle, chartSections, chartLabels, chartTotal } = req.body; //attrs names from html
    shoppingModel.addTblData( chartOptions, chartTitle, chartSections, chartLabels, chartTotal ); 
    res.redirect('/'); 
}; 
  
module.exports = { 
    showTable, 
    addItem
};