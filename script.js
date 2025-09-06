//SELECIONA OS ELEMENTOS NO DOM
const btnCadastrar = document.getElementById('button')
const inputUsuario = document.getElementById('usuario')
const inputNome = document.getElementById('nome')
const inputEmail = document.getElementById('email')
const inputSobreNome = document.getElementById('sobre_nome')
const inputSenha = document.getElementById('senha')
const inputConfirma = document.getElementById('confirma_senha')
const check = document.getElementById('check_box')



//EVENTO DE CLIQUE NO BOTÃO
btnCadastrar.addEventListener('click', () =>{
    const usuario = inputUsuario.value.trim();
    const email = inputEmail.value.trim();
    const nome = inputNome.value.trim();
    const sobre_nome = inputSobreNome.value.trim();
    const senha = inputSenha.value.trim();


//VALIDAÇÃO BÁSICA
   if(usuario === '' || email === '' || nome === '' ||  sobre_nome === '' || senha === ''){
      alert ('Por favor, verifique se todos os campos foram preenchidos!');
        return;
    }

    if(!check.checked){
        alert('Por favor, aceite os termos para seguir com o cadastro!');
        return;
    }

//CRIAR ITEM DA LISTA
    const li = document.createElement('li');
    li.textContent = `Usuário: ${usuario} | Email: ${email}`;

//ADICIONAR A LISTA
    lista_usuarios.appendChild(li);

//LIMPAR OS CAMPOS
    inputUsuario.value = '';
    inputEmail.value = '';
    inputNome.value = '';
    inputSobreNome.value = '';
    inputSenha.value = '';
    inputConfirma.value = '';
})