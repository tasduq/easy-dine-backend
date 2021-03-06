const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const menuSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  sections: { type: Array },
});

module.exports = mongoose.model("Menu", menuSchema);
