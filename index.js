var direita = window.document.getElementById('setaDireita')
var esquerda = window.document.getElementById('setaEsquerda')
var leonardo = window.document.getElementById('leonardo')
var samantha = window.document.getElementById('samantha')
var bruna = window.document.getElementById('bruna')


function Rigth (){
    leonardo.style = 'display:none'
    bruna.style = 'display:flex'
    esquerda.style = 'display:flex'
    direita.style = 'display:none'
    
}

function Left (){
    bruna.style = 'display:none'
    leonardo.style = 'display:flex'
    esquerda.style = 'display:none'
    direita.style = 'display:display'

}