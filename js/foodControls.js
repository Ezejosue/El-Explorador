var validacionNombre = 0;
var validacionIngrediente = 0;
var validacionProcedimiento = 0;
var validacionNombreU = 0;
var validacionIngredienteU = 0;
var validacionProcedimientoU = 0;

//Validacion para longitud del campo de nombre del hotel
var txtNombreRes = document.getElementById("txtNombreComida");

txtNombreRes.addEventListener(
  "focusout",
  function (evt) {
    if (txtNombreRes.value != "") {
      if (txtNombreRes.value.length > 150) {
        swal("Verificar", "Se ha excedido la longitud del campo", "info");
        txtNombreRes.style.borderColor = "#ff0000";
        validacionNombre = 0;
      } else {
        validacionNombre = 1;
        txtNombreRes.style.borderColor = null;
      }
    } else {
      swal("Verificar", "El campo no puede ser vacio", "info");
      txtNombreRes.style.borderColor = "#ff0000";
      validacionNombre = 0;
    }
  },
  true
);

var txtProceso = document.getElementById("txtProceso");

txtProceso.addEventListener(
  "focusout",
  function (evt) {
    if (txtProceso.value != "") {
      if (txtProceso.value.length > 150) {
        swal("Verificar", "Se ha excedido la longitud del campo", "info");
        txtProceso.style.borderColor = "#ff0000";
        validacionProcedimiento = 0;
      } else {
        validacionProcedimiento = 1;
        txtProceso.style.borderColor = null;
      }
    } else {
      swal("Verificar", "El campo no puede ser vacio", "info");
      txtProceso.style.borderColor = "#ff0000";
      validacionProcedimiento = 0;
    }
  },
  true
);

var txtIngredientes = document.getElementById("txtIngredientes");

txtIngredientes.addEventListener(
  "focusout",
  function (evt) {
    if (txtIngredientes.value != "") {
      if (txtIngredientes.value.length > 150) {
        swal("Verificar", "Se ha excedido la longitud del campo", "info");
        txtIngredientes.style.borderColor = "#ff0000";
        validacionIngrediente = 0;
      } else {
        validacionIngrediente = 1;
        txtIngredientes.style.borderColor = null;
      }
    } else {
      swal("Verificar", "El campo no puede ser vacio", "info");
      txtIngredientes.style.borderColor = "#ff0000";
      validacionIngrediente = 0;
    }
  },
  true
);


var btnAgregar = document.getElementById("botonAgregar");
btnAgregar.addEventListener("click", function (evt) {
  if (
    validacionNombre == 1 &&
    validacionProcedimiento == 1 &&
    validacionIngrediente == 1
  ) {
    swal("Éxito", "Los datos han sido agregados con éxito", "success");
    validacionNombre = 0;
    validacionProcedimiento = 0;
    validacionIngrediente = 0;

    txtNombreRes.value = "";
    txtProceso.value = "";
    txtIngredientes.value = "";
    
  } else {
    swal(
      "Error",
      "Verificar que los campos tengan el formato correspondiente",
      "error"
    );
  }
});


var txtNombreResU = document.getElementById("txtNombreComidaU");

txtNombreResU.addEventListener(
  "focusout",
  function (evt) {
    if (txtNombreResU.value != "") {
      if (txtNombreResU.value.length > 150) {
        swal("Verificar", "Se ha excedido la longitud del campo", "info");
        txtNombreResU.style.borderColor = "#ff0000";
        validacionNombreU = 0;
      } else {
        validacionNombreU = 1;
        txtNombreResU.style.borderColor = null;
      }
    } else {
      swal("Verificar", "El campo no puede ser vacio", "info");
      txtNombreResU.style.borderColor = "#ff0000";
      validacionNombreU = 0;
    }
  },
  true
);

var txtProcesoU = document.getElementById("txtProcesoU");

txtProcesoU.addEventListener(
  "focusout",
  function (evt) {
    if (txtProcesoU.value != "") {
      if (txtProcesoU.value.length > 150) {
        swal("Verificar", "Se ha excedido la longitud del campo", "info");
        txtProcesoU.style.borderColor = "#ff0000";
        validacionProcedimientoU = 0;
      } else {
        validacionProcedimientoU = 1;
        txtProcesoU.style.borderColor = null;
      }
    } else {
      swal("Verificar", "El campo no puede ser vacio", "info");
      txtProcesoU.style.borderColor = "#ff0000";
      validacionProcedimientoU = 0;
    }
  },
  true
);

var txtIngredientesU = document.getElementById("txtIngredientesU");

txtIngredientesU.addEventListener(
  "focusout",
  function (evt) {
    if (txtIngredientesU.value != "") {
      if (txtIngredientesU.value.length > 150) {
        swal("Verificar", "Se ha excedido la longitud del campo", "info");
        txtIngredientesU.style.borderColor = "#ff0000";
        validacionIngredienteU = 0;
      } else {
        validacionIngredienteU = 1;
        txtIngredientesU.style.borderColor = null;
      }
    } else {
      swal("Verificar", "El campo no puede ser vacio", "info");
      txtIngredientesU.style.borderColor = "#ff0000";
      validacionIngredienteU = 0;
    }
  },
  true
);

var btnActualizar = document.getElementById("botonActualizar");
btnActualizar.addEventListener("click", function (evt) {
  if (
    validacionNombreU == 1 &&
    validacionProcedimientoU == 1 &&
    validacionIngredienteU == 1
  ) {
    swal("Éxito", "Los datos han sido agregados con éxito", "success");
    validacionNombreU = 0;
    validacionProcedimientoU = 0;
    validacionIngredienteU = 0;

    txtNombreResU.value = "";
    txtProcesoU.value = "";
    txtIngredientesU.value = "";
  } else {
    swal(
      "Error",
      "Verificar que los campos tengan el formato correspondiente",
      "error"
    );
  }
});

