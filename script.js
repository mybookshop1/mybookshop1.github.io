$(document).ready(function(){

   $('.tema2').addClass('tema2_d'); 
    $('.tema3').addClass('tema3_d'); 
    $('.tema4').addClass('tema4_d'); 
    $('.tema5').addClass('tema5_d'); 
     $('.tema6').addClass('tema6_d');
     $('.tema7').addClass('tema7_d');
     $('.tema8').addClass('tema8_d');
     $('.tema9').addClass('tema9_d');
    
$('.menu-btn').on('click', function(a) {
  a.preventDefault();
    $(this).toggleClass('menu-btn_active');
  $('.menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
});
    
    
      $('#tema1').on('click', function(a) {
  a.preventDefault();
    $('.tema1').removeClass('tema1_d'); 
    $('.tema2').addClass('tema2_d'); 
    $('.tema3').addClass('tema3_d'); 
    $('.tema4').addClass('tema4_d'); 
    $('.tema5').addClass('tema5_d'); 
     $('.tema6').addClass('tema6_d');
     $('.tema7').addClass('tema7_d');
     $('.tema8').addClass('tema8_d');
     $('.tema9').addClass('tema9_d');
    });
    
    
    $('#tema2').on('click', function(a) {
  a.preventDefault();
    $('.tema1').addClass('tema1_d'); 
    $('.tema2').removeClass('tema2_d'); 
    $('.tema3').addClass('tema3_d'); 
    $('.tema4').addClass('tema4_d'); 
    $('.tema5').addClass('tema5_d'); 
     $('.tema6').addClass('tema6_d');
     $('.tema7').addClass('tema7_d');
     $('.tema8').addClass('tema8_d');
     $('.tema9').addClass('tema9_d');
    });
    
       $('#tema3').on('click', function(a) {
  a.preventDefault();
    $('.tema1').addClass('tema1_d'); 
    $('.tema2').addClass('tema2_d'); 
    $('.tema3').removeClass('tema3_d'); 
    $('.tema4').addClass('tema4_d'); 
    $('.tema5').addClass('tema5_d'); 
     $('.tema6').addClass('tema6_d');
     $('.tema7').addClass('tema7_d');
     $('.tema8').addClass('tema8_d');
     $('.tema9').addClass('tema9_d');
    });
    
    
        $('#tema4').on('click', function(a) {
  a.preventDefault();
    $('.tema1').addClass('tema1_d'); 
    $('.tema2').addClass('tema2_d'); 
    $('.tema3').addClass('tema3_d'); 
    $('.tema4').removeClass('tema4_d'); 
    $('.tema5').addClass('tema5_d'); 
     $('.tema6').addClass('tema6_d');
     $('.tema7').addClass('tema7_d');
     $('.tema8').addClass('tema8_d');
     $('.tema9').addClass('tema9_d');
    });
    
        $('#tema5').on('click', function(a) {
  a.preventDefault();
    $('.tema1').addClass('tema1_d'); 
    $('.tema2').addClass('tema2_d'); 
    $('.tema3').addClass('tema3_d'); 
    $('.tema4').addClass('tema4_d'); 
    $('.tema5').removeClass('tema5_d'); 
     $('.tema6').addClass('tema6_d');
     $('.tema7').addClass('tema7_d');
     $('.tema8').addClass('tema8_d');
     $('.tema9').addClass('tema9_d');
    });
        
            $('#tema6').on('click', function(a) {
  a.preventDefault();
    $('.tema1').addClass('tema1_d'); 
    $('.tema2').addClass('tema2_d'); 
    $('.tema3').addClass('tema3_d'); 
    $('.tema4').addClass('tema4_d'); 
    $('.tema5').addClass('tema5_d'); 
     $('.tema6').removeClass('tema6_d');
     $('.tema7').addClass('tema7_d');
     $('.tema8').addClass('tema8_d');
     $('.tema9').addClass('tema9_d');
    });
    
            $('#tema7').on('click', function(a) {
  a.preventDefault();
    $('.tema1').addClass('tema1_d'); 
    $('.tema2').addClass('tema2_d'); 
    $('.tema3').addClass('tema3_d'); 
    $('.tema4').addClass('tema4_d'); 
    $('.tema5').addClass('tema5_d'); 
     $('.tema6').addClass('tema6_d');
     $('.tema7').removeClass('tema7_d');
     $('.tema8').addClass('tema8_d');
     $('.tema9').addClass('tema9_d');
    });
    
            $('#tema8').on('click', function(a) {
  a.preventDefault();
    $('.tema1').addClass('tema1_d'); 
    $('.tema2').addClass('tema2_d'); 
    $('.tema3').addClass('tema3_d'); 
    $('.tema4').addClass('tema4_d'); 
    $('.tema5').addClass('tema5_d'); 
     $('.tema6').addClass('tema6_d');
     $('.tema7').addClass('tema7_d');
     $('.tema8').removeClass('tema8_d');
     $('.tema9').addClass('tema9_d');
    });
    
            $('#tema9').on('click', function(a) {
  a.preventDefault();
    $('.tema1').addClass('tema1_d'); 
    $('.tema2').addClass('tema2_d'); 
    $('.tema3').addClass('tema3_d'); 
    $('.tema4').addClass('tema4_d'); 
    $('.tema5').addClass('tema5_d'); 
     $('.tema6').addClass('tema6_d');
     $('.tema7').addClass('tema7_d');
     $('.tema8').addClass('tema8_d');
     $('.tema9').removeClass('tema9_d');
    });
    
});
