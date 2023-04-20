const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Must use valid email address',
    ],
  },
  password: {
    type: String,
    required: true,
  },
  bookcase: {
    savedBooks: [bookSchema],
  },
});

const User = model('User', userSchema);

module.exports = User;