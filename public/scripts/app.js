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

function upVote (event) {
  console.log('you pressed up');
  event.preventDefault();
  $.ajax({
   method: 'PUT',
   url: '/api/protips/'+$(this).attr('data-id'),
   dataType: 'json',
   success: onSuccess,
   error: error
 });
 }

function downVote (event) {
  console.log('you pressed down');
  event.preventDefault();
  $.ajax({
    method: 'PUT',
    url: '/api/protips/'+$(this).attr('data-id'),
    dataType: 'json',
    success: onSuccess,
    error: error
  });
}
