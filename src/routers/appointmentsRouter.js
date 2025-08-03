const express = require('express');
const appointmentsRouter = express.Router();
const Appointment = require('../models/appointments');


appointmentsRouter.post('/appointment', async (req, res) => {
  const { patientName, email, dateTime, doctorName, hospitalName,notes } = req.body;

  if (!patientName || !email || !dateTime || !doctorName || !hospitalName) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const appointment = new Appointment({ patientName, email, dateTime, doctorName, hospitalName,notes });
    const saved = await appointment.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: 'Error creating appointment', error });
  }
});

module.exports = appointmentsRouter;
