var validacionNombre = 0;
var validacionLugar = 0;
var validacionFecha = 0;

//Validacion para longitud del campo de nombre del evento
var txtNombreE = document.getElementById('txtNombreEvento');

txtNombreE.addEventListener('focusout', function(evt){
   /* var entrada =  document.getElementById('txtNombreEvento');
    if(validarSoloLetras(entrada) == 1){
        swal("Exito", "El formato de campo es el correcto", "success");   
    }*/
    if(txtNombreE.value.length > 5){
        swal("Verificar", "Se ha excedido la longitud del campo", "info");  
        txtNombreE.style.borderColor = '#ff0000'
    }else{
        validacionNombre = 1;
        txtNombreE.style.borderColor = null;
    }
},true)