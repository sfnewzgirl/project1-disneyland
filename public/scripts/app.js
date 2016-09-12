console.log ('app.js is linked!');
var allProTips = [];
var protips;
var $voteList;
var source;
var template;
// var protipId;

$(document).ready(function() {
  source = $('#voteTile').html();
  template = Handlebars.compile(source);

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

  $('body').on('submit', '.form-create-comment', submitCommentForm);

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
    success: deleteTipSuccess,
    error: error,
  });
};

function deleteTipSuccess (json) {
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
};

function newProTipSuccess (json) {
  // $('.newProTipForm input').val('');
  console.log('new ProTip created', json);
  allProTips.push(json);
  render();
}

function render () {
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
  console.log($(this).attr('data-id'));
  $.ajax({
   method: 'PUT',
   url: '/api/protips/'+$(this).attr('data-id'),
   dataType: 'json',
   data: {voteStatus: 'up'},
   success: onSuccessVote,
   error: error
 });
}

function downVote (event) {
  console.log('you pressed down');
  console.log($(this).attr('data-id'));
  $.ajax({
    method: 'PUT',
    url: '/api/protips/'+$(this).attr('data-id'),
    dataType: 'json',
    data: {voteStatus: 'down'},
    success: onSuccessVote,
    error: error
  });
}

function onSuccessVote (json){
  console.log(json);
  var proTip = json;
  var proTipId = proTip._id;
  for(var index = 0; index < allProTips.length; index++){
    if(allProTips[index]._id === proTipId){
      allProTips.splice(index, 1, json);
      break;
    }
  }
  render();
}

function showCommentForm (event) {
  console.log('show comment form');
  var currentProTipId = $(this).data('protip-id');
  var $commentForm = $('#commentForm' + currentProTipId);
  console.log(currentProTipId);
  $commentForm.show();
}

function submitCommentForm (event) {
  event.preventDefault();
  console.log('comment submitted');
  var $commentForm = $(this).closest("form");
  var $commentField = $commentForm.find('.comment-body');
  var commentToPost = {
      commentBody: $commentField.val()
   };
  var protipId = $(this).data('protip-id');
  console.log(protipId);
  console.log(commentToPost);
  var commentUrl = '/api/protips/' + protipId +'/comments';

  $.post(commentUrl, commentToPost, function(data) {
    console.log(commentToPost);
    //clears form and hids form
    $commentField.val('');
    $commentForm.hide();

    //update the protip
    $.get('/api/protips/' + protipId, function(json) {
      console.log(json);
      var proTip = json;
      var proTipId = proTip._id;
      for(var index = 0; index < allProTips.length; index++){
        if(allProTips[index]._id === proTipId){
          allProTips.splice(index, 1, json);
          break;
        }
      }
      render();
    });
  });
}
