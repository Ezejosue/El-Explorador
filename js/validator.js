function validarSoloLetras(campo){
    var campoValidar = campo;

    if(campoValidar.value != ''){
          if(/^[a-zA-ZÀ-ÿ00f100d1]+(\s[a-zA-ZÀ-ÿ00f100d1])*[a-zA-ZÀ-ÿ00f100d1]+$/.test(campoValidar.value)){
           // swal("Exito", "El formato de campo es el correcto", "success");   
            return 1;
          }else{
            //swal("Error", "Error de campo incorrecto", "error");    
            return 0;   
          }
    }else{
        swal("Error", "Debe de ingresar datos", "info");    
        return 0;   
    }
}