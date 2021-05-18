$(document).ready(function(){
    var region = $(".region");
  
    region.mouseenter(function(){
      $(this).fadeTo("fast", 0.5);
    });
  
    region.mouseleave(function(){
      $(this).fadeTo("fast", 1);
    })
  
  });