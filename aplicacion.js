



$(document).ready(function(){
    var region = $(".region");
  
    region.mouseenter(function(){
      var titleComuna = $(this).attr("title");
      $("#nombre").text(titleComuna);
      $(this).fadeTo("fast", 0.5);
      var dataRegion = $(this).attr("data");
      var listadata = dataRegion.split(",")
      $("#resumen_solar").text(listadata[0]);
      $("#resumen_eolica").text(listadata[1]);
      $("#resumen_hidro").text(listadata[2]);
      $("#resumen").css('display','block');
      $("#resumen").css('top',parseInt(window.event.pageY + 10) + "px");
      $("#resumen").css('left',parseInt(window.event.pageX + 10) + "px");
    });
  
    region.mouseleave(function(){
      $("#nombre").text("Seleccione una Región");
      $("#resumen_solar").text("");
      $("#resumen_eolica").text("");
      $("#resumen_hidro").text("");
      $(this).fadeTo("fast", 1);
      $("#resumen").css('display','none');
    });

    region.click(function(){
      $("#porregion").show();
      $("#parametro1").css('margin-top', '360px');
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
    $(this).css('fill', '#689f38');
  })

  logo.click(function(){
    $("#info1").show();
    $("#info3").hide();
    $("#info2").hide();
    $("#info1_termo").hide();
    $("#info1_foto").hide();
    $("#info2_horizontal").hide();
    $("#info2_vertical").hide();
    $("#info3_embalse").hide();
    $("#info3_pasada").hide();
    $("#info3_bombeo").hide();
    $("#parametro1").show();
    $("#num1").text("([5.603-6.99])");
    $("#num2").text("([4.216 - 5.603])");
    $("#num3").text("([2.83 - 4.216])");
    $(".region").each(function(){
      var dataRegion = $(this).attr("data");
      var listadata = dataRegion.split(",");
      var sol = parseFloat(listadata[0]);
      if (sol<=4.21666666){
        $(this).css('fill', '#c5e2ac');
      }else if (sol<=5.6033333 && sol>4.21666666){
        $(this).css('fill', '#689f38');
      }else if (sol<=6.99 && sol>5.6033333){
        $(this).css('fill', '#406222');
      };
    }); 
  });
  
});

$(document).ready(function(){
  var logo = $(".foto3");
  
  logo.mouseenter(function(){
    $(this).css('background-color', '#689f38');
    $(this).css('fill', '#292929');
  });
  
  logo.mouseleave(function(){
    $(this).css('background-color', '#292929');
    $(this).css('fill', '#689f38');
  })

  logo.click(function(){
    $("#info2").show();
    $("#info1").hide();
    $("#info3").hide();
    $("#info1_termo").hide();
    $("#info1_foto").hide();
    $("#info2_horizontal").hide();
    $("#info2_vertical").hide();
    $("#info3_embalse").hide();
    $("#info3_pasada").hide();
    $("#info3_bombeo").hide();
    $("#parametro1").show();
    $("#num1").text("([8.16 - 10.2])");
    $("#num2").text("([6.13 - 8.16])");
    $("#num3").text("([4.1 - 6.13])");
    $(".region").each(function(){
      var dataRegion = $(this).attr("data");
      var listadata = dataRegion.split(",");
      var sol = parseFloat(listadata[1]);
      if (sol<=6.133333){
        $(this).css('fill', '#c5e2ac');
      }else if (sol<=8.16666667 && sol>6.133333){
        $(this).css('fill', '#689f38');
      }else if (sol<=10.2 && sol>8.16666667){
        $(this).css('fill', '#406222');
      };
    });
  });
  
});

$(document).ready(function(){
  var logo = $(".foto4");
  
  logo.mouseenter(function(){
    $(this).css('background-color', '#689f38');
    $(this).css('fill', '#292929');
  });
  
  logo.mouseleave(function(){
    $(this).css('background-color', '#292929');
    $(this).css('fill', '#689f38');
  })

  logo.click(function(){
    $("#info3").show();
    $("#info2").hide();
    $("#info1").hide();
    $("#info1_termo").hide();
    $("#info1_foto").hide();
    $("#info2_horizontal").hide();
    $("#info2_vertical").hide();
    $("#info3_embalse").hide();
    $("#info3_pasada").hide();
    $("#info3_bombeo").hide();
    $("#parametro1").show();
    $("#num1").text("([7922.2 - 11883.3])");
    $("#num2").text("([3961.1 - 7922.2])");
    $("#num3").text("([0 - 3961.1])");    
    $(".region").each(function(){
      var dataRegion = $(this).attr("data");
      var listadata = dataRegion.split(",");
      var sol = parseFloat(listadata[2]);
      if (sol<=3961.1){
        $(this).css('fill', '#c5e2ac');
      }else if (sol<=7922.2 && sol>3961.1){
        $(this).css('fill', '#689f38');
      }else if (sol<=11883.3 && sol>7922.2){
        $(this).css('fill', '#406222');
      };
    }); 
  });
  
});

