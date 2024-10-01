let accion = document.getElementById('validar');
accion.onsubmit=()=>{

    let validar=true
    
    //primer  cuadro de texto: Expediente:-> "entre 3 y 5 digitos"
    let expediente = document.querySelector('#idExpediente').value
    
    let smExpediente = document.getElementById('smExpediente')
    
    if(isNaN(expediente)){
        validar=false
        smExpediente.textContent="*El valor introducido no es numerico"
    
    }else if(expediente.length<3 || expediente.length>5 ){
        validar=false;
        
        smExpediente.textContent="*el numero deber estar entre 3 y 5"
    }
    


    //segunda validacion nombre: --> al menos 3 letras y valor no numericos

    let nombre = document.querySelector('#idNombre').value
    let smNombre = document.getElementById('smNombre')
    if(nombre.indexOf("0123456789")){
        validar=false
        smNombre.textContent="el valor introducido no debe ser numerico"
    }else if(nombre.length<3){
         validar=false
         smNombre.textContent="El nombre debe tener al menos 3 caracteres"
    }
    return validar

}