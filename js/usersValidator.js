var ValidacionNombreUsuario = 0;
var ValidacionApellidoUsuario = 0;
var validacionUsuario = 0;
var validacionContraseña = 0;
var validacionCorreo = 0;
var validacionTelefono = 0;
var validacionTipoU = 0;
var validacionEstadoUsuario = 0;
var ValidacionNombreUsuarioU = 0;
var ValidacionApellidoUsuarioU = 0;
var validacionTipoUpdate = 0;
var validacionUsuarioU = 0;
var validacionEstadoUsuarioUpdate = 0;
var validacionCorreoU = 0;
var validacionTelefonoU = 0;

var txtNombreUsuario = document.getElementById('txtNombreUsuario');

txtNombreUsuario.addEventListener('focusout', function(evt){
    if(txtNombreUsuario.value != ''){
        if(txtNombreUsuario.value.length > 150){
            swal("Verificar", "Se ha excedido la longitud del campo", "info");  
            txtNombreUsuario.style.borderColor = '#ff0000';
            ValidacionNombreUsuario = 0;
        }
        else{
            ValidacionNombreUsuario = 1;  
            txtNombreUsuario.style.borderColor = null;          
        }
    }
    else{
        swal("Verificar", "El campo no puede ser vacío", "info");
        ValidacionNombreUsuario = 0;
        txtNombreUsuario.style.borderColor = '#ff0000'
    }
})


var txtApelidoUsuario = document.getElementById('txtApellido');

txtApelidoUsuario.addEventListener('focusout', function(evt){
    if(txtApelidoUsuario.value != ''){
        if(txtApelidoUsuario.value.length > 150){
            swal("Verificar", "Se ha excedido la longitud del campo", "info");  
            txtApelidoUsuario.style.borderColor = '#ff0000';
            ValidacionApellidoUsuario = 0;
        }
        else{
            ValidacionApellidoUsuario = 1;  
            txtApelidoUsuario.style.borderColor = null;          
        }
    }
    else{
        swal("Verificar", "El campo no puede ser vacío", "info");
        ValidacionApellidoUsuario = 0;
        txtApelidoUsuario.style.borderColor = '#ff0000'
    }
})


var cmbTipoU = document.getElementById('cmbTipoUsuario');

cmbTipoU.addEventListener('focusout', function(evt){
    if(cmbTipoU.value != 0){
        cmbTipoU.style.borderColor = null;
        validacionTipoU = 1;
    }else{
        swal("Verificar", "Debe seleccionar una opcion", "info");
        cmbTipoU.style.borderColor = '#ff0000';
        validacionTipoU = 0;
    }
})

var txtUser = document.getElementById('txtUsuario');

txtUser.addEventListener('focusout', function(evt){
    if(txtUser.value != ''){
        if(txtUser.value.length > 150){
            swal("Verificar", "Se ha excedido la longitud del campo", "info");  
            txtUser.style.borderColor = '#ff0000';
            validacionUsuario = 0;
        }
        else{
            validacionUsuario = 1;  
            txtUser.style.borderColor = null;          
        }
    }
    else{
        swal("Verificar", "El campo no puede ser vacío", "info");
        validacionUsuario = 0;
        txtUser.style.borderColor = '#ff0000'
    }
})

var txtContra = document.getElementById('txtContra');

txtContra.addEventListener('focusout', function(evt){
    if(txtContra.value != ''){
        if(validarContraseña(txtContra) == 1){       
            validacionContraseña = 1;
            txtContra.style.borderColor = null;
        }else{
            validarContraseña = 0;
            txtContra.style.borderColor = '#ff0000';
        }
    }
    else{
        swal("Verificar", "El campo no puede ser vacío", "info");        
        txtContra.style.borderColor = '#ff0000';
        validacionContraseña = 0;
    }

})


var cmbEstadoU = document.getElementById('cmbEstadoUsuario');

cmbEstadoU.addEventListener('focusout', function(evt){
    if(cmbEstadoU.value != 0){    
        cmbEstadoU.style.borderColor = null;
        validacionEstadoUsuario = 1;
    }else{
        swal("Verificar", "Debe seleccionar una opcion", "info");        
        cmbEstadoU.style.borderColor = '#ff0000';
        validacionEstadoUsuario = 0;
    }

})


