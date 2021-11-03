var validacionNombre = 0;
var validacionTelefono = 0;
var validacionDireccion = 0;
var validacionDescripcion = 0;
var validacionNombreUpdate = 0;
var validacionTelefonoUpdate = 0;
var validacionDireccionUpdate = 0;
var validacionDescripcionUpdate = 0;

//Validacion para longitud del campo de nombre del hotel
var txtNombreRes = document.getElementById("txtNombreRestaurante");

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

//Validación para el teléfono del campo hotel
var txtTelfono = document.getElementById("txttelephone");

txtTelfono.addEventListener(
  "focusout",
  function (evt) {
    if (txtTelfono.value != "") {
      if (/^[0-9]{4}-[0-9]{4}$/.test(txtTelfono.value)) {
        validacionTelefono = 1;
        txtTelfono.style.borderColor = null;
      } else {
        swal(
          "Verificar",
          "El teléfono no cumple con el formato necesario",
          "error"
        );
        txtTelfono.style.borderColor = "#ff0000";
        validacionTelefono = 0;
      }
    } else {
      swal("Verificar", "El campo no puede ser vacío", "info");
      txtTelfono.style.borderColor = "#ff0000";
      validacionTelefono = 0;
    }
  },
  true
);

//Validación de dirección para hoteles
var txtDireccion = document.getElementById("txtDireccion");

txtDireccion.addEventListener(
  "focusout",
  function (evt) {
    if (txtDireccion.value != "") {
      if (txtDireccion.value.length > 250) {
        swal("Verificar", "Se ha excedido la longitud del campo", "info");
        txtDireccion.style.borderColor = "#ff0000";
        validacionDireccion = 0;
      } else {
        validacionDireccion = 1;
        txtDireccion.style.borderColor = null;
      }
    } else {
      swal("Verificar", "El campo no puede ser vacío", "info");
      txtDireccion.style.borderColor = "#ff0000";
      validacionDireccion = 0;
    }
  },
  true
);

//validacion de descripción para hoteles
var txtDescripcion = document.getElementById("txtDescripcionEvento");

txtDescripcion.addEventListener(
  "focusout",
  function (evt) {
    if (txtDescripcion.value != "") {
      if ((txtDescripcion.value, length > 500)) {
        swal("Verificar", "Se ha excedido la longitud del campo", "info");
        txtDescripcion.style.borderColor = "#ff0000";
        validacionDescripcion = 0;
      } else {
        validacionDescripcion = 1;
        txtDescripcion.style.borderColor = null;
      }
    } else {
      swal("Verificar", "El campo no puede ser vacío", "info");
      txtDescripcion.style.borderColor = "#ff0000";
      validacionDescripcion = 0;
    }
  },
  true
);

var btnAgregar = document.getElementById("botonAgregar");
btnAgregar.addEventListener("click", function (evt) {
  if (
    validacionNombre == 1 &&
    validacionTelefono == 1 &&
    validacionDescripcion == 1 &&
    validacionDireccion == 1
  ) {
    swal("Éxito", "Los datos han sido agregados con éxito", "success");
    validacionNombre = 0;
    validacionTelefono = 0;
    validacionDescripcion = 0;
    validacionDireccion = 0;

    txtNombreRes.value = "";
    txtTelfono.value = "";
    txtDescripcion.value = "";
    txtDireccion.value = "";
  } else {
    swal(
      "Error",
      "Verificar que los campos tengan el formato correspondiente",
      "error"
    );
  }
});

//Validacion para longitud del campo de nombre del hotel update
var txtNombreResUpdate = document.getElementById("txtNombreRestauranteU");

