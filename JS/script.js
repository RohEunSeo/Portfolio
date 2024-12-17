$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
    }
  })
});

$('.menu-btn').click(function(){
  $('.navbar .menubar').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});

//typing animation
var typed = new Typed(".typing1", {
  strings: ["About me", "my Activity", "my Language", "my Social media", "my Project"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var typed = new Typed(".typing0", {
  strings: ["Eunseo Roh"],
  typeSpeed: 100,
  backSpeed: 60,
});


var typed = new Typed(".typing2", {
  strings: [ "Sungshin Women's University", "AI convergence"],
  typeSpeed: 100,
  backSpeed: 60,
  loop : true
});

var typed = new Typed(".typing3", {
  strings: ["cpp, python, java, html, css"],
  typeSpeed: 100,
  backSpeed: 60,
  loop : true
});

var typed = new Typed(".typing4", {
  strings: ["2003.07.15"],
  typeSpeed: 100,
  backSpeed: 60,
  loop : true
});




