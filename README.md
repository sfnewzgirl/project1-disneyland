# Project 1

## Objective

Build an API that offers theme park visitors easy access to trip planning and advice they can't easily get elsewhere. While many books, websites and apps explain rides, attractions and services (many even rate those), inevitably the best advice comes from another park visitor who has been there many times before and has a wealth of knowledge in their head.

ProTips crowdsources the best advice and information for visitors all in one place. Users can read ProTips, write their own, and vote up or vote down a specific ProTip. Users can also comment on a ProTip to add their spin, additional information or even let other users know that ProTip is now outdated.

![alt text](public/images/disneyland-app-screenshot.png)

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

A core feature of ProTips is a user's ability to up vote or down vote a ProTip. We did this with three key steps. We used Sass to create an interactive button, split into an up and down vote. Then we created an AJAX call on the event listener that sent a dataType directly to the server.

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
Next we create a function on the server that edited the tipScore based on the user's button click. Allowing the user to edit an attribute and save it on the database.

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

ProTips Wireframe

## Future Ideas
Create an API for more parks.
Expand vote up and vote down feature to rides, individual attractions, etc.
