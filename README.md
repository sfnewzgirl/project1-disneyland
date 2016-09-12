# Project 1

## Objective

api that offered disneyland visitors information they cant easily get elsewhere

triumphs - voting
challenges, words of wisdom -
Andrew Sass
Misha embedded comments forms

add screenshot

## Links

Live URL:

GitHub Repository:

## Technologies Used
* HTML, CSS, JavaScript, jQuery
* Node.js, Express, MongoDB, Mongoose
* Sass, Bootstrap
* Nod.js (front-end validation)
* Handlebars, AJAX
* Heroku

## Code Examples

Adding dataType to AJAX call

```
function upVote (event) {
  $.ajax({
   method: 'PUT',
   url: '/api/protips/'+$(this).attr('data-id'),
   dataType: 'json',
   data: {voteStatus: 'up'},
   success: onSuccessVote,
   error: error
 });
}
```
Server function to edit voteScore

```
app.put('/api/protips/:id', function (req, res) {
  db.ProTip.findOne({_id: req.params.id}, function(err, selectedProTip) {
      if (req.body.voteStatus == 'up') {
        selectedProTip.tipScore = selectedProTip.tipScore + 1;
      } else if (req.body.voteStatus == 'down') {
        selectedProTip.tipScore = selectedProTip.tipScore - 1;
      };
    selectedProTip.save(function (err, updatedTipScore) {
      if (err) {return console.log(err);}
      res.json(updatedTipScore);
    });
  });
});
```

## Wireframes

text

## Future Ides
Create an API for more parks.
Expand vote up and vote down feature to rides, individual attractions, etc.