var txtCorreo = document.getElementById('txtCorreo');

txtCorreo.addEventListener('focusout', function(evt){
    if(txtCorreo.value != ''){
        if(validarCorreo(txtCorreo) == 1){       
            validacionCorreo = 1;
            txtCorreo.style.borderColor = null;
        }else{
            validacionCorreo = 0;
            txtCorreo.style.borderColor = '#ff0000';
        }
    }
    else{
        swal("Verificar", "El campo no puede ser vacío", "info");        
        txtCorreo.style.borderColor = '#ff0000'
        validacionCorreo = 0;
    }

})

var txtTelefono = document.getElementById('txtTelefono');

txtTelefono.addEventListener('focusout', function(evt){
    if(txtTelefono.value != ''){
        if(validarTelefono(txtTelefono) == 1){       
            validacionTelefono = 1;
            txtTelefono.style.borderColor = null;
        }else{
            validacionTelefono = 0;
            txtTelefono.style.borderColor = '#ff0000';
        }
    }
    else{
        swal("Verificar", "El campo no puede ser vacío", "info");        
        txtTelefono.style.borderColor = '#ff0000'
        validacionTelefono = 0;
    }

})

var btnAgregar = document.getElementById('btnAgregar');

btnAgregar.addEventListener('click', function(evt){   
    var contra = document.getElementById('txtContra').value;
    var contraVeri = document.getElementById('txtContraVerificacion').value; 
    if(contra == contraVeri){
        if(validacionUsuario == 1 && ValidacionApellidoUsuario == 1 && validacionTipoU == 1 && validacionUsuario == 1 && validacionContraseña == 1 && validacionEstadoUsuario == 1 && validacionCorreo == 1 && validacionTelefono == 1){
            swal("éxito", "Datos ingresados con éxito", "success");
            ValidacionNombreUsuario = 0;
            ValidacionApellidoUsuario = 0;
            validacionUsuario = 0;
            validacionContraseña = 0;
            validacionCorreo = 0;
            validacionTelefono = 0;
            validacionTipoU = 0;
            validacionEstadoUsuario = 0;

            txtNombreUsuario.value = '';
            txtApelidoUsuario.value = '';
            txtUser.value = '';
            txtContra.value = '';
            contraVeri = '';
            txtCorreo.value = '';
            txtTelefono.value = '';
            
        }else{
            swal("Error", "Los campos no cumplen el formato adecuado", "error");
        }
    }else{
        swal("Error", "La contraseña y su verificación, no coinciden", "error");      
    }
 })

//Validaciones para actualizacion de datos

var txtApelidoUsuarioU = document.getElementById('txtApellidoU');

txtApelidoUsuarioU.addEventListener('focusout', function(evt){
    if(txtApelidoUsuarioU.value != ''){
        if(txtApelidoUsuarioU.value.length > 150){
            swal("Verificar", "Se ha excedido la longitud del campo", "info");  
            txtApelidoUsuarioU.style.borderColor = '#ff0000';
            ValidacionApellidoUsuarioU = 0;
        }
        else{
            ValidacionApellidoUsuarioU = 1;  
            txtApelidoUsuarioU.style.borderColor = null;          
        }
    }
    else{
        swal("Verificar", "El campo no puede ser vacío", "info");
        ValidacionApellidoUsuarioU = 0;
        txtApelidoUsuarioU.style.borderColor = '#ff0000'
    }
})

//Validaciones para modal de actualizar campo nombre de usuario 
var txtNombreUsuarioU = document.getElementById('txtNombreUsuarioU');

txtNombreUsuarioU.addEventListener('focusout', function(evt){
    if(txtNombreUsuarioU.value != ''){
        if(txtNombreUsuarioU.value.length > 150){
            swal("Verificar", "Se ha excedido la longitud del campo", "info");  
            txtNombreUsuarioU.style.borderColor = '#ff0000';
            ValidacionNombreUsuarioU = 0;
        }
        else{
            ValidacionNombreUsuarioU = 1;  
            txtNombreUsuarioU.style.borderColor = null;          
        }
    }
    else{
        swal("Verificar", "El campo no puede ser vacío", "info");
        ValidacionNombreUsuarioU = 0;
        txtNombreUsuarioU.style.borderColor = '#ff0000'
    }
})

//validacion de tipo de usuario update
var cmbTipoUpdate = document.getElementById('cmbTipoUsuarioUpdate');

cmbTipoUpdate.addEventListener('focusout', function(evt){
    if(cmbTipoUpdate.value != 0){
        cmbTipoUpdate.style.borderColor = null;
        validacionTipoUpdate = 1;
    }else{
        swal("Verificar", "Debe seleccionar una opcion", "info");
        cmbTipoUpdate.style.borderColor = '#ff0000';
        validacionTipoUpdate = 0;
    }
})

var txtUserU = document.getElementById('txtUsuarioU');

txtUserU.addEventListener('focusout', function(evt){
    if(txtUserU.value != ''){
        if(txtUserU.value.length > 150){
            swal("Verificar", "Se ha excedido la longitud del campo", "info");  
            txtUserU.style.borderColor = '#ff0000';
            validacionUsuarioU = 0;
        }
        else{
            validacionUsuarioU = 1;  
            txtUserU.style.borderColor = null;          
        }
    }
    else{
        swal("Verificar", "El campo no puede ser vacío", "info");
        validacionUsuarioU = 0;
        txtUserU.style.borderColor = '#ff0000'
    }
})

var cmbEstadoUpdate = document.getElementById('cmbEstadoUsuarioUpdate');

cmbEstadoUpdate.addEventListener('focusout', function(evt){
    if(cmbEstadoUpdate.value != 0){    
        cmbEstadoUpdate.style.borderColor = null;
        validacionEstadoUsuarioUpdate = 1;
    }else{
        swal("Verificar", "Debe seleccionar una opcion", "info");        
        cmbEstadoUpdate.style.borderColor = '#ff0000';
        validacionEstadoUsuarioUpdate = 0;
    }

})

var txtCorreoU = document.getElementById('txtCorreoU');

txtCorreoU.addEventListener('focusout', function(evt){
    if(txtCorreoU.value != ''){
        if(validarCorreo(txtCorreoU) == 1){       
            validacionCorreoU = 1;
            txtCorreoU.style.borderColor = null;
        }else{
            validacionCorreoU = 0;
            txtCorreoU.style.borderColor = '#ff0000';
        }
    }
    else{
        swal("Verificar", "El campo no puede ser vacío", "info");        
        txtCorreoU.style.borderColor = '#ff0000'
        validacionCorreoU = 0;
    }

})

var txtTelefonoU = document.getElementById('txtTelefonoU');

txtTelefonoU.addEventListener('focusout', function(evt){
    if(txtTelefonoU.value != ''){
        if(validarTelefono(txtTelefonoU) == 1){       
            validacionTelefonoU = 1;
            txtTelefonoU.style.borderColor = null;
        }else{
            validacionTelefonoU = 0;
            txtTelefonoU.style.borderColor = '#ff0000';
        }
    }
    else{
        swal("Verificar", "El campo no puede ser vacío", "info");        
        txtTelefonoU.style.borderColor = '#ff0000'
        validacionTelefonoU = 0;
    }

})


var btnModificar = document.getElementById('btnModificar');

btnModificar.addEventListener('click', function(evt){  
        if(validacionUsuarioU == 1 && ValidacionApellidoUsuarioU == 1 && validacionTipoUpdate == 1 && ValidacionNombreUsuarioU == 1 &&  validacionEstadoUsuarioUpdate == 1 && validacionCorreoU == 1 && validacionTelefonoU == 1){
            swal("éxito", "Datos ingresados con éxito", "success");
            var ValidacionNombreUsuarioU = 0;
            var ValidacionApellidoUsuarioU = 0;
            var validacionTipoUpdate = 0;
            var validacionUsuarioU = 0;
            var validacionEstadoUsuarioUpdate = 0;
            var validacionCorreoU = 0;
            var validacionTelefonoU = 0;

            txtNombreUsuarioU.value = '';
            txtApelidoUsuarioU.value = '';
            txtUserU.value = '';
            txtCorreoU.value = '';
            txtTelefonoU.value = '';
            
        }else{
            swal("Error", "Los campos no cumplen el formato adecuado", "error");
            
        }
 })