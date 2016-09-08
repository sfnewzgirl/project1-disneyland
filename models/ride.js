var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RideSchema = new Schema({
  rideName: String,
  notToMiss: Boolean,
  fearFactor: String,
  rideVotes: Array
});

var Ride = mongoose.model('Ride', RideSchema);
module.exports = Ride;
