window.onload = () => {
    

    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const divs = [
        document.getElementById('c1'),
        document.getElementById('c2'),
        document.getElementById('c3'),
        document.getElementById('c4'),
        document.getElementById('c5'),
        document.getElementById('c6'),
        document.getElementById('c7'),
        document.getElementById('c8'),
        document.getElementById('c9'),
        document.getElementById('c10'),
        document.getElementById('c11'),
        document.getElementById('c12')
    ];
   
    btn1.addEventListener("click" , () => { 
       // recorro todo el vector con un for y asigno a cada caja un numero aleatorio
        for (let i = 0; i < divs.length; i++) {
            var num= Math.floor(Math.random()*1000);
            divs[i].textContent = num;
        }
    })

    btn2.addEventListener("click",()=>{
        
        for (let i = 0; i < divs.length; i++) {
            const numeroAleatorio = Math.floor(Math.random() * 16777215);
            const colorHex = '#' + numeroAleatorio.toString(16).padStart(6, '0');

            divs[i].style.backgroundColor=colorHex;
        }
    })
    btn3.addEventListener("click",()=>{
        for (let i = 0; i < divs.length; i++) {
            const num =parseInt(prompt("Introduce el numero "+(i+1)));
            divs[i].textContent=num;
        }
    }) 

    btn4.addEventListener("click",()=>{
        setInterval(function(){
            for (let i = 0; i < divs.length; i++) {
                var num= Math.floor(Math.random()*1000);
                divs[i].textContent = num;
            }
            for (let i = 0; i < divs.length; i++) {
                const numeroAleatorio = Math.floor(Math.random() * 16777215);
                const colorHex = '#' + numeroAleatorio.toString(16).padStart(6, '0');
    
                divs[i].style.backgroundColor=colorHex;
            }
        
        },1000)
    })
}
