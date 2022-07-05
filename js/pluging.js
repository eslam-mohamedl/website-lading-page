// slide down for elemen down botton but element be hide for on slide down(speed, callback)

// slide up for elemen up top up but element be show for on slide up(speed, callback)


// fadetoggle for down  or up element if up it down and if  down it up fadetoggle(speed,callback)


var mybutton = document.getElementById("btn-up");

window.onscroll = function(){

  if(window.pageYOffset > 1200){


    mybutton.style.display = "block";
  }
  else{
    mybutton.style.display = "none";
  
  }
}
mybutton.onclick = function(){

  window.scrollTo(0,0);
}


$(document).ready(function(){

 $(".queries .box-contaienr .box ").click(function(){

   $("#zero").slideToggle(400);
 });

});

var mylink = document.getElementById("links");
var check = document.getElementById("checkbtn")

$("#checkbtn").click(function(){


 
    $(" header .navbar .contant .links").toggle(1000);
})

// smooth scroll to section
$(".links li a").click(function(){
      
  $('html, body').animate({
      
     scrollTop: $('#' + $(this).data('cool')).offset().top 
      
  }, 1000);  

  });


  var close = document.getElementById("close");
  var video = document.getElementById("video");
var button = document.getElementById("on-button");
var turn = document.getElementById("turn");



button.onclick = function(){

  turn.style.display = 'block';

}


  close.onclick = function(){

    video.style.display = "none";
    close.style.display ="none";


  }

