const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// TODO: Write your PostModel schema here
const postSchema = new Schema({
  'author' : {
    type: String,
    required: true
  },
  'date' : {
      type: String,
      required: true
  },
  'text' : {
      type: String,
      required: true
  }
});

// Hint: Don't for get to export it!
module.exports = mongoose.model('Post', postSchema);
