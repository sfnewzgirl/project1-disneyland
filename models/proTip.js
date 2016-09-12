var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Comment = require('./comment.js');

var ProTipSchema = new Schema({
  tipTitle: String,
  tipDescription: String,
  tipScore: Number,
  tipComment: [ Comment.schema ]
});

var ProTip = mongoose.model('ProTip', ProTipSchema);
module.exports = ProTip;
