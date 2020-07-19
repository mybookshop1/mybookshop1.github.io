$('.menu-btn').on('click', function(a) {
  a.preventDefault();
    $(this).toggleClass('menu-btn_active');
  $('.menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
});