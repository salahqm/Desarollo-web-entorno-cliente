window.addEventListener('load', () => {


    const url = "http://camacho.atwebpages.com/webcam/getWebcam.php"

    const ubicacion = document.querySelector('#fila');
    fetch(url)
        .then(response => response.json())
        .then(datos => mostrarDatos(datos))
        .finally(() => console.log("biennnnnnnnn"))
        .catch(error => console.log(error.data))


    function mostrarDatos(datos) {

        datos.forEach(webc => {
            const columna = document.createElement('div')
            columna.className = "col-lg-4"
            ubicacion.appendChild(columna)
            const tarjeta = document.createElement('div');
            tarjeta.className="card"
            columna.appendChild(tarjeta)
            const videoW= document.createElement('video');
            videoW.setAttribute('src',webc.url,'autoplay loop')
            
            tarjeta.appendChild(videoW)
            const cardBody = document.createElement('div')
            cardBody.className="card-body"
            tarjeta.appendChild(cardBody);
            const titulo = document.createElement('h4');
            titulo.className='card-title';
            titulo.textContent=webc.lugar;
            cardBody.appendChild(titulo)
            const subtitulo= document.createElement('p')
            subtitulo.className='card-text';
            subtitulo.textContent=webc.tiempo
            cardBody.appendChild(subtitulo)



        });
    }

})