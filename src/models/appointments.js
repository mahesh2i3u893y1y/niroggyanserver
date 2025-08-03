const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const appointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true
  },
  dateTime: {
    type: Date,
    required: true
  },
  doctorName: {
    type: String,
    required: true
  },
  hospitalName: {
    type: String,
    required: true
  },
  bookingId: {
    type: String,
    default: () => uuidv4(), // Generating  unique booking ID
    unique: true
  },
  notes:{
    type:String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  
});

module.exports = mongoose.model('Appointment', appointmentSchema);

