//-------------------------------SetSizeDisplay-----------------------------------------------//
function overview(){
  var menu = document.getElementById("main_menu");
  var windowHeight = window.innerHeight;
  var tam = windowHeight - menu.offsetHeight;
  tam = tam < 525? 525: tam;
  $("header").css("min-height",menu.offsetHeight);
  $("#banner").css("height", tam);
  $("#quem_somos").css("min-height", tam);
  $("#blog").css("min-height", tam);
}
$(document).ready(overview());
window.addEventListener('resize',overview);


//-------------------Função que da transparência ao menu ------------------//
$(window).scroll(function(){
  var sc = $(document).scrollTop();
  var nav =   document.getElementById("main_menu");
  if(sc > 70){
    nav.classList.add("scroll");
  }else{
    nav.classList.remove("scroll");
  }
});

//---------------------------Carousel------------------------------------//
$('.owl-carousel').owlCarousel({
  loop: true,
  items:1,
  margin: 1,
  autoplay:true,
  autoplayTimeout: 3000,
  autoplayHoverPause:true,
})