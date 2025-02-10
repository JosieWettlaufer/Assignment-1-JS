// models/shoppingModel.js
const shoppingData = {
  wishList: [],
  purchasedList: [],
};

const getData = () => {
  return shoppingData;
};

const addItem = (item, listType) => {
  if (listType === "wish") {
    shoppingData.wishList.push(item);
  } else if (listType === "purchased") {
    shoppingData.purchasedList.push(item);
  }
};

const deleteItem = (item, listType) => {
  if (listType === "wish") {
    shoppingData.wishList = shoppingData.wishList.filter((i) => i !== item);
  } else if (listType === "purchased") {
    shoppingData.purchasedList = shoppingData.purchasedList.filter(
      (i) => i !== item
    );
  }
};

const toggleItem = (res, req, item, fromList) => {

    // Check if the checkbox was checked
    const isChecked = req.body[item] !== undefined;  // This checks if the item is present in req.body

  if (fromList === "wish") {
    if (isChecked){ 
    shoppingData.purchasedList.push(item);
    shoppingData.wishList = shoppingData.wishList.filter((i) => i !== item);
    }
  } else if (fromList === "purchased") {
    if (!isChecked){
        shoppingData.wishList.push(item);
        shoppingData.purchasedList = shoppingData.purchasedList.filter(
        (i) => i !== item
        );
    }
  }
};
module.exports = {
  getData,
  addItem,
  deleteItem,
  toggleItem,
};
