function animateElement(element,direccion,start, end, duration){
    return new Promise((resolve, reject)=>{ //resolve: Para completar promesas. reject: Para rechazarlas. (Como then y catch). NO SON PALABRAS RESERVADAS.
        const delta = (end - start)*30/duration; //Distancia que va a recorrer cada elemento x 40 (milisegundos) / duración
        if(direccion === 'ArribaAbajo'){
            element.style.top = start; //start parte desde la izquierda
        }else{
            element.style.left = start; //start parte desde la izquierda
        }
        let counter = 0;
        const loop = setInterval(()=>{ //función itineraria
            const currentPosition = start + delta * counter++;
            if(direccion === 'ArribaAbajo'){
                element.style.top = currentPosition; //start parte desde la izquierda
            }else{
                element.style.left = currentPosition; //start parte desde la izquierda
            }            
            if(start < end && currentPosition >= end){
                clearInterval(loop);
                resolve(); //Llama a then cuando termina la animación
            }else if(start > end && currentPosition <= end){
                clearInterval(loop);
                resolve(); //Llama a then cuando termina la animación
            }
        }, 30);// ejecuta una funcion cada cierto tiempo
    });
 }

function animateElementgato(element, start, end, duration){
    return new Promise((resolve, reject)=>{ //resolve: Para completar promesas. reject: Para rechazarlas. (Como then y catch). NO SON PALABRAS RESERVADAS.
        const delta = (end - start)*30/duration; //Distancia que va a recorrer cada elemento x 40 (milisegundos) / duración
        element.style.top = start; //start parte desde la izquierda
        let counter = 0;
        const loop = setInterval(()=>{ //función itineraria
            const currentPosition = end + delta * counter++;
            element.style.top = currentPosition;
            if(start > end && currentPosition >= end){
                clearInterval(loop);
                resolve(); //Llama a then cuando termina la animación
            }else if(start < end && currentPosition <= end){
                clearInterval(loop);
                resolve(); //Llama a then cuando termina la animación
            }
        }, 30);// ejecuta una funcion cada cierto tiempo
    });
 }
 
 // Somos las programadoras de la promise
 //====================== Promise =====================
 // Somos las programadoras usuarias de la promise
 
 const allImg = document.querySelectorAll('img');
 Promise.all([
    animateElement(allImg[0],'', 0, 800, 3000),
    animateElement(allImg[1],'', 0, 800, 8000)
 ]
    
 ).then(()=> {
  return Promise.all([animateElement(allImg[0],'ArribaAbajo', 0, 400, 8000),
  animateElement(allImg[1],'ArribaAbajo', 0, 450, 3000)]
    
 ).then(()=> {
    return Promise.all([animateElement(allImg[0],'', 800, 0, 8000),
    animateElement(allImg[1],'', 800, 0, 3000)]

 ).then(()=>{
    return Promise.all([animateElement(allImg[0],'ArribaAbajo', 400, 0, 8000),
    animateElement(allImg[1],'ArribaAbajo', 450, 0, 3000)]     

 )
 })
})
}).catch()