//import express
const express = require("express");
// Import table controller
const tableController = require("./controllers/tableController"); 
const app = express();

const path = require("path");

//allows access to bootstrap, static css/js files
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use("/public", express.static(path.join(__dirname, "public")));

// Middleware to parse POST data
app.use(express.urlencoded({ extended: true }));

// Set up EJS as the view engine
app.set("view engine", "ejs");
app.set("views", "views"); // Ensure 'views' is the correct path to your EJS files

// Routes GET
app.get("/", tableController.showTable); // (home route)

//Routes POST
app.post("/add", tableController.addItem); // Submit chart table data

// Start the server
const PORT = 6966;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
