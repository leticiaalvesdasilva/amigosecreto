let lista = [];

function adicionarAmigo(){
    let isValid = validar();
    if (isValid == true){
        adicionar();
        adicionarTela();
    }
}

function adicionar(){
    let input = document.getElementById('amigo');
    let existeDuplicado = lista.find(nome => nome.toLowerCase() == input.value.toLowerCase());
   
    if (existeDuplicado !== undefined){
        alert('nome duplicado: '+existeDuplicado);
    }
    else {
        lista.push (input.value);
    }
    console.log(lista);
   
    input.value = '';
}

function adicionarTela(){
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    
    lista.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        ul.appendChild(li);        
    })
}

function validar(){
    let input = document.getElementById('amigo');

    if ( input.value == ''){
        alert('Por favor, adicionar nome.');
        return false;
    }

    return true;
}

function sortearAmigo(){
    let numero = parseInt(Math.random()* lista.length);
    let nome = (lista[numero]);
    lista = [];
    adicionarTela();
    resultado(nome);
}

function resultado(nome){
    console.log('O nome sorteado é:' + nome);
    let ul = document.getElementById('resultado');
    ul.innerHTML = '';
    let li = document.createElement('li');
    li.textContent = 'O nome sorteado é:' + nome;
    ul.appendChild(li);  

}


