$(document).ready(function() {
  $(".avatar").click(function() {
      $('html,body').animate({
          scrollTop: $(".avatarspace").offset().top},
          'slow');
  })
});
