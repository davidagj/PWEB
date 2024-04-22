const infos = [
  { class: 'Magreza', grau: 0 },
  { class: 'Normal', grau: 0 },
  { class: 'Sobrepeso', grau: 1 },
  { class: 'Obesidade', grau: 2 },
  { class: 'Obesidade GRAVE', grau: 3 }
];

 function calcIMC(pe, alt) {
  return (pe / Math.pow(alt,2)).toFixed(2);
 }

 const peso = parseFloat(prompt("Entre com seu peso"));
 const altura = parseFloat(prompt("Entre com sua altura"));

 const imc = calcIMC(peso, altura);

 const imprime = (imc, value ) => 
  alert(`IMC: ${imc}  Classificação: ${value.class}  Obesidade(grau): ${value.grau}`);

  const testeIMC = imc => {
    if (imc <= 18.5) {
      imprime(imc, infos[0]);
      return;
    }
    
    if (imc <= 24.9) {
      imprime(imc, infos[1]);
      return;
    }
    
    if (imc <= 29.9) {
      imprime(imc, infos[2]);
      return;
    }
    
    if (imc <= 39.9) {
      imprime(imc, infos[3]);
      return;
    }
    
    imprime(imc, infos[4]);
  };
  

  testeIMC(imc);