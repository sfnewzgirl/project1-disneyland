console.log ('app.js is linked!');
var allProTips = [];
var protips;
var $voteList;
var protipId;


$(document).ready(function() {

  $voteList = $('#voteWrapper');

  $.ajax({
    method:'GET',
    url: '/api/protips',
    dataType: 'json',
    success: onSuccess,
    error: error
  });

  $('body').on('click', '.upbutton', upVote);

  $('body').on('click', '.downbutton', downVote);

  $('#newProTipForm').on('submit', submitNewProTip);

  $('.protipList').on('click', '.btn-danger', deleteProTip);

  $('body').on('click', '.comment-button', showCommentForm);

  $('body').on('click', '.delete-button', deleteProTip);

});

//this is nod, it handles front-end validation
function nodInit () {
  console.log('nod active')
    var myNod = nod();

    nod.classes.successClass = 'has-success';
    nod.classes.errorClass = 'has-error';

    myNod.configure({
        jQuery: $,
        submit: '#SubmitProTip',
        disableSubmit: true,
    });

    myNod.add([{
        selector: '#ProTipTitle',
        validate: 'presence',
        errorMessage: 'Please enter a title for your ProTip'
    }, {
        selector: '#ProTipDescription',
        validate: 'presence',
        errorMessage: 'Please describe your ProTip'
    }]);
}


function deleteProTip (event) {
  console.log('delete button clicked for: ' + $(this).attr('data-id'));
  $.ajax({
    method: 'DELETE',
    url: 'api/protips/' + $(this).attr('data-id'),
    success: deleteTip,
    error: error,
  });
  location.reload();
};

function deleteTip (json) {
  var proTip = json;
  var proTipId = proTip._id;
  console.log('delete show ', proTipId);
  for(var index = 0; index < allProTips.length; index++){
    if(allProTips[index]._id === proTipId){
      allProTips.splice(index, 1);
      break;
    }
  }
  render();
}

function submitNewProTip (event) {
  event.preventDefault();
  console.log('new protip serialized', $(this).serialize());
  $.ajax({
    method: 'POST',
    url: '/api/protips',
    data: $(this).serialize(),
    success: newProTipSuccess,
    error: error
  });
  location.reload();
};

function newProTipSuccess (json) {
  console.log('new ProTip created');
  allProTips = json;
  render([allProTips]);
}

function render () {
  var source = $('#voteTile').html();
  var template = Handlebars.compile(source);
  var votesHtml = template({ proTipVote: allProTips });
  // $voteList.empty();
  $voteList.append(votesHtml);
  }

function onSuccess(json) {
  allProTips = json;
  render(allProTips);
}

function error(error) {
   console.log(error);
}

function upVote (event) {
  console.log('you pressed up');
  console.log($(this).attr('data-id'));
  $.ajax({
   method: 'PUT',
   url: '/api/protips/'+$(this).attr('data-id'),
   dataType: 'json',
   data: {voteStatus: 'up'},
   success: onSuccess,
   error: error
 });
 location.reload();
}

function downVote (event) {
  console.log('you pressed down');
  console.log($(this).attr('data-id'));
  $.ajax({
    method: 'PUT',
    url: '/api/protips/'+$(this).attr('data-id'),
    dataType: 'json',
    data: {voteStatus: 'down'},
    success: onSuccess,
    error: error
  });
  location.reload();
}

function showCommentForm (event) {
  console.log('show comment form');
  // event.preventDefault();
  // $('.protipList'+$(this).attr('data-id')).show();
}

function deleteProTip (event) {
  console.log('delete protip');
}
