

const btn = document.getElementById('btn');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputTelefone = document.getElementById('telefone');


const listaContatosLocal = [];

const novoContato = {
    nome: '',
    email: '',
    telefone: ''
}


listaContatosLocal.push(novoContato);

function adicionarContato(){
    const valorNome = inputNome.value;
    const valorEmail = inputEmail.value;
    const valorTelefone = inputTelefone.value;

    console.log(valorNome + " " + valorEmail + " " + valorTelefone);
}

btn.addEventListener('click', adicionarContato);