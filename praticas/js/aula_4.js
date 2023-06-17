const listaCores = document.querySelector('ul.lista'),
    btnFechar = document.querySelector('button.btnFechar');
listaCores.style.display = 'none'
btnFechar.style.display = 'none'

btnFechar.addEventListener('click', ()=> { 
    listaCores.style.display = 'none'
    btnFechar.style.display = 'none'
 });
 
function mostraTintas() { 
    listaCores.style.display = 'block'
    btnFechar.style.display = 'block'
 }