$(document).ready(function() {
  $('.toggle-menu').click(function() {
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
  });
});