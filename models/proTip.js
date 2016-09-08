var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProTipSchema = new Schema({
  tipSummary: String,
  tipDescription: String,
  tipContact: Boolean,
  tipContactInfo: String
});

var ProTip = mongoose.model('ProTip', ProTipSchema);
module.exports = ProTip;
