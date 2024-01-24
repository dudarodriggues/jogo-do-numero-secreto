let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); 
// função de exibir o texto na tela
function colocarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//funçao para exibir o texto na tela
function exibirMensagemInicial() {
    colocarTexto('h1', 'joguinho');
    colocarTexto('p', 'escolha um número de 1 a 10');
}
exibirMensagemInicial()

// gerar o numeor aleatório do jogo
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdElementosLista = listaDeNumerosSorteados.length;

    if (qtdElementosLista == 10) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
//variavel da tentativas
let tentativas = 1;


// verifica se o chute é igual ao numero secreto
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(listaDeNumerosSorteados);
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        colocarTexto('p', `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            colocarTexto('p', 'o numero secreto é menor');
        } else {
            colocarTexto('p', 'o numero secreto é maior');
        }
        tentativas ++;
    }
}

//função para limpar o campo dos numeros
function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//funcao para desabilitar o botao de novo jogo até a pessoa acertar o numero secreto
function desabilitaBotaoNovoJogo() {
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


//funcão para reiniciar o jogo
function reiniciaJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    exibirMensagemInicial();
    desabilitaBotaoNovoJogo();
}