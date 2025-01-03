const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const images = fs.readdirSync(path.join(__dirname, 'assets'));

app.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  res.sendFile(path.join(__dirname, 'assets', randomImage));
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});