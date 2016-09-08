console.log ('app.js is linked!')

function clicker(){
  var count = parseInt($("~ .count", this).text());

  if($(this).hasClass("up")) {
    var count = count + 1;

     $("~ .count", this).text(count);
  } else {
    var count = count - 1;
     $("~ .count", this).text(count);
  }

  $(this).parent().addClass("bump"); // animation on the upvote ever 400ms

  setTimeout(function(){
    $(this).parent().removeClass("bump");
  }, 400);
}

function init() {
  $(".increment").click(clicker);
}
