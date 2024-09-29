window.addEventListener('load',()=>{

    const body = document.querySelector('body')
    const crearTabla = document.getElementById('btnTablas')

    crearTabla.addEventListener('click',()=>{
        let filas = parseInt(prompt("Introduce la filas: "))
        let columnas =  parseInt(prompt("Introduce la columnas: "))
        const tabla = document.createElement('table')
        body.appendChild(tabla)
        for (let index = 0; index < filas; index++) {
            const filas = document.createElement('tr')
            filas.textContent="fila"
            tabla.appendChild(filas)
           for (let j = 0; j < columnas; j++) {
            const columnas = document.createElement('th')
            columnas.textContent="columnas"
            filas.appendChild(columnas)
            const botonColores = document.createElement('button')
            botonColores.innerText=
           }
            
        }
    })

})