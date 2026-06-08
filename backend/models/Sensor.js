const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room', // Länkar till Room-modellen
    required: true
  },
  type: { type: String, required: true },
  value: { type: String, required: true },
  status: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Sensor', sensorSchema);