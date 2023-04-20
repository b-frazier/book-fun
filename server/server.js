const express = require('express');
const User = require('./models/User');
const app = express();
const PORT = process.env.PORT || 3001;

const db = require('./db/connection');

// for sure need these to get json back
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// honestly not sure i need this...
app.use(express.static('public'));

// place holding code to test & debug
app.get('/', (req, res) => res.send('this will be the homepage!'));

app.post('/newUser', (req, res) => {
  User.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});

app.get('/users', (req, res) => {
  User.find({}, (err, response) => {
    if (response) {
      res.status(200).json(response);
    } else {
      console.log('still nope...');
    }
  });
});

db.once('open', () => {
  app.listen(PORT, () =>
    console.log(`Now listening at http://localhost:${PORT}`)
  );
});
