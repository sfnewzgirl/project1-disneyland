var db = require('./models');

var proTipList =[];
proTipList.push({
                tipTitle: 'Get a Paint the Night On-the-Go Dining Package and VIP seating at the parade',
                tipDescription: 'Several restaurants in the park offer on-the-go dining options that you reserve and pick up at a predetermined time. When you pick up your lunch you also get a VIP pass to a seating area at the start of the Paint The Night parade.',
                tipScore: 5,
                tipResource: true,
                tipResourceInfo: 'https://disneyland.disney.go.com/dining/'
                });

db.ProTrip.remove({}, function(err,protips) {
  if (err) {
    console.log('remove error', err);
  } else {
    console.log('removed all protips');

    db.ProTrip.create(proTipList, function (err, protips) {
      if (err) { return console.log('err', err); }
      console.log('created', protips.length, 'protips');
      process.exit();
    });
  }
});
