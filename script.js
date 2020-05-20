$(document).ready(function(){
    
    $('.books1').addClass('active');
    $('.books2').addClass('big_right');
    $('.books3').addClass('big_left');
    $('.books4').addClass('lit_rig');
    $('.books5').addClass('lit_lef');
   
    $('.text1').addClass('text_ac');
    
    var i=0;
    $('.butnext').on('click', function(e) {
  e.preventDefault();
     i++;
        
    if (i==1) {
            
    $('.books1').removeClass('active');
    $('.books2').removeClass('big_right');
    $('.books3').removeClass('big_left');
    $('.books4').removeClass('lit_rig');
    $('.books5').removeClass('lit_lef'); 
            
    $('.books1').addClass('big_left');
    $('.books2').addClass('active');
    $('.books3').addClass('lit_lef');
    $('.books4').addClass('big_right');
    $('.books5').addClass('lit_rig'); 
       
         $('.text1').removeClass('text_ac');
        $('.text2').addClass('text_ac');

}
        else if (i==2) {
    $('.books1').removeClass('big_left');
    $('.books2').removeClass('active');
    $('.books3').removeClass('lit_lef');
    $('.books4').removeClass('big_right');
    $('.books5').removeClass('lit_rig');     
            
    $('.books1').addClass('lit_lef');
    $('.books2').addClass('big_left');
    $('.books3').addClass('lit_rig');
    $('.books4').addClass('active');
    $('.books5').addClass('big_right'); 
            $('.text1').removeClass('text_ac');
        $('.text2').removeClass('text_ac');
            $('.text3').addClass('text_ac');
           
 }
    else if (i==3) {
    $('.books1').removeClass('lit_lef');
    $('.books2').removeClass('big_left');
    $('.books3').removeClass('lit_rig');
    $('.books4').removeClass('active');
    $('.books5').removeClass('big_right');    
        
    $('.books1').addClass('lit_rig');
    $('.books2').addClass('lit_lef');
    $('.books3').addClass('big_right');
    $('.books4').addClass('big_left');
    $('.books5').addClass('active');  
        
            $('.text1').removeClass('text_ac');
        $('.text2').removeClass('text_ac');
            $('.text3').removeClass('text_ac');
        $('.text4').addClass('text_ac');
      
        
    }
      
       else if (i==4) {  
    $('.books1').removeClass('lit_rig');
    $('.books2').removeClass('lit_lef');
    $('.books3').removeClass('big_right');
    $('.books4').removeClass('big_left');
    $('.books5').removeClass('active');
           
    $('.books1').addClass('big_right');
    $('.books2').addClass('lit_rig');
    $('.books3').addClass('active');
    $('.books4').addClass('lit_lef');
    $('.books5').addClass('big_left');     
          $('.text1').removeClass('text_ac');
        $('.text2').removeClass('text_ac');
            $('.text3').removeClass('text_ac');
        $('.text4').removeClass('text_ac');
           $('.text5').addClass('text_ac');
    }
        else if (i==5) {
          i=-1;
    }

     else if (i==0) {
    $('.books1').removeClass('big_right');
    $('.books2').removeClass('lit_rig');
    $('.books3').removeClass('active');
    $('.books4').removeClass('lit_lef');
    $('.books5').removeClass('big_left');     
             
    $('.books1').addClass('active');
    $('.books2').addClass('big_right');
    $('.books3').addClass('big_left');
    $('.books4').addClass('lit_rig');
    $('.books5').addClass('lit_lef'); 
          $('.text3').removeClass('text_ac');
        $('.text2').removeClass('text_ac');
            $('.text4').removeClass('text_ac');
        $('.text5').removeClass('text_ac');
           $('.text1').addClass('text_ac');
       
         };
        
    });
    
});