txtNombreResUpdate.addEventListener(
  "focusout",
  function (evt) {
    if (txtNombreResUpdate.value != "") {
      if (txtNombreResUpdate.value.length > 150) {
        swal("Verificar", "Se ha excedido la longitud del campo", "info");
        txtNombreResUpdate.style.borderColor = "#ff0000";
        validacionNombreUpdate = 0;
      } else {
        validacionNombreUpdate = 1;
        txtNombreResUpdate.style.borderColor = null;
      }
    } else {
      swal("Verificar", "El campo no puede ser vacio", "info");
      txtNombreResUpdate.style.borderColor = "#ff0000";
      validacionNombreUpdate = 0;
    }
  },
  true
);

//Validación para el teléfono del campo hotel update
var txtTelfonoUpdate = document.getElementById("txttelephoneU");

txtTelfonoUpdate.addEventListener(
  "focusout",
  function (evt) {
    if (txtTelfonoUpdate.value != "") {
      if (/^[0-9]{4}-[0-9]{4}$/.test(txtTelfonoUpdate.value)) {
        validacionTelefonoUpdate = 1;
        txtTelfonoUpdate.style.borderColor = null;
      } else {
        swal(
          "Verificar",
          "El teléfono no cumple con el formato necesario",
          "error"
        );
        txtTelfonoUpdate.style.borderColor = "#ff0000";
        validacionTelefonoUpdate = 0;
      }
    } else {
      swal("Verificar", "El campo no puede ser vacío", "info");
      txtTelfonoUpdate.style.borderColor = "#ff0000";
      validacionTelefonoUpdate = 0;
    }
  },
  true
);

//Validación de dirección para restaurante update
var txtDireccionUpdate = document.getElementById("txtDireccionU");

txtDireccionUpdate.addEventListener(
  "focusout",
  function (evt) {
    if (txtDireccionUpdate.value != "") {
      if (txtDireccionUpdate.value.length > 250) {
        swal("Verificar", "Se ha excedido la longitud del campo", "info");
        txtDireccionUpdate.style.borderColor = "#ff0000";
        validacionDireccionUpdate = 0;
      } else {
        validacionDireccionUpdate = 1;
        txtDireccionUpdate.style.borderColor = null;
      }
    } else {
      swal("Verificar", "El campo no puede ser vacío", "info");
      txtDireccionUpdate.style.borderColor = "#ff0000";
      validacionDireccionUpdate = 0;
    }
  },
  true
);

//validacion de descripción para hoteles update
var txtDescripcionUpdate = document.getElementById(
  "txtDescripcionRestauranteU"
);

txtDescripcionUpdate.addEventListener(
  "focusout",
  function (evt) {
    if (txtDescripcionUpdate.value != "") {
      if ((txtDescripcionUpdate.value, length > 500)) {
        swal("Verificar", "Se ha excedido la longitud del campo", "info");
        txtDescripcionUpdate.style.borderColor = "#ff0000";
        validacionDescripcionUpdate = 0;
      } else {
        validacionDescripcionUpdate = 1;
        txtDescripcionUpdate.style.borderColor = null;
      }
    } else {
      swal("Verificar", "El campo no puede ser vacío", "info");
      txtDescripcionUpdate.style.borderColor = "#ff0000";
      validacionDescripcionUpdate = 0;
    }
  },
  true
);

var btnActualizar = document.getElementById("botonActualizar");
btnActualizar.addEventListener("click", function (evt) {
  if (
    validacionNombreUpdate == 1 &&
    validacionTelefonoUpdate == 1 &&
    validacionDescripcionUpdate == 1 &&
    validacionDireccionUpdate == 1
  ) {
    swal("Éxito", "Los datos han sido agregados con éxito", "success");
    validacionNombreUpdate = 0;
    validacionTelefonoUpdate = 0;
    validacionDescripcionUpdate = 0;
    validacionDireccionUpdate = 0;

    txtNombreResUpdate.value = "";
    txtTelfonoUpdate.value = "";
    txtDescripcionUpdate.value = "";
    txtDireccionUpdate.value = "";
  } else {
    swal(
      "Error",
      "Verificar que los campos tengan el formato correspondiente",
      "error"
    );
  }
});
