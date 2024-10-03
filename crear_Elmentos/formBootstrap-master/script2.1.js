let accion = document.getElementById("cargar");
accion.onsubmit = () => {

let validar = true

const ciclo = document.querySelector("input[type=radio]").value
const modulo = document.querySelectorAll("input[name=modulos]")
let curso = document.getElementById("selectCurso").value;
let nombre = document.getElementById("nombre").value
let horas = document.getElementById("exampleFormControlSelect2").value
let comentario = document.getElementById('exampleFormControlTextarea1').value

let smModulos = document.getElementById('smModulos')
let smRadio = document.getElementById('smCiclo')
let smCurso = document.getElementById('smCurso')
let smNombre = document.getElementById('smNombre')
let smHoras = document.getElementById('smHoras')




    if(ciclo =="" || modulo=="" || curso =="" || nombre =="" 
        || horas =="" ){

            validar = false
            smModulos.textContent="*Campos obligatorios"
            smRadio.textContent="*Campos obligatorios"
            smCurso.textContent="*Campos obligatorios"
            smNombre.textContent="*Campos obligatorios"
            smHoras.textContent="*Campos obligatorios"
            
    }else{
        smModulos.textContent=""
        smRadio.textContent=""
        smCurso.textContent=""
        smNombre.textContent=""
        smHoras.textContent=""

    }






    return validar

}
