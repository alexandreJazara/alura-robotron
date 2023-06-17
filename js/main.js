const controle = document.querySelectorAll(".controle-ajuste"),
estatisticas = document.querySelectorAll("[data-estatistica]"),
pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (e) => {
    e.addEventListener("click", (eve) =>{
        manipulaDados(eve.target.dataset.controle,eve.target.parentNode);
        atualizaEstatisticas(eve.target.dataset.controle,eve.target.dataset.peca)
    })
})

function manipulaDados(operacao,controle){
    const peca = controle.querySelector('[data-contador]');

    if (operacao === "-") {
        peca.value = parseInt(peca.value)  - 1;
    }else{
        peca.value = parseInt(peca.value)  + 1;
    }
}


function atualizaEstatisticas(operacao,peca){
    estatisticas.forEach( (el) => {
        if (operacao === "-") {
            el.textContent = parseInt(el.textContent) - pecas[peca][el.dataset.estatistica]
        }else{
            el.textContent = parseInt(el.textContent) + pecas[peca][el.dataset.estatistica]
        }
            
    })
}