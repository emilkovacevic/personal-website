const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
// Route for server/index.js
app.get('/', (req, res) => {
  res.send('Hello from server/index.js!');
});

// Route for server/files/data.json
app.get('/data', (req, res) => {
  res.sendFile(__dirname + '/files/data.json');
});

// Route for server/files/dat2.pdf
app.get('/cv', (req, res) => {
  res.sendFile(__dirname + '/files/CV__EMIL KOVACEVIC.pdf');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
