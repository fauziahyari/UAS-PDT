const mongoose = require("mongoose");

const guruSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  noHp: {
    type: Number,
    required: true,
  },
  nuptk: {
    type: String,
    required: true,
    trim: true,
  },
  alamat: {
    type: String,
    required: true,
    trim: true,
  },
});

const guru = mongoose.model("guru", guruSchema);

module.exports = guru;
