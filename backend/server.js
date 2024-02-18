// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.static('public'));
app.get('/api/data', (req, res) => {
  const data = generateRandomData();
  res.json(data);
});

function generateRandomData() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const data = [];
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const freq = Math.floor(Math.random() * 50) + 1; // Generate random frequency between 1 and 50
    data.push({ name: letter, value: freq });
  }
  return data;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
