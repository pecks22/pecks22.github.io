
$(document).ready (function () {

  

    $('#burger').click( function() {
  $('#hiddendiv').slideToggle();

  });

 


    $('.row').click(function () {

      $('.row').find('.wrapper').removeClass('clicked');
      $(this).find('.wrapper').addClass('clicked');
      $('clicked').find('.wrapper').slideToggle();


     /* $(this).find('.wrapper').addClass('clicked');
      console.log('clicked')

      :not(this).removeClass('clicked');
      $('clicked').find('.wrapper').slideToggle();

    /*$('.wrapper').css('display','none');
    $(this).find('.wrapper').slideToggle();
    }); */

  });
    
      });
  
