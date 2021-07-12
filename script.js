
$(document).ready(function(){
 $(window).scroll(function(){
   if(this.scrollY > 20){
       $('.navbar').addClass('sticky');
   }
   else{
    $('.navbar').removeClass('sticky');
   }
 });
  


  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });
  
  // typing animation
  var typed = new Typed(".typing",{
    strings: ["web developer", "programmer","designer", "freelancer"],
    typeSpeed : 90,
    backSpeed : 45,
    loop:true
  })
  var typed = new Typed(".typing-2",{
    strings: ["web developer", "programmer","designer", "freelancer"],
    typeSpeed : 90,
    backSpeed : 45,
    loop:true
  })
 

});