var validacionNombre = 0;
var validacionLugar = 0;
var validacionFecha = 0;
var validacionDescripcion = 0;

const fecha = new Date();

/*let dia = fecha.getDate();
let mes = fecha.getMonth()+1;
let año = fecha.getFullYear();

let fechaMostrar = `${año}-${mes}-${dia}`;
console.log(fechaMostrar)
function mostrarCalendario(){
    var div = document.getElementById('campoFecha');
    var contenido = '';
    contenido += `
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <label for="txtFechaRealizacion" class="form-label tituloCampo">Fecha de
                realización</label>
            <input type="date" class="form-control txt" id="txtFechaRealizacion" placeholder="Ingrese fecha de realización" min="${fechaMostrar}" required>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <label for="txtHoraRealizacion" class="form-label tituloCampo">Hora de
                    realización</label>
                <input type="time" class="form-control txt" id="txtHoraRealizacion"
                    placeholder="Ingrese fecha de inicio" required>
        </div>`;
        div.innerHTML = contenido;
}
window.onload = mostrarCalendario*/

//Validacion para longitud del campo de nombre del evento
var txtNombreE = document.getElementById("txtNombreTradicion");

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
var txtDescripcion = document.getElementById("txtDescripcion");

txtDescripcion.addEventListener(
  "focusout",
  function (evt) {
    if (txtDescripcion.value != "") {
      if (txtDescripcion.value.length > 500) {
        swal("Verificar", "Se ha excedido la longitud del campo", "info");
        txtDescripcion.style.borderColor = "#ff0000";
        validacionLugar = 0;
      } else {
        validacionLugar = 1;
        txtDescripcion.style.borderColor = null;
      }
    } else {
      swal("Verificar", "El campo no puede sere vacio", "info");
      txtDescripcion.style.borderColor = "#ff0000";
      validacionLugar = 0;
    }
  },
  true
);


//Validación de descripción
var txtNombreL = document.getElementById("txtLugarRealizacion");

txtNombreL.addEventListener("focusout", function (evt) {
  if (txtNombreL.value != "") {
    if (txtNombreL.value.length > 200) {
      swal("Verificar", "Se ha excedido la longitud del campo", "info");
      txtNombreL.style.borderColor = "#ff0000";
      validacionDescripcion = 0;
    } else {
      validacionDescripcion = 1;
      //swal("Éxito", "Descripción correcta", "success");
    }
  } else {
    swal("Verificar", "El campo no puede ser vacío", "info");
    validacionDescripcion = 0;
    txtNombreL.style.borderColor = "#ff0000";
  }
});

var btnAgregar = document.getElementById("botonAgregar");
btnAgregar.addEventListener("click", function (evt) {
  if (
    validacionNombre == 1 &&
    validacionLugar == 1 &&
    validacionDescripcion == 1
  ) {
    swal("Éxito", "Los datos han sido agregados con éxito", "success");
    validacionNombre = 0;
    validacionLugar = 0;
    //validacionFecha = 0;
    validacionDescripcion = 0;

    txtNombreE.value = "";
    txtNombreL.value = "";
    txtDescripcion.value = "";
  
  } else {
    swal(
      "Error",
      "Verificar que los campos tengan el formato correspondiente",
      "error"
    );

  }
});

//Validaciones para actualizar datos

//Validacion para longitud del campo de nombre del evento
var txtNombreEU = document.getElementById("txtNombreTradicionU");

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
var txtNombreLU = document.getElementById("txtLugarRealizacionU");

txtNombreLU.addEventListener(
  "focusout",
  function (evt) {
    if (txtNombreLU.value != "") {
      if (txtNombreLU.value.length > 200) {
        swal("Verificar", "Se ha excedido la longitud del campo", "info");
        txtNombreLU.style.borderColor = "#ff0000";
        validacionLugar = 0;
      } else {
        validacionLugar = 1;
        txtNombreLU.style.borderColor = null;
      }
    } else {
      swal("Verificar", "El campo no puede sere vacio", "info");
      txtNombreLU.style.borderColor = "#ff0000";
      validacionLugar = 0;
    }
  },
  true
);


//Validación de descripción
var txtDescripcionU = document.getElementById("txtDescripcionU");

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
    //validacionFecha = 0;
    validacionDescripcion = 0;

    txtNombreEU.value = "";
    txtNombreLU.value = "";
    txtDescripcionU.value = "";
  } else {
    swal(
      "Error",
      "Verificar que los campos tengan el formato correspondiente",
      "error"
    );
  }
});
