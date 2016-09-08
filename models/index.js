var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost:3000");

module.exports.Ride = require("./ride");
module.exports.ProTip = require("./proTip");
