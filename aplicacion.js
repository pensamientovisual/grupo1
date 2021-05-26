// Definimos una variable que contendrá nuestra base de datos.
let db; 

// Cargamos nuestra base de datos con PapaParse indicando su dirección.
Papa.parse("info-energias-general.csv", {
    download: true,  // Indicamos que es un archivo que existe en nuestro servidor y se debe descargar.
    header: true,    // Indicamos que la primera fila corresponde al nombre de cada columna.
    complete: function(results) {
        /*
        Una vez que se haya completado la descarga de nuestro archivo asignamos la variable a los datos obtenidos. 
        Ojo que esto no ocurriá de inmediato, por lo que si intentas usar "db" antes de que pase esto será una variable nula.
        Esto corresponderá a una lista de n elementos, dónde n corresponde al número de filas en la base de datos.
        Por ejemplo, podemos aceder a la columna "1960" en la i-ésima fila con db[i-1]["1960"];
        */
        db = results.data; 
	}
});



$(document).ready(function(){
    var region = $(".region");
  
    region.mouseenter(function(){
      var titleComuna = $(this).attr("title");
      $("#nombre").text(titleComuna);
      $(this).css('fill', '#689f38');
      $("#resumen").css('display','block');
      $("#resumen").css('top',parseInt(window.event.pageY + 10) + "px");
      $("#resumen").css('left',parseInt(window.event.pageX + 10) + "px");
    });
  
    region.mouseleave(function(){
      $("#nombre").text("Seleccione una Región");
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
    $(this).css('fill', '#689f38')
  })

  logo.click(function(){
    $("#info").show();
  });
  
});


 