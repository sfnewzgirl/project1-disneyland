console.log ('app.js is linked!');

// function render () {
//   var votesHtml = template({ shows: allShows});
//   $voteList.empty();
//   $voteList.append(votesHtml);
// }

function upSuccess(json) {
  allProTips = json;
  $voteList = $('#voteWrapper');
  var source = $('#voteTile').html();
  var template = Handlebars.compile(source);
  var votesHtml = template({ proTipVote: allProTips });
  // $voteList.empty();
  $voteList.append(votesHtml);
};

function upError(error) {
   console.log(error);
};

function downError () {
  console.log(error);
};

function upVote () {
  console.log('you pressed up');
  $.ajax({
    method: 'PUT',
    url: '/api/protips/:id',
    dataType: 'text',
    success: upSuccess,
    error: upError
  });
};

function downVote () {
  console.log('you pressed down');
  $.ajax({
    method: 'PUT',
    url: '/api/protips/:id',
    dataType: 'text',
    success: downSuccess,
    error: downError
  });
}

function clicker(){
  var count = parseInt($("~ .count", this).text()); //this will be the variable that holds our count
  if($(this).hasClass("up")) {
    var count = count + 1;

     $("~ .count", this).text(count);
  } else {
    var count = count - 1;
     $("~ .count", this).text(count);
  }

    var postCalc = count;
    console.log(postCalc);

  $(this).parent().addClass("bump"); // animation on the upvote every 400ms

  setTimeout(function(){
    $(this).parent().removeClass("bump");
  }, 400);
}



///list of all of my listeners that will be active
// $(document).ready(function() {
function init() {
  console.log('init is active');
  $.ajax({
    method:'GET',
    url: '/api/protips',
    dataType: 'json',
    success: upSuccess,
    error: upError
  });

  $voteList = $('#voteWrapper');

  var source = $('#voteTile').html();
  // console.log(source);
  var template = Handlebars.compile(source);

  // console.log(template);

  // upSuccess();
  $(".increment").on('click', clicker);

  $('.up').on('click', upVote);

  $('.down').on('click', downVote);
};
// };
