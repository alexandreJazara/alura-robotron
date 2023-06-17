const btn = document.querySelector('button#calcular'),
    res = document.querySelector('h2.resultado')
    btn.addEventListener('click',()=>{
        res.innerHTML = 'Fui clicado!'
    })