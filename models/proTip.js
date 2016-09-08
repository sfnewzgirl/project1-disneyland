var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProTipSchema = new Schema({
  tipTitle: String,
  tipDescription: String,
  tipScore: Number,
  tipResource: Boolean,
  tipResourceInfo: String
});

var ProTip = mongoose.model('ProTip', ProTipSchema);
module.exports = ProTip;
