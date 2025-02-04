// PEGAR OS TIPOS DE CATACTERES QUE ESTÃO MARCADOS
function getChartTypes() {
    const uppercase = document.querySelector('#include_uppercase').checked;
    const lowercase = document.querySelector('#include_lowercase').checked;
    const number = document.querySelector('#include_number').checked;
    const spacialCharecter = document.querySelector('#include_special_charecter').checked;

    const charTypes = [];

    // VERIFICAR O QUE TÁ MARCADO E COLOCANDO OS CARACTERES NO ARRAY
    if (uppercase == true) {
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if (lowercase == true) {
        charTypes.push('abcdefghijklmnopqrstuvwxyz');
    }

    if (number == true) {
        charTypes.push('0123456789');
    }

    if (spacialCharecter == true) {
        charTypes.push('!@#$%^&*()-_=+[]{}|.<>?/\\');
    }
    return charTypes;
}

// PEGANDO O TAMANHO DA SENHA - ATRAVÉS DO INPUT QUE O USER DIGITOU
function getPasswordSize() {
    const size = document.querySelector('#size').value;

    // VALIDARÇÃO PRA VERIFICAR SE ELE É UM NUMERO, E DANDO UM VALOR MIN E MAX
    if (isNaN(size) || size < 6 || size > 129) {
        mansage('Digitte um número entre 6 e 129!', '#dc2626');
    }

    return size;
}

// GERANDO UM CARACTER ALEATORIO DOS VALORES DO ARRAY
function randomCharType(charTypes) {
    const randomIndex = Math.floor(Math.random() * charTypes.length);
    charTypes[randomIndex];

    return charTypes[randomIndex][Math.floor(Math.random() * charTypes[randomIndex].length)];
}

// GERANDO A SENHA A PARTIR DO TAMANHO ESPECIFICO
function generatePassword(size, charTypes) {
    let passwordGenarated = '';

    while (passwordGenarated.length < size) {
        passwordGenarated += randomCharType(charTypes);
    }

    return passwordGenarated;
}

// MENSAGEM DE ERRO
function mansage(text, background) {
    Toastify({
        text: text,
        duration: 3000,
        style: {
            background: background,
            boxShadow: 'none'
        }
    }).showToast();
}

// EXIBINDO SENHA ALEATORIA
function gerarSenha() {
    const size = getPasswordSize();
    const charTypes = getChartTypes();
    
    if(!size){
        return;
    }
    
    if(!charTypes.length){
        mansage('Selecione pelo menos um tipo de caractere!', '#dc2626')
        return;
    }

    // GERANDO A SENHA
    const passwordGenarated = generatePassword(size, charTypes);

    // ADICIONANDO CLASSE SHOW NO #password_conteiner
    document.querySelector('#password_conteiner').classList.add('show');

    document.querySelector('#password').textContent = passwordGenarated;
}
const btnGerar = document.querySelector('#generate');
btnGerar.addEventListener('click', gerarSenha);


// COPIAR PARA A ÁREA DE TRANSFERÊNCIA
function copyPassword(){
    const copyBtn = document.querySelector('#copy');
    
    navigator.clipboard.writeText(document.querySelector('#password').textContent);
    mansage('Senha copiada com sucesso!', '#8bc34a');
}
const copyBtn2 = document.querySelector('#copy');
copyBtn2.addEventListener('click', copyPassword);