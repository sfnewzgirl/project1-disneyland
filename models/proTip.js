var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProTipSchema = new Schema({
  tipTitle: String,
  tipDescription: String,
  tipScore: Number,
  tipResource: Boolean,
  tipResourceInfo: String
});

// ProTipSchema.methods.upScore = function (callback) {
//   var ProTipSchema.tipScore = db.ProTip.tipScore +1;
//   return newProTipSchema.tipScore;
// }

var ProTip = mongoose.model('ProTip', ProTipSchema);
module.exports = ProTip;

// define a schema
// var animalSchema = new Schema({ name: String, type: String });

// assign a function to the "methods" object of our animalSchema
// animalSchema.methods.findSimilarTypes = function(cb) {
//   return this.model('Animal').find({ type: this.type }, cb);
// };
