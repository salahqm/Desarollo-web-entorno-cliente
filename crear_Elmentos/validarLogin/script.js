let accion = document.querySelector("#validar"); 
accion.onsubmit = (event) => {
   
    let validar = true;

    let contraseña = document.querySelector('#contraseña').value;
    let smContra = document.querySelector('#smContraseña');
     // patron de la contraseña
    let patronContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\$).{8,}$/;
     
    let email = document.querySelector('#email').value
    let smEmail = document.querySelector('#smEmail')
    // patron email
    let patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    validacion(contraseña,patronContraseña,smContra)
    validacion(email,patronEmail,smEmail)

    function validacion(variable,patron,sm){
         // Validar que el campo no esté vacío
    if (variable.length === 0) { 
        sm.textContent = "*Campo Obligatorio";
        validar = false;
    } else if (!patron.test(variable)) {
        sm.textContent = "patron incorrecto";
        validar = false;
    }else{
        sm.textContent=""
    }
    

    }
    

  
   
   

    return validar;
};
