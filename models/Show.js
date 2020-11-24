const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// show --> {
// id: 0,
// title: "title"
// platform: "platform"
// releaseYear: year
// image: "image"
//}

// Create Schema
const ShowSchema = new Schema({
  id: {
    type: String,
    required: true,
    text: true
  },
  title: {
    type: String,
    required: false,
    text: true
  },
  platform: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
});

const Show = mongoose.model("Show", ShowSchema);

module.exports = Show;
