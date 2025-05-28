const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const products = [
  { id: 1, name: "Shirt", price: 25, image: "..." },
  { id: 2, name: "Pants", price: 45, image: "..." },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
