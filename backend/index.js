const express = require('express');
const cors = require('cors');
const questions = require('./questions');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/questions', (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});