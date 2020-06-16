$(document).ready(function(){

  // $('html,body').stop().animate({'scrollTop':0},1500,"swing");

  var Li = $('.scrollNavi li');

  $(window).on('scroll',function(){
    var scroll = $(this).scrollTop();
    // $('h1').text(scroll);
    for(var i =0; i <5; i++){
      $('section>article').eq(i).css({'transform':'translateZ('+parseInt((-5000*i)+scroll)+'px)'});
        if(scroll >= i*5000 && scroll <(i+1)*5000){
          Li.removeClass();
          Li.eq(i).addClass('on');
          $('article').removeClass();
          $('article').eq(i).addClass('on');
      }
    };
  });
  Li.on('click',function(){
    var i = $(this).index();
    $('html,body').stop().animate({'scrollTop':i*5000},1500,"swing");
  });

  $('body').on('mousemove',function(e){
    var posX = e.pageX/200;
    var posY = e.pageY/650;

    $('.obj11').css({'bottom': -100 - posY, 'left':-190 + posX})
    $('.obj13').css({'bottom': 20 - posY, 'left':-170 + posX})

    $('.obj21').css({'bottom': -20 - posY, 'right': 120 + posX})
    $('.obj22').css({'bottom': -80 - posY, 'right':-250 + posX})
  
    $('.obj31').css({'bottom': 120 - posY, 'right': 0 + posX})
    $('.obj32').css({'bottom': -50 + posY, 'left': -50 - posX})

    $('.obj41').css({'top': -230 - posY, 'left':400 + posX})
    $('.obj43').css({'top': 160 - posY,'right': -160 + posX})

    $('.obj51').css({'bottom': -90 - posY, 'left':-100 - posX})
    $('.obj53').css({'bottom': 80 - posY, 'left':-200 + posX})
  });
});















