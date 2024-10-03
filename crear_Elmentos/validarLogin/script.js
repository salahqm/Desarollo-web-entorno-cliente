let accion = document.querySelector("#validar"); 
accion.onsubmit = (event) => {
   
    let validar = true;
// terminar nombre
    let nombre = document.querySelector('#nombre').value

    let contraseña = document.querySelector('#contraseña').value;
    let smContra = document.querySelector('#smContraseña');
     // patron de la contraseña
    let patronContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\$).{8,}$/;

         // Validar que el campo no esté vacío
         if (contraseña.length === 0) { 
            smContra.textContent = "*Campo Obligatorio";
            validar = false;
        } else if (!patronContraseña.test(contraseña)) {
            smContra.textContent = "patron incorrecto";
            validar = false;
        }else{
            smContra.textContent=""
        }
     
    let email = document.querySelector('#email').value
    let smEmail = document.querySelector('#smEmail')
    // patron email
    let patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

     // Validar que el campo no esté vacío
     if (email.length === 0) { 
        smEmail.textContent = "*Campo Obligatorio";
        validar = false;
    } else if (!patronEmail.test(email)) {
        smEmail.textContent = "*ejemplo@gmail.com";
        validar = false;
    }else{
        smEmail.textContent=""
    }


  

    

  
   
   

    return validar;
};
