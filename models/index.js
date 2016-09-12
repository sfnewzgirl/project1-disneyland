var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost");

module.exports.ProTip = require("./proTip.js");
module.exports.Comment = require("./comment.js");
