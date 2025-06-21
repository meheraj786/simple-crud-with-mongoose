const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DevSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
});

const Dev = mongoose.model("dev", DevSchema);

module.exports = Dev;
