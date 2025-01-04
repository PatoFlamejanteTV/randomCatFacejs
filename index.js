const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const IMAGE_ONLY = true; // If true, videos will NOT show, useful in case you are using this on your GitHub profile.

const images = fs.readdirSync(path.join(__dirname, 'assets')).filter(file => {
  if (IMAGE_ONLY) {
    return path.extname(file).toLowerCase() === '.jpg' || path.extname(file).toLowerCase() === '.png' || path.extname(file).toLowerCase() === '.jpeg' || path.extname(file).toLowerCase() === '.gif' || path.extname(file).toLowerCase() === '.webp';
  } else {
    return true;
  }
});

app.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  res.sendFile(path.join(__dirname, 'assets', randomImage));
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});