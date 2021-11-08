var btnAcceder = document.getElementById('btnIngresar');

btnAcceder.addEventListener('click', function(evt){
    var txtUsuario = document.getElementById('user');
    var txtContra = document.getElementById('pass')

    if(txtUsuario.value != '' && txtContra.value !=''){
        if(validarContraseña(txtContra) == 1){
            if(txtUsuario.value.length <=100){
                swal("Éxito", "Bienvenido", "success");
                window.location.href = '../private/indexprivate.html';
            }else{
                swal("Error", "Se ha excedido el limite de caracteres", "error");
            }
        }else{
            swal("Error", "La contraseña no cumple con el formato requerido", "error");
        }
    }else{
        swal("Error", "Los campos no pueden ser vacios", "error");
    }
 })
 