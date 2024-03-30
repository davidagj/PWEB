var nome,nota1,nota2,nota3,media;

nome = prompt("Digite teu nome: ");


nota1 = parseFloat(prompt("Insira a primeira nota: "));
nota2 = parseFloat(prompt("Insira a segunda nota: "));
nota3 = parseFloat(prompt("Insira a terceira nota: "));

media = (nota1 + nota2 + nota3) / 3 ;

alert(`${nome} sua média é: ${media}`);