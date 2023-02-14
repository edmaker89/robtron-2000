const controle = document.querySelectorAll("[data-controle]") // todos os somar e subtrair
const estatisticas = document.querySelectorAll("[data-estatistica]") // todos os somar e subtrair
const pecas = {
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


controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        //dataset.controle => data-controle
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode) //parentNode passa qual parent esta sendo clicado
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]') // peca recebe o parent clicado


    //decide se foi subtrair ou somar
    if (operacao === '-') {
        peca.value = parseInt(peca.value) - 1 
    }else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca, operacao) {
    console.log(pecas[peca]) //puxa a estaticas da peca clicada
    estatisticas.forEach( (elemento) => {
        console.log(elemento.dataset.estatistica)

        if (operacao === '-'){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }else{
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }
    });
}