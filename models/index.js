var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost");

module.exports.Ride = require("./ride.js");
module.exports.ProTip = require("./proTip.js");
