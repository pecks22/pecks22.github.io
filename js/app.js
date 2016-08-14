
$(document).ready (function () {

  

    $('#burger').click( function() {
  $('#hiddendiv').slideToggle();

  });

 


    $('.row').click(function () {

      $(this).addClass('clicked');
      console.log('clicked')
      $("wrapper:not(this)").removeClass('clicked');
      $('clicked').find('.wrapper').slideToggle();

    /*$('.wrapper').css('display','none');
    $(this).find('.wrapper').slideToggle();
    }); */

  });
    
      });
  