$(document).ready(function(){
  var x = $(".cerrar");
  
  x.mouseenter(function(){
    $(this).css('fill', '#ffffff');
  });
  
  x.mouseleave(function(){
    $(this).css('fill', '#292929');
  });

  x.click(function(){
    $("#info3").hide();
    $("#info2").hide();
    $("#info1").hide();
    $("#info1_termo").hide();
    $("#info1_foto").hide();
    $("#info2_horizontal").hide();
    $("#info2_vertical").hide();
    $("#info3_embalse").hide();
    $("#info3_pasada").hide();
    $("#info3_bombeo").hide();
    $(".region").each(function(){
      $(this).css('fill', '#aaa7a7');
      });
    $("#parametro1").hide();
  });
});


$(document).ready(function(){
  var x = $(".cerrard");
  
  x.mouseenter(function(){
    $(this).css('fill', '#ffffff');
  });
  
  x.mouseleave(function(){
    $(this).css('fill', '#292929');
  });

  x.click(function(){
    $("#caja").hide();
    $(".abrir").show();
  });
  
});

$(document).ready(function(){
  var x = $(".abrir");
  
  x.mouseenter(function(){
    $(this).css('background-color', '#689f38');
    $(this).css('fill', '#292929');
  });
  
  x.mouseleave(function(){
    $(this).css('background-color', '#292929');
    $(this).css('fill', '#689f38');
  })

  x.click(function(){
    $("#caja").show();
    $(".abrir").hide();
  });
  
});


$(document).ready(function(){
  $('.foto1').hover(function() {
      $(this).addClass('transition');
  }, function() {
      $(this).removeClass('transition');
  });
  
});



$(document).ready(function(){
  $('.fotovoltaica').hover(function() {
      $(this).addClass('transition');
  }, function() {
      $(this).removeClass('transition');
  });
  $('.fotovoltaica').click(function(){
    $("#info1").hide();
    $("#info1_foto").show();
  });
});

$(document).ready(function(){
  $('.termosolares').hover(function() {
      $(this).addClass('transition');
  }, function() {
      $(this).removeClass('transition');
  });
  $('.termosolares').click(function(){
    $("#info1").hide();
    $("#info1_termo").show();
  });
});

$(document).ready(function(){
  $('.horizontal').hover(function() {
      $(this).addClass('transition');
  }, function() {
      $(this).removeClass('transition');
  });
  $('.horizontal').click(function(){
    $("#info2").hide();
    $("#info2_horizontal").show();
  });
});

$(document).ready(function(){
  $('.vertical').hover(function() {
      $(this).addClass('transition');
  }, function() {
      $(this).removeClass('transition');
  });
  $('.vertical').click(function(){
    $("#info2").hide();
    $("#info2_vertical").show();
  });
});

$(document).ready(function(){
  $('.embalse').hover(function() {
      $(this).addClass('transition');
  }, function() {
      $(this).removeClass('transition');
  });
  $('.embalse').click(function(){
    $("#info3").hide();
    $("#info3_embalse").show();
  });
});

$(document).ready(function(){
  $('.pasada').hover(function() {
      $(this).addClass('transition');
  }, function() {
      $(this).removeClass('transition');
  });
  $('.pasada').click(function(){
    $("#info3").hide();
    $("#info3_pasada").show();
  });
});

$(document).ready(function(){
  $('.bombeo').hover(function() {
      $(this).addClass('transition');
  }, function() {
      $(this).removeClass('transition');
  });
  $('.bombeo').click(function(){
    $("#info3").hide();
    $("#info3_bombeo").show();
  });
});

$(document).ready(function(){
  var x = $(".cerrart");
  
  x.mouseenter(function(){
    $(this).css('fill', '#ffffff');
  });
  
  x.mouseleave(function(){
    $(this).css('fill', '#292929');
  });

  x.click(function(){
    $("#porregion").hide();
    $("#parametro1").css('margin-top', '200px');
    $(this).fadeTo("fast", 1);
    $("#nombre").text("Seleccione una Región");
  });
  
});

$(document).ready(function(){
  var x = $(".cerrar_parametro");
  
  x.mouseenter(function(){
    $(this).css('fill', '#ffffff');
  });
  
  x.mouseleave(function(){
    $(this).css('fill', '#292929');
  });

  x.click(function(){
    $("#parametro1").hide();
  });
  
});

$(document).ready(function(){
  var x = $(".flechita");
  
  x.mouseenter(function(){
    $(this).css('fill', '#ffffff');
  });
  
  x.mouseleave(function(){
    $(this).css('fill', '#292929');
  });

  x.click(function(){
    $("#info1_termo").hide();
    $("#info1_foto").hide();
    $("#info1").show();
  });
})  


$(document).ready(function(){
  var x = $(".flechita2");
  
  x.mouseenter(function(){
    $(this).css('fill', '#ffffff');
  });
  
  x.mouseleave(function(){
    $(this).css('fill', '#292929');
  });

  x.click(function(){
    $("#info2_horizontal").hide();
    $("#info2_vertical").hide();
    $("#info2").show();
  });
})  

$(document).ready(function(){
  var x = $(".flechita3");
  
  x.mouseenter(function(){
    $(this).css('fill', '#ffffff');
  });
  
  x.mouseleave(function(){
    $(this).css('fill', '#292929');
  });

  x.click(function(){
    $("#info3_embalse").hide();
    $("#info3_pasada").hide();
    $("#info3_bombeo").hide();
    $("#info3").show();
  });
})  


