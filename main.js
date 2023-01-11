enviar=document.getElementById('enviar')
resultado=document.querySelector('.resultado')
borrar=document.getElementById('borrar')

enviar.addEventListener('click',()=>{
    resultado.innerHTML='';
    ingresar=document.querySelector('.ingresar').value
  
    for(let i=0; i<ingresar; i++){
        
        n=Math.floor(Math.random() * 10);
        resultado.innerHTML += n;
    }

})

borrar.addEventListener('click',()=>{
    resultado.innerHTML='';
})




