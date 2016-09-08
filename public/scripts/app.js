console.log ('app.js is linked!')

function clicker(){
  var count = parseInt($("~ .count", this).text()); //this will be the variable that holds our count
  if($(this).hasClass("up")) {
    var count = count + 1;

     $("~ .count", this).text(count);
  } else {
    var count = count - 1;
     $("~ .count", this).text(count);
  }
    console.log(count);

  $(this).parent().addClass("bump"); // animation on the upvote every 400ms

  setTimeout(function(){
    $(this).parent().removeClass("bump");
  }, 400);
}



///list of all of my listeners that will be active
function init() {
  $(".increment").click(clicker);
}
