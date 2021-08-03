// Delay fade in on hero 
$('document').ready(function() {
     $('#hero-h1').hide().fadeIn(1500)
     $('#hero-h2').hide().fadeIn(2000)

})

// navbar collapse after click on mobile
$(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

