var validacionNombre = 0;
var validacionDoreccion = 0;
var validacionImagen = 0;
var validacionDescripcion = 0;

//Validacion para longitud del campo de nombre del evento
var txtNombreE = document.getElementById("txtNombreSitio");

txtNombreE.addEventListener(
  "focusout",
  function (evt) {
    /* var entrada =  document.getElementById('txtNombreEvento');
    if(validarSoloLetras(entrada) == 1){
        swal("Exito", "El formato de campo es el correcto", "success");   
    }*/
    if (txtNombreE.value != "") {
      if (txtNombreE.value.length > 150) {
        swal("Verificar", "Se ha excedido la longitud del campo", "info");
        txtNombreE.style.borderColor = "#ff0000";
        validacionNombre = 0;
      } else {
        validacionNombre = 1;
        txtNombreE.style.borderColor = null;
      }
    } else {
      swal("Verificar", "El campo no puede sere vacio", "info");
      txtNombreE.style.borderColor = "#ff0000";
      validacionNombre = 0;
    }
  },
  true
);

//Validacion para lugar de realización dele evento
var txtDescL = document.getElementById("txtDescripcionSitio");

txtDescL.addEventListener(
  "focusout",
  function (evt) {
    if (txtDescL.value != "") {
      if (txtDescL.value.length > 200) {
        swal("Verificar", "Se ha excedido la longitud del campo", "info");
        txtDescL.style.borderColor = "#ff0000";
        validacionLugar = 0;
      } else {
        validacionLugar = 1;
        txtDescL.style.borderColor = null;
      }
    } else {
      swal("Verificar", "El campo no puede sere vacio", "info");
      txtDescL.style.borderColor = "#ff0000";
      validacionLugar = 0;
    }
  },
  true
);

//Validación de direccion
var txtDescripcion = document.getElementById("txtDireccion");

txtDescripcion.addEventListener("focusout", function (evt) {
  if (txtDescripcion.value != "") {
    if (txtDescripcion.value.length > 500) {
      swal("Verificar", "Se ha excedido la longitud del campo", "info");
      txtDescripcion.style.borderColor = "#ff0000";
      validacionDescripcion = 0;
    } else {
      validacionDescripcion = 1;
      //swal("Éxito", "Descripción correcta", "success");
    }
  } else {
    swal("Verificar", "El campo no puede ser vacío", "info");
    validacionDescripcion = 0;
    txtDescripcion.style.borderColor = "#ff0000";
  }
});


var btnAgregar = document.getElementById('botonAgregar');
btnAgregar.addEventListener('click', function(evt){
   if(validacionNombre == 1 && validacionLugar == 1 && validacionDescripcion == 1){
    swal("Éxito", "Los datos han sido agregados con éxito", "success");
    validacionNombre = 0;
    validacionLugar = 0;
    validacionDescripcion = 0;
   
    txtNombreE.value = '';
    txtDescL.value = '';
    txtDescripcion.value = '';
   // txtHora.value = '';

    /*console.log('Nombre: '+validacionNombre);
    console.log('Lugar: '+validacionLugar);
    console.log('Fecha: '+validacionNombre);
    console.log('Precio: '+validacionPrecio);
    console.log('Descripcion: '+validacionDescripcion);*/
   }else{
        swal("Error", "Verificar que los campos tengan el formato correspondiente", "error");
       /* console.log('Nombre: '+validacionNombre);
        console.log('Lugar: '+validacionLugar);
        console.log('Fecha: '+validacionNombre);
        console.log('Precio: '+validacionPrecio);
        console.log('Descripcion: '+validacionDescripcion);*/
   }
})



//Validaciones para actualizar datos

//Validacion para longitud del campo de nombre del evento
var txtNombreEU = document.getElementById("txtNombreSitioU");

txtNombreEU.addEventListener(
  "focusout",
  function (evt) {
    if (txtNombreEU.value != "") {
      if (txtNombreEU.value.length > 150) {
        swal("Verificar", "Se ha excedido la longitud del campo", "info");
        txtNombreEU.style.borderColor = "#ff0000";
        validacionNombre = 0;
      } else {
        validacionNombre = 1;
        txtNombreEU.style.borderColor = null;
      }
    } else {
      swal("Verificar", "El campo no puede sere vacio", "info");
      txtNombreEU.style.borderColor = "#ff0000";
      validacionNombre = 0;
    }
  },
  true
);

//Validacion para lugar de realización dele evento
var txtLugarLU = document.getElementById("txtDireccionU");

txtLugarLU.addEventListener(
  "focusout",
  function (evt) {
    if (txtLugarLU.value != "") {
      if (txtLugarLU.value.length > 200) {
        swal("Verificar", "Se ha excedido la longitud del campo", "info");
        txtLugarLU.style.borderColor = "#ff0000";
        validacionLugar = 0;
      } else {
        validacionLugar = 1;
        txtLugarLU.style.borderColor = null;
      }
    } else {
      swal("Verificar", "El campo no puede sere vacio", "info");
      txtLugarLU.style.borderColor = "#ff0000";
      validacionLugar = 0;
    }
  },
  true
);


//Validación de descripción
var txtDescripcionU = document.getElementById("txtDescripcionSitioU");

txtDescripcionU.addEventListener("focusout", function (evt) {
  if (txtDescripcionU.value != "") {
    if (txtDescripcionU.value.length > 500) {
      swal("Verificar", "Se ha excedido la longitud del campo", "info");
      txtDescripcionU.style.borderColor = "#ff0000";
      validacionDescripcion = 0;
    } else {
      validacionDescripcion = 1;
      //swal("Éxito", "Descripción correcta", "success");
    }
  } else {
    swal("Verificar", "El campo no puede ser vacío", "info");
    validacionDescripcion = 0;
    txtDescripcionU.style.borderColor = "#ff0000";
  }
});

var btnActualizar = document.getElementById("botonActualizar");
btnActualizar.addEventListener("click", function (evt) {
  if (
    validacionNombre == 1 &&
    validacionLugar == 1 &&
    validacionDescripcion == 1
  ) {
    swal("Éxito", "Los datos han sido agregados con éxito", "success");
    validacionNombre = 0;
    validacionLugar = 0;
    validacionDescripcion = 0;

    txtNombreEU.value = "";
    txtLugarLU.value = "";
    txtDescripcionU.value = "";
  } else {
    swal(
      "Error",
      "Verificar que los campos tengan el formato correspondiente",
      "error"
    );
  }
});
