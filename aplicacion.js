$(document).ready(function(){
    var region = $(".region");
  
    region.mouseenter(function(){
      var titleComuna = $(this).attr("title");
      $("#nombre").text(titleComuna);
      $(this).css('fill', '#689f38');
    });
  
    region.mouseleave(function(){
      $("#nombre").text("Región");
      $(this).css('fill', '#aaa7a7');
    })
  
  });

$(document).ready(function(){
  var logo = $(".foto2");
  
  logo.mouseenter(function(){
    $(this).css('background-color', '#689f38');
    $(this).css('fill', '#292929');
  });
  
  logo.mouseleave(function(){
    $(this).css('background-color', '#292929');
    $(this).css('fill', '#689f38')
  })

  logo.click(function(){
    $("#info").show();
  });
  
});



 

 
