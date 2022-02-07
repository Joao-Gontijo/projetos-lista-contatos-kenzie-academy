const btn = document.getElementById('btn');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputTelefone = document.getElementById('telefone');

const listaContatosContainer = document.querySelector('.secaoListaContatos_Lista');
const nomeInvalido = document.querySelector('.inputNomeClass');
const emailInvalido = document.querySelector('.inputEmailClass');
const telefoneInvalido = document.querySelector('.inputTelefoneClass');

// const listaContatosLocal = [];
let dadosSalvos = JSON.parse(localStorage.getItem('contato'));
let id = 0;
for(let i = 0; i < dadosSalvos.length; i++){
    id++;
}

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
        dadosSalvos.push(novoContato);
        localStorage.setItem('contato', JSON.stringify(dadosSalvos));

        renderizarLista();

        inputNome.value = '';
        inputEmail.value = '';
        inputTelefone.value = '';
    }

}

btn.addEventListener('click', adicionarContato);

function renderizarLista(){
    listaContatosContainer.innerHTML = '';
    
    if(dadosSalvos.length > 0){
        for(let i = 0; i < dadosSalvos.length; i++){
            criarNaTela(dadosSalvos[i]);
        }
    } else {
        const listaVazia = `<li>
            <p>Não há contatos na sua lista!</p>
        </li>`;

        listaContatosContainer.innerHTML = listaVazia;
    }
    // if(listaContatosLocal.length !== 0){
    //     for(let i = 0; i < listaContatosLocal.length; i++){
    //         criarNaTela(listaContatosLocal[i]);
    //     }
    // } else {
    //     const listaVazia = `<li>
    //         <p>Não há contatos na sua lista!</p>
    //     </li>`;

    //     listaContatosContainer.innerHTML = listaVazia;
    // }
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
    const idContatoClicado = contatoClicado.dataset.id;
    console.log(idContatoClicado);

    const contatoRemovido = dadosSalvos.find((contato) => contato.id == idContatoClicado);
    const posicaoContatoRemovido = dadosSalvos.indexOf(contatoRemovido);
    dadosSalvos.splice(posicaoContatoRemovido, 1);
    localStorage.setItem('contato', JSON.stringify(dadosSalvos));

    renderizarLista();

    // //find procura na lista o primeiro objeto onde for exatamente igual a condição
    // const contatoRemovido = listaContatosLocal.find((contato) => 
    //     contato.id == idContatoCliado);
    // //retorna a posição do contato na lista
    // const posicaoContatoRemovido = listaContatosLocal.indexOf(contatoRemovido);

    // //retira o elemento da lista
    // listaContatosLocal.splice(posicaoContatoRemovido, 1);

    // renderizarLista();
}

renderizarLista(); 