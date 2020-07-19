$('.menu-btn').on('click', function(a) {
  a.preventDefault();
    $(this).toggleClass('menu-btn_active');
  $('.menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
});

$('#grgf').on('click', function(a) {
  a.preventDefault();
     $('.districtts').removeClass('districtts_active');
     $('.districtgr').addClass('districtgr_active');
    $('.districtrg').removeClass('districtrg_active');
    });

$('#rgrbrn').on('click', function(a) {
  a.preventDefault();
     $('.districtts').removeClass('districtts_active');
     $('.districtgr').removeClass('districtgr_active');
    $('.districtrg').addClass('districtrg_active');
    });

$('#tptc').on('click', function(a) {
  a.preventDefault();
     $('.districtts').addClass('districtts_active');
     $('.districtgr').removeClass('districtgr_active');
    $('.districtrg').removeClass('districtrg_active');
    });