console.log ('app.js is linked!');
var allProTips = [];

$(document).ready(function() {
  $voteList = $('#voteWrapper');

  $.ajax({
    method:'GET',
    url: '/api/protips',
    dataType: 'json',
    success: onSuccess,
    error: error
  });

});

function render () {
  var source = $('#voteTile').html();
  var template = Handlebars.compile(source);
  var votesHtml = template({ proTipVote: allProTips });
  $voteList.empty();
  $voteList.append(votesHtml);
  }

function onSuccess() {
  allProTips = json;
  render();
}

function error(error) {
   console.log(error);
}
