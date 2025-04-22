const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  busId: String,
  departureDetails: Object,
  arrivalDetails: Object,
  seats: Number,
  duration: String,
  isInsurance: Boolean,
  isCovidDonated: Boolean
});

module.exports = mongoose.model('Trip', TripSchema);