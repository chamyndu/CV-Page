$(document).ready(function() {
  $(".avatar").click(function() {
      $('html,body').animate({
          scrollTop: $(".av").offset().top},
          'slow');
  })
});
