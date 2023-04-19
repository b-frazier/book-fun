const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('this will be the homepage!'));

app.listen(PORT, () =>
  console.log(`Now listening at http://localhost:${PORT}`)
);
