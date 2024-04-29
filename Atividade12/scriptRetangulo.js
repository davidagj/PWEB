function Retangulo(base, altura) {
    this.base = base
    this.altura = altura
  }
  
  Retangulo.prototype.calcArea  = function () {
    return  base * altura;
  }
  const base = parseFloat(prompt("Insira a base do Retângulo: "));
  const altura = parseFloat(prompt("Insira a altura do Retângulo"));
  
  const retangulo = new Retangulo(base, altura);

  alert(`A área do retângulo é: ${retangulo.calcArea()}`);
  
