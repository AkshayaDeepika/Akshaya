// Import the Express module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('hii here am ammu');
});

// Set the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
