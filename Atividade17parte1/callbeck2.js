function exibeMensagensNaOrdem(mensagem, callbeck){
    console.log(mensagem);
    callbeck();
}

exibeMensagensNaOrdem('Essa é a primeira mensagem exibida na ordem',
 function(){
    console.log('Essa e a segunda mensagem exibida na ordem')
});