console.log ('app.js is linked!');
var allProTips = [];
var $voteList;

$(document).ready(function() {
  $voteList = $('#voteWrapper');

  $.ajax({
    method:'GET',
    url: '/api/protips',
    dataType: 'json',
    success: onSuccess,
    error: error
  });

  $('body').on('click', '.up-button', upVote);

  $('body').on('click', '.down-button', downVote);

  //  $voteList.on('click', '.up-button', function(event) {
  //    event.preventDefault();
  //   // $.ajax({
  //   //   method: 'PUT',
  //   //   url: '/api/careers/:id',
  //   //   dataType: 'text',
  //   //   success: onSuccess,
  //   //   error:  error
  //   // });
  //  });

});

function render () {
  var source = $('#voteTile').html();
  var template = Handlebars.compile(source);
  var votesHtml = template({ proTipVote: allProTips });
  $voteList.empty();
  $voteList.append(votesHtml);
  }

function onSuccess(json) {
  allProTips = json;
  render();
}

function error(error) {
   console.log(error);
}

function upVote () {
  console.log('you pressed up');
//   $.ajax({
//     method: 'PUT',
//     url: '/api/protips/:id',
//     dataType: 'text',
//     success: upSuccess,
//     error: upError
//   });
 }

function downVote () {
  console.log('you pressed down');
  // $.ajax({
  //   method: 'PUT',
  //   url: '/api/protips/:id',
  //   dataType: 'text',
  //   success: downSuccess,
  //   error: downError
  // });
}
