var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProTipSchema = new Schema({
  tipTitle: String,
  tipDescription: String,
  tipScore: Number
  // comments: [Comment.schema]
  // tipResource: Boolean,
  // tipResourceInfo: String
  comments: [ String ]
});

var ProTip = mongoose.model('ProTip', ProTipSchema);
module.exports = ProTip;
