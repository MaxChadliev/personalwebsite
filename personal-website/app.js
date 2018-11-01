
$(document).ready(function() {
  $('.has-animation').each(function(index) {
    $(this).delay($(this).data('delay')).queue(function(){
      $(this).addClass('animate-in');
    });
  });
});




$(document).ready(function () {
  var classClicked = 'clicked';
  $('.card-flip').click(function () {
    if ($(this).hasClass(classClicked)) {
      $(this).removeClass(classClicked);
    }
    else {
      $(this).addClass(classClicked);
    }
  }).mouseleave(function () {
    $(this).removeClass(classClicked);
  });
})

  ;



