/* Definimos una variable que contendrá nuestra base de datos.
let db; 

// Cargamos nuestra base de datos con PapaParse indicando su dirección.
Papa.parse("info-energias-general.csv", {
    download: true, // Indicamos que es un archivo que existe en nuestro servidor y se debe descargar.
    header: true,  // Indicamos que la primera fila corresponde al nombre de cada columna.
    complete: function(results) {
        db = results.data; 
        crear_lista();
	}
});


function crear_lista() {
  d3.select("body").append("label").text("Elige un país: ");
  let select = document.createElement("select");
  for (var fila = 0; fila < db.length; fila++) {
      var option = document.createElement("option"); 
      option.text = db[fila]["Region"];
      option.value = fila;
      select.appendChild(option);
  }
  select.onchange = mostrarDatosPais;
  document.body.appendChild(select);
}

function mostrarDatosPais()
{
    d3.selectAll("#resumen").remove()
    let fila = event2.target.value;
    for (let [columna, valor] of Object.entries(db[fila])) 
        d3.select("body").append("p").text(columna + ": " + valor);
}
*/

$(document).ready(function(){
    var region = $(".region");
  
    region.mouseenter(function(){
      var titleComuna = $(this).attr("title");
      $("#nombre").text(titleComuna);
      $(this).css('fill', '#689f38');
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
      $(this).css('fill', '#aaa7a7');
      $("#resumen").css('display','none');
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
  });
  
});

$(document).ready(function(){
  var x = $(".cerrar");
  
  x.mouseenter(function(){
    $(this).css('fill', '#fffff');
  });
  
  x.mouseleave(function(){
    $(this).css('fill', '#292929');
  });

  x.click(function(){
    $("#info1").hide();
  });
  
});

$(document).ready(function(){
  var x = $(".cerrar");
  
  x.mouseenter(function(){
    $(this).css('fill', "#fffff");
  });
  
  x.mouseleave(function(){
    $(this).css('fill', '#292929');
  });

  x.click(function(){
    $("#info2").hide();
  });
  
});
 