let lista = [];



function adicionarAmigo(){
    let isValid = validar();
    if (isValid == true){
        adicionar();
    }
}

function adicionar(){
    let input = document.getElementById('amigo');
    lista.push (input.value);
    console.log(lista);
    input.value = '';
}

function validar(){
    let input = document.getElementById('amigo');;

    if ( input.value == ''){
        alert('Por favor, adicionar nome.');
        return false;
    }

    return true;
}
