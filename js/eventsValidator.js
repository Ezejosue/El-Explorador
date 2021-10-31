var txtNombreE = document.getElementById('txtNombreEvento');

txtNombreE.addEventListener('focusout', function(evt){
    var entrada =  document.getElementById('txtNombreEvento');
    validarSoloLetras(entrada);
},true)