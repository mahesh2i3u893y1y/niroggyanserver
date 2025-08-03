const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  image: String,
  rating: Number,
  experience: String,
  address: String,
  available: Boolean,
  description: String,
  phone: String,
  email: String,
  education: [String],
  languages: [String],
  availableSlots: [String]
});

module.exports = mongoose.model("Doctor", doctorSchema);
