$(document).ready(function () {

  $('.open').on('click', function () {
    $('.gnav').toggleClass('is-show');
    $(this).css("display", "none");
    $('.close').css("display", "block");
   
  });
  $('.close').on('click', function () {
    $('.gnav').toggleClass('is-show');
    $(this).css("display", "none");
    $('.open').css("display", "block");
   
});
})