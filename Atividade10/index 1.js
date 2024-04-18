 function maior() {
    var numeros =[];
    numeros[0] = prompt('Insira o primeiro numero');
    numeros[1] = prompt('Insira o segundo numero');
    numeros[2] = prompt('Insira o terceiro numero');

    alert(Math.max.apply(null,numeros));
}


function ordernar() {
    var orde =[];
    orde[0] = prompt('Insira o primeiro numero');
    orde[1] = prompt('Insira o segundo numero');
    orde[2] = prompt('Insira o terceiro numero');

    orde.sort(function(a,b){return a-b})

    alert(orde);
}

function palindromo() {
    var palim = prompt("Insira a palavra para testar se é palimdromo: ")
    palim = palim.toUpperCase().replace(/[^a-zA-Z0-9]/g, '');
    if (palim == palim.split('').reverse().join('')){
        alert("É palimdromo");
    } else {
        alert("Não é palimdromo");
    }

}



function trianguloExiste(x, y, z){
    return x + y > z && x + z > y && y + z > x;
}

function tipoTriangulo(){
    var a,b,c;

    a = prompt('Insira o primeiro lado do triângulo');
    b = prompt('Insira o segundo lado do triângulo');
    c = prompt('Insira o terceiro lado do triângulo');

    if (!trianguloExiste(a,b,c)){
        alert("Não é possivel formar um triângulo");
    } else if (a == b && b == c) {
        alert("Triângulo equilatero");
    } else if (a == b || a == c || b == c) {
        alert("Triângulo Isósceles");
    } else {
        alert("Triângulo Escaleno");
    }
}
