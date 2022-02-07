

const btn = document.getElementById('btn');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputTelefone = document.getElementById('telefone');


const listaContatosLocal = [];

function adicionarContato(){
    const valorNome = inputNome.value;
    const valorEmail = inputEmail.value;
    const valorTelefone = inputTelefone.value;

    const novoContato = {
        nome: valorNome,
        email: valorEmail,
        telefone: valorTelefone
    }

    listaContatosLocal.push(novoContato);
    
    console.log(listaContatosLocal);
}

btn.addEventListener('click', adicionarContato);