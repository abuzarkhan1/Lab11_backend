const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api', (req, res) => {
  res.send({ message: "Hello from AWS Backend!" });
});

app.listen(port, () => {
  console.log(`Server is running on Port :${port}`);
});
