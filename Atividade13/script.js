function abreJanela(imagem) {
    imagem.src = 'img/Aberta.png'
    document.getElementById("text").innerHTML = "Janela aberta"
}

function fechaJanela(imagem) {
    imagem.src = 'img/Fechada.png'
    document.getElementById("text").innerHTML = "Janela fechada"
}

function quebraJanela(imagem) {
    imagem.src = 'img/Quebrada.png'
    document.getElementById("text").innerHTML = "Janela Quebrada"
}