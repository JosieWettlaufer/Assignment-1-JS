// controllers/shoppingController.js 
const shoppingModel = require('../models/shoppingModel'); 
  
const showShoppingList = (req, res) => { 
    const shoppingData = shoppingModel.getData(); 
    res.render('index', { shoppingData }); 
}; 
  
const addItem = (req, res) => { 
    const { item, listType } = req.body; 
    shoppingModel.addItem(item, listType); 
    res.redirect('/'); 
}; 
  
const deleteItem = (req, res) => { 
    const { item, listType } = req.body; 
    shoppingModel.deleteItem(item, listType); 
    res.redirect('/'); 
}; 
  
const toggleItem = (req, res) => { 
    const { item, fromList } = req.body; 
    shoppingModel.toggleItem(item, fromList); 
    res.redirect('/'); 
}; 
  
module.exports = { 
    showShoppingList, 
    addItem, 
    deleteItem, 
    toggleItem 
};