const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// provided a file path to a location in our application (in this case, the public folder) and instruct the server to make these files static resources
app.use(express.static('public'));

// Use apiRoutes

app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});