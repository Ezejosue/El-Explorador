var validacionCorreoP = 0;
var validacionTelefonoP = 0;

//Validacion para correo
var txtCorreo =  document.getElementById('txtCorreoU');

txtCorreo.addEventListener('focusout', function(evt){
    if(txtCorreo.value != ''){
        if(validarCorreo(txtCorreo) == 1){
            txtCorreo.style.borderColor = null;
            validacionCorreoP = 1
            swal("Éxito", "Correo correcto", "success");
        }else{
            txtCorreo.style.borderColor = '#ff0000';
            swal("Error", "El correo no cumple el formato correspondiente", "error");
            validacionCorreoP = 0;
        }
    }else{
        swal("Información", "El campo correo no puede ser vacio", "info");
        validacionCorreoP = 0;
        txtCorreo.style.borderColor = '#ff0000';
    }
      
},true)


//Validacion para telefono
var txtTelefono =  document.getElementById('txtTelefono');

txtTelefono.addEventListener('focusout', function(evt){
    if(txtTelefono.value != ''){
        if(validarTelefono(txtTelefono) == 1){
            txtTelefono.style.borderColor = null;
            validacionTelefonoP = 1
            swal("Éxito", "Teléfono correcto", "success");
        }else{
            txtTelefono.style.borderColor = '#ff0000';
            swal("Error", "El teléfono no cumple el formato correspondiente", "error");
            validacionTelefonoP = 0;
        }
    }else{
        swal("Información", "El campo correo no puede ser vacio", "info");
        validacionTelefonoP = 0;
        txtTelefono.style.borderColor = '#ff0000';
    }
      
},true)


//Evento del boton actualizar
var btnActualizarP = document.getElementById('btnActualizarP');

btnActualizarP.addEventListener('click', function(evt){
    if(validacionTelefonoP == 1 && validacionCorreoP == 1){
        swal("Éxito", "Datos actualizados correctamente", "success");
        validacionCorreoP = 0;
        validacionTelefonoP = 0;
    }else{
        swal("Error", "Verifique que los datos cumplan con el formato correcto", "error");
    }
})
