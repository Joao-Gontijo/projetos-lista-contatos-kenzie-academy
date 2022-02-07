

const btn = document.getElementById('btn');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputTelefone = document.getElementById('telefone');

const listaContatosContainer = document.querySelector('.secaoListaContatos_Lista');

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
    
    renderizarLista();
}

btn.addEventListener('click', adicionarContato);

function renderizarLista(){
    listaContatosContainer.innerHTML = '';
    for(let i = 0; i < listaContatosLocal.length; i++){
        criarNaTela(listaContatosLocal[i]);
    }
}

function criarNaTela(contato){
    const li = document.createElement('li');
    const button = document.createElement('button');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const span = document.createElement('span');

    button.id = "removerContato"

    //editar conteúdo de um elemento
    h2.innerText = contato.nome;
    p.innerText = contato.email;
    span.innerText = contato.telefone;
    //insere um elemento dentro de outro
    li.appendChild(button);
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(span);

    listaContatosContainer.appendChild(li);
}