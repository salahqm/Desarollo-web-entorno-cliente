 window.addEventListener("load",inicio)
function inicio(){

    
    
    const div = document.querySelector('.gallery');
  
    for(var i =0;i<10;i++){
        const img=document.createElement('img')
       img.textContent=i;
        img.className='gallery img'
        div.appendChild(img)
    }

    const imagenes = document.querySelectorAll('.gallery img');

    setInterval(()=>{
        imagenes.forEach((img)=>{
            var num = Math.floor(Math.random() * 20);
            // se puede hacer de de dos formas
            //img.setAttribute("src","./img/"+num+".JPG")
            img.src="./img/"+num+".JPG"
            
        })
    },1000)
    

    
}
