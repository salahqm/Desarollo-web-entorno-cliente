window.addEventListener('load',() =>{
    const contendorPadre = document.querySelector('body');
    const boton = document.createElement("button");
    boton.textContent='Cargar imagen';
    contendorPadre.appendChild(boton)

    const contendor = document.createElement('div')
    contendorPadre.appendChild(contendor)
    var contador;
    
    boton.addEventListener('click' , ()=>{
        
        
        for(let i =0;i<21;i++){
            
            const imagenes = document.createElement('img')
            const num = Math.floor(Math.random()*21)
            if(i % 2 ==0){
                imagenes.setAttribute("src","https://randomuser.me/api/portraits/men/"+num+".jpg")
            }else{
                imagenes.setAttribute("src","https://randomuser.me/api/portraits/women/"+num+".jpg")
            }

            contendor.appendChild(imagenes)
            contador++
            
           
            
        }
        if(contador>20){
            contendor.removeChild(imagenes)
        }

    })
    
   

})