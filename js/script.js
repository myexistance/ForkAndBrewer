


$(document).ready(function(){
 $("#about").click(function (){
              $('html, body').animate({
                  scrollTop: $(".about").offset().top-50
              }, 800);
          });
 $("#food").click(function (){
              $('html, body').animate({
                  scrollTop: $(".food").offset().top-50
              }, 800);
          });
 $("#beer").click(function (){
              $('html, body').animate({
                  scrollTop: $(".beer").offset().top-55
              }, 800);
          });
 $("#information").click(function (){
              $('html, body').animate({
                  scrollTop: $(".information").offset().top-55
              }, 800);
          });

/* hide nav container */


 // $("#about").click(function (){
 //              $(".nav_container").hide()
 //              $(".header").css("height": "110px" )
 //          });
 // $("#food").click(function (){
 //              $(".nav_container").hide()
 //          });
 // $("#beer").click(function (){
 //              $(".nav_container").hide()
 //          });
 // $("#information").click(function (){
 //              $(".nav_container").hide()
 //          });

 // $("#about").click(function (){
 //              $(".nav_container").show()
 //          });
 // $("#food").click(function (){
 //              $(".nav_container").show()
 //          });
 // $("#beer").click(function (){
 //              $(".nav_container").show()
 //          });
 // $("#information").click(function (){
 //              $(".nav_container").show()
 //          });

 });