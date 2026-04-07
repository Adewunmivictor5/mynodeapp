// Import express at the top
const express = require('express');
const app = express();

// Your routes here
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Use environment variable for PORT or default 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
