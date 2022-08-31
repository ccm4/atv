const resultado = document.querySelector(' .resultado ');
const confirmar = document.querySelector(' .confirmar ');

function insert( valor ){
    resultado.innerHTML += valor;
}


function apagar() {
    resultado.innerHTML = ' ';
}


function deletarUmporUm() {
    if(resultado.textContent){
        let result = document.getElementById('calculo').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    } 
}


function confirma() {
    if(resultado.textContent != 'Erro') {
        document.getElementById("calculo").innerHTML = eval(resultado.innerHTML)
    }
}