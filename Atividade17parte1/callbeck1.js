const promt = require('prompt-sync')();

function saudacao(nome) {
    console.log("oi " +nome);
}

function entradeNome(callback) {
    var nome = promt('Digite seu nome:')
    callback(nome);
}

entradeNome(saudacao);