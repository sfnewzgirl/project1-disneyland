var db = require('./models');

var proTipList = [
  {
    tipTitle: 'Get a Paint the Night On-the-Go Dining Package and VIP seating at the parade',
    tipDescription: 'Several restaurants in the park offer on-the-go dining options that you reserve and pick up at a predetermined time. When you pick up your lunch you also get a VIP pass to a seating area at the start of the Paint The Night parade.',
    tipScore: 5,
    // tipResource: true,
    // tipResourceInfo: 'https://disneyland.disney.go.com/dining/'
  },
  {
    tipTitle: 'Get a FastPass for Cars First',
    tipDescription: 'The Cars ride in California Adventure has the longest wait times in the park. Arrive for the rope drop and head directly to get a FastPass, then return at your pass time',
    tipScore: 11,
    // tipResource: false,
    // tipResourceInfo: ''
  }
];

// var commentList = [
//   {
//     commentBody: "I love this ProTip!"
//   },
//   {
//     commentBody: "This isn't helpful at all."
//   },
//   {
//     commentBody: "Eh, everybody already knows this."
//   }
// ]

// proTipList.forEach(function(protip) {
//   protip.tipComment = commentList;
// });

db.ProTip.remove({}, function(err,protips) {

    db.ProTip.create(proTipList, function (err, protips) {
      if (err) { return console.log('err', err); }
      console.log('created', protips.length, 'protips');
      process.exit();
    });
});
