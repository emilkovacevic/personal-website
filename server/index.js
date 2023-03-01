const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'files')));

app.get('/', (req, res) => {
  res.send('This is a backend server for https://emilthedev.com/');
});

app.get('/api/cv/file.pdf', (req, res) => {
  res.sendFile(path.join(__dirname, 'files', 'CV__EMIL KOVACEVIC.pdf'));
});

app.get('/api/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'files', 'data.json'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
