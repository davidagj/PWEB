let x, y;

x = parseFloat(prompt("Insira o primeiro numero: "));
y = parseFloat(prompt("Insira o sgeundo numero: "));


function soma() {
    return (x + y);
}

function subtrai() {
    return (x - y);
}

function produto() {
    return (x * y);
}

function divisao() {
    return (x / y);
}

function resto() {
    return (x % y);
}



alert(`A soma é: ${soma()} \nA Subração é: ${subtrai()} \nO produto é: ${produto()} \nA divisão é: ${divisao()} \nO resto é: ${resto()}`)