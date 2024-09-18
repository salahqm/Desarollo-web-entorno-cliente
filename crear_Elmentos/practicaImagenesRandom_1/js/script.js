window.addEventListener("load",inicio)
function inicio(){

    
   
    for(let i = 0;i>20;i++){

       

    }
   
    setInterval(()=>{
        imagenes.forEach((img)=>{
            var num = Math.floor(Math.random() * 20);
            // se puede hacer de de dos formas
            //img.setAttribute("src","./img/"+num+".JPG")
            img.src="./img/"+num+".JPG"
            
        })
    },1000)
    

    
}