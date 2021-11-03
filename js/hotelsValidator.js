var validacionNombre = 0;
var validacionTelefono = 0;
var validacionDireccion = 0;
var validacionDescripcion = 0;
var validacionNombreUpdate = 0;
var validacionTelefonoUpdate = 0;
var validacionDireccionUdpate = 0;
var validacionDescripcionUpdate = 0

//Validacion para longitud del campo de nombre del hotel
var txtNombreHotel = document.getElementById('txtNombreHotel');

txtNombreHotel.addEventListener('focusout', function(evt){
    if(txtNombreHotel.value != ''){
        if(txtNombreHotel.value.length > 150){
            swal("Verificar", "Se ha excedido la longitud del campo", "info");  
            txtNombreHotel.style.borderColor = '#ff0000';
            validacionNombre = 0;
        }else{
            validacionNombre = 1;
            txtNombreHotel.style.borderColor = null;
        }
    }else{
        swal("Verificar", "El campo no puede ser vacio", "info");  
        txtNombreHotel.style.borderColor = '#ff0000';
        validacionNombre = 0;
    }
},true)

//Validación para el teléfono del campo hotel
var txtTelfono = document.getElementById('txttelephone');

txtTelfono.addEventListener('focusout', function(evt){
    if(txtTelfono.value != ''){
        if(/^[0-9]{4}-[0-9]{4}$/.test(txtTelfono.value)){
            validacionTelefono = 1;
            txtTelfono.style.borderColor = null;
        } else{
            swal("Verificar", "El teléfono no cumple con el formato necesario", "error"); 
            txtTelfono.style.borderColor = '#ff0000';
            validacionTelefono = 0;
        }
    }else{
        swal("Verificar", "El campo no puede ser vacío", "info");
        txtTelfono.style.borderColor = '#ff0000';
        validacionTelefono = 0;
    }
},true)

//Validación de dirección para hoteles
var txtDireccion = document.getElementById('txtDireccion');

txtDireccion.addEventListener('focusout', function(evt){
    if(txtDireccion.value != ''){
        if(txtDireccion.value.length > 250){
            swal("Verificar", "Se ha excedido la longitud del campo", "info");  
            txtDireccion.style.borderColor = '#ff0000';
            validacionDireccion = 0;
        }else{
            validacionDireccion = 1;
            txtDireccion.style.borderColor = null;
        }
    }else{
        swal("Verificar", "El campo no puede ser vacío", "info");
        txtDireccion.style.borderColor = '#ff0000';
        validacionDireccion = 0;
    }
},true)

//validacion de descripción para hoteles
var txtDescripcion = document.getElementById('txtDescripcion');

txtDescripcion.addEventListener('focusout', function(evt){
    if(txtDescripcion.value != ''){
        if(txtDescripcion.value,length > 500){
            swal("Verificar", "Se ha excedido la longitud del campo", "info");  
            txtDescripcion.style.borderColor = '#ff0000';
            validacionDescripcion = 0;
        }else{
            validacionDescripcion = 1;
            txtDescripcion.style.borderColor = null;
        }
    }else{
        swal("Verificar", "El campo no puede ser vacío", "info");
        txtDescripcion.style.borderColor = '#ff0000';
        validacionDescripcion = 0;
    }
},true)

//Validacion para longitud del campo de nombre del hotel update
var txtNombreHotelUpdate = document.getElementById('txtNombreHotelUpdate');

txtNombreHotelUpdate.addEventListener('focusout', function(evt){
    if(txtNombreHotelUpdate.value != ''){
        if(txtNombreHotelUpdate.value.length > 150){
            swal("Verificar", "Se ha excedido la longitud del campo", "info");  
            txtNombreHotelUpdate.style.borderColor = '#ff0000';
            validacionNombreUpdate = 0;
        }else{
            validacionNombreUpdate = 1;
            txtNombreHotelUpdate.style.borderColor = null;
        }
    }else{
        swal("Verificar", "El campo no puede ser vacio", "info");  
        txtNombreHotelUpdate.style.borderColor = '#ff0000';
        validacionNombreUpdate = 0;
    }
},true)

//Validación para el teléfono del campo hotel update
var txtTelfonoUpdate = document.getElementById('txttelephoneUpdate');

txtTelfonoUpdate.addEventListener('focusout', function(evt){
    if(txtTelfonoUpdate.value != ''){
        if(/^[0-9]{4}-[0-9]{4}$/.test(txtTelfonoUpdate.value)){
            validacionTelefonoUpdate = 1;
            txtTelfonoUpdate.style.borderColor = null;
        } else{
            swal("Verificar", "El teléfono no cumple con el formato necesario", "error"); 
            txtTelfonoUpdate.style.borderColor = '#ff0000';
            validacionTelefonoUpdate = 0;
        }
    }else{
        swal("Verificar", "El campo no puede ser vacío", "info");
        txtTelfonoUpdate.style.borderColor = '#ff0000';
        validacionTelefonoUpdate = 0;
    }
},true)

//Validación de dirección para hoteles update
var txtDireccionUpdate = document.getElementById('txtDireccionUpdate');

txtDireccionUpdate.addEventListener('focusout', function(evt){
    if(txtDireccionUpdate.value != ''){
        if(txtDireccionUpdate.value.length > 250){
            swal("Verificar", "Se ha excedido la longitud del campo", "info");  
            txtDireccionUpdate.style.borderColor = '#ff0000';
            validacionDireccionUpdate = 0;
        }else{
            validacionDireccionUpdate = 1;
            txtDireccionUpdate.style.borderColor = null;
        }
    }else{
        swal("Verificar", "El campo no puede ser vacío", "info");
        txtDireccionUpdate.style.borderColor = '#ff0000';
        validacionDireccionUpdate = 0;
    }
},true)

//validacion de descripción para hoteles update
var txtDescripcionUpdate = document.getElementById('txtDescripcionUpdate');

txtDescripcionUpdate.addEventListener('focusout', function(evt){
    if(txtDescripcionUpdate.value != ''){
        if(txtDescripcionUpdate.value,length > 500){
            swal("Verificar", "Se ha excedido la longitud del campo", "info");  
            txtDescripcionUpdate.style.borderColor = '#ff0000';
            validacionDescripcionUpdate = 0;
        }else{
            validacionDescripcionUpdate = 1;
            txtDescripcionUpdate.style.borderColor = null;
        }
    }else{
        swal("Verificar", "El campo no puede ser vacío", "info");
        txtDescripcionUpdate.style.borderColor = '#ff0000';
        validacionDescripcionUpdate = 0;
    }
},true)