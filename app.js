const express = require('express');
const shoppingController = require('./controllers/shoppingController'); // Import the shopping controller
const app = express();

const path = require('path');
//const bodyParser = require('body-parser');

//allows access to bootstrap, static files
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/public', express.static(path.join(__dirname, 'public')));


// Middleware to parse POST data
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', 'views'); // Ensure 'views' is the correct path to your EJS files

// Routes GET
app.get('/', shoppingController.showTable); // Show the shopping list (home route)

//Routes POST
app.post('/add', shoppingController.addItem); // Add an item to the list

// Start the server
const PORT = 6966;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
