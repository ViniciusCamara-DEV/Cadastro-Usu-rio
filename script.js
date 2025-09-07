//SELECIONA OS ELEMENTOS NO DOM
const btnCadastrar = document.getElementById('button')
const inputUsuario = document.getElementById('usuario')
const inputNome = document.getElementById('nome')
const inputEmail = document.getElementById('email')
const inputSobreNome = document.getElementById('sobre_nome')
const inputSenha = document.getElementById('senha')
const inputConfirma = document.getElementById('confirma_senha')
const checkBox = document.getElementById('check_box')
const inputs = document.querySelectorAll('#input input')
const erroTermos = document.getElementById('erro-termos')
const check = document.getElementById('check_box')


//EVENTO DE CLIQUE NO BOTÃO
btnCadastrar.addEventListener("click", (e) => {
    e.preventDefault();

    let formValido = true;
    let primeiroInvalido = null;

    // Validação dos inputs
    inputs.forEach((input) => {
        const mensagemErro = input.parentElement.querySelector("small");

        // Verifica se o campo está vazio
        if (input.value.trim() === "") {
            input.classList.add("erro");
            mensagemErro.textContent = "Campo obrigatório";
            mensagemErro.style.display = "block";

            // Armazena o primeiro campo inválido para dar foco
            if (!primeiroInvalido) {
                primeiroInvalido = input;
            }

            formValido = false;
        } else {
            input.classList.remove("erro");
            mensagemErro.textContent = "";
            mensagemErro.style.display = "none";
        }
    });

    // Validação da senha e confirmação
    const senha = document.getElementById("senha");
    const confirmaSenha = document.getElementById("confirma_senha");
    const msgSenha = senha.parentElement.querySelector("small");
    const msgConfirma = confirmaSenha.parentElement.querySelector("small");

    if (senha.value && confirmaSenha.value && senha.value !== confirmaSenha.value) {
        confirmaSenha.classList.add("erro");
        msgConfirma.textContent = "As senhas não coincidem";
        msgConfirma.style.display = "block";

        if (!primeiroInvalido) {
            primeiroInvalido = confirmaSenha;
        }

        formValido = false;
    } else if (confirmaSenha.value) {
        confirmaSenha.classList.remove("erro");
        msgConfirma.textContent = "";
        msgConfirma.style.display = "none";
    }

    // Validação do checkbox de termos
    if (!checkBox.checked) {
        erroTermos.textContent = "Você deve aceitar os termos";
        erroTermos.style.display = "block";
        formValido = false;
    } else {
        erroTermos.textContent = "";
        erroTermos.style.display = "none";
    }

    // Foca no primeiro campo inválido
    if (primeiroInvalido) {
        primeiroInvalido.focus();
    }

    // Se tudo estiver válido, cadastra o usuário
    if (formValido) {
        cadastrarUsuario();
    }
});

// Função para cadastrar usuário
function cadastrarUsuario() {
    const listaUsuarios = document.getElementById("lista_usuarios");
    const usuarioNome = document.getElementById("usuario").value;
    const inputEmail = document.getElementById('email').value;

    const li = document.createElement("li");
    li.innerHTML = `<strong>Usuário:</strong> ${usuarioNome} &nbsp; | &nbsp; <strong>Email:</strong> ${inputEmail}`;
    listaUsuarios.appendChild(li);

    // Limpa os campos após cadastrar
    inputs.forEach(input => input.value = "");
    checkBox.checked = false;

    alert("Usuário cadastrado com sucesso!");
}

// REMOVER ERRO QUANDO O USUÁRIO COMEÇA A DIGITAR
inputs.forEach((input) => {
    input.addEventListener("input", () => {
        if (input.classList.contains("erro")) {
            input.classList.remove("erro");
            const mensagemErro = input.parentElement.querySelector("small");
            if (mensagemErro) {
                mensagemErro.textContent = "";
                mensagemErro.style.display = "none";
            }
        }
    });
});
