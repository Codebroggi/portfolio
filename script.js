//Navi transparent at scrolling down
$(window).scroll(function() 
                 {
    if ($(window).scrollTop() > 15) {
        $('nav').addClass('navileiste');   
    } else {
        $('nav').removeClass('navileiste');
    }
});

//Navi black when collapsed
$(window).resize(function(){
  if($(window).width()<768){
    $('.navbar.navbar-dark').css('background-color','black');
  }
  else
  {
    $('.navbar.navbar-dark').css('background-color','rgba(0,0,0,0.0)');
  }
});

//smooth scrolling
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});