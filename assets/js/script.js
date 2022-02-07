const btn = document.getElementById('btn');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputTelefone = document.getElementById('telefone');

const meuStorage = localStorage;

const listaContatosContainer = document.querySelector('.secaoListaContatos_Lista');
const nomeInvalido = document.querySelector('.inputNomeClass');
const emailInvalido = document.querySelector('.inputEmailClass');
const telefoneInvalido = document.querySelector('.inputTelefoneClass');

const listaContatosLocal = [];
let id = 0;

function adicionarContato(){
    nomeInvalido.innerHTML = '';
    emailInvalido.innerHTML = '';
    telefoneInvalido.innerHTML = '';
    
    const valorNome = inputNome.value;
    const valorEmail = inputEmail.value;
    const valorTelefone = inputTelefone.value;

    const novoContato = {
        id: id,
        nome: valorNome,
        email: valorEmail,
        telefone: valorTelefone
    }

    const p = document.createElement('p');

    if(novoContato.nome == "" ){
        p.innerText = "Campo nome em branco!";
        nomeInvalido.appendChild(p);
    } else if(novoContato.email == ""){
        p.innerText = "Campo email em branco!";
        emailInvalido.appendChild(p);
    } else if(novoContato.telefone == ""){
        p.innerText = "Campo telefone em branco!";
        telefoneInvalido.appendChild(p);
    } else {
        id++;
        listaContatosLocal.push(novoContato);
        
        renderizarLista();

        inputNome.value = '';
        inputEmail.value = '';
        inputTelefone.value = '';
    }

}

btn.addEventListener('click', adicionarContato);

function renderizarLista(){
    listaContatosContainer.innerHTML = '';
    
    if(listaContatosLocal.length !== 0){
        for(let i = 0; i < listaContatosLocal.length; i++){
            criarNaTela(listaContatosLocal[i]);
        }
    } else {
        const listaVazia = `<li>
            <p>Não há contatos na sua lista!</p>
        </li>`

        listaContatosContainer.innerHTML = listaVazia;
    }
}

function criarNaTela(contato){
    const li = document.createElement('li');
    const button = document.createElement('button');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const span = document.createElement('span');

    button.id = "removerContato"
    button.addEventListener('click', removerContato);

    //passa o id do contato para o html, no caso, para a lista
    li.dataset.id = contato.id;
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


function removerContato(evento){
    const botaoClicado = evento.target;
    const contatoClicado = botaoClicado.parentElement;
    const idContatoCliado = contatoClicado.dataset.id;
    //find procura na lista o primeiro objeto onde for exatamente igual a condição
    const contatoRemovido = listaContatosLocal.find((contato) => 
        contato.id == idContatoCliado);
    //retorna a posição do contato na lista
    const posicaoContatoRemovido = listaContatosLocal.indexOf(contatoRemovido);

    //retira o elemento da lista
    listaContatosLocal.splice(posicaoContatoRemovido, 1);

    renderizarLista();
}

renderizarLista();