function validarSoloLetras(campo) {
  var campoValidar = campo;

  if (campoValidar.value != '') {
    if (/^[a-zA-ZÀ-ÿ00f100d1]+(\s[a-zA-ZÀ-ÿ00f100d1])*[a-zA-ZÀ-ÿ00f100d1]+$/.test(campoValidar.value)) {
      // swal("Exito", "El formato de campo es el correcto", "success");   
      return 1;
    } else {
      swal("Error", "El campo sólo acepta letras", "error");   
      return 0;
    }
  } else {
    swal("Error", "Debe de ingresar datos", "info");
    return 0;
  }
}

function validarSoloNumeros(campo) {
  var campoValidar = campo;

  if (campoValidar.value != '') {
    if (/^([0-9])*$/.test(campoValidar.value)) {
      return 1;
    } else {
      swal("Error", "El campo sólo acepta números", "error");
      return 0;
    }
  } else {
    swal("Error", "Debe ingresar datos", "info");
    return 0;
  }
}

function validarCorreo(campo) {
  var campoValidar = campo;

  if (campoValidar.value != '') {
    if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/.test(campoValidar.value)) {
      return 1;
    } else {
      swal("Error", "El formato de correo electrónico no es correcto", "error");
      return 0;
    }
  } else {
    swal("Error", "Debe ingresar datos", "info");
    return 0;
  }
}

function validarContraseña(campo){
  var campoValidar = campo;

  if(campoValidar.value != ''){
    if(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,}$/.test(campoValidar.value)){
      return 1;
    } else{
      swal("Error", "Debe de ingresar una contraseña con 6 caracteres como mínimo incluyendo una letra mayúscula, minúscula y un dígito", "error");
      return 0;
    }
  }else{
    swal("Error", "Debe ingresar datos", "info");
    return 0;
  }
}


function validarTelefono(campo){
  var campoValidar = campo;

  if(campoValidar.value != ''){
    if(/^[0-9]{4}-[0-9]{4}$/.test(campoValidar.value)){
      return 1;
    } else{
      swal("Error", "El número no cumple con el formato correcto", "error");
      return 0;
    }
  }else{
    swal("Error", "Debe ingresar datos", "info");
    return 0;
  }
}