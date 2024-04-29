  class Conta {
    saldo;

    constructor(nomeCorrentista, banco, numeroConta){
      this.nomeCorrentista = nomeCorrentista;
      this.banco = banco;
      this.numeroConta = numeroConta;
    }
  
    setSaldo(value) {
      this.saldo = value;
    }

    getSaldo() {
      return this.saldo;
    }
  
    getNomeCorrentista() {
      return this.nomeCorrentista;
    };
  
    getBanco() {
      return this.banco;
    }
  
    getNumeroConta() {
      return this.numeroConta;
    }
  }

  
  
  
  class Corrente extends Conta {
    saldoEspecial;

    constructor(nomeCorrentista, banco, numeroConta) {
      super(nomeCorrentista, banco, numeroConta);
    }

    setSaldoEspecial(value) {
      this.saldoEspecial = value;
    }
  
    getSaldoEspecial() {
      return this.saldoEspecial;
    }
    
    printCorrente() {
      alert(`Nome: ${contaCorrente.getNomeCorrentista()} 
      \nBanco: ${contaCorrente.getBanco()}   
      \nNumero da conta:${contaCorrente.getNumeroConta()} 
      \nSaldo: ${contaCorrente.getSaldo()}  
      \nSaldo especial: ${contaCorrente.getSaldoEspecial()}  \n`
      )   
    }
  }
  
  class Poupanca extends Conta {
     juros;
     dataVencimento;

    constructor(nomeCorrentista, banco, numeroConta) {
      super(nomeCorrentista, banco, numeroConta);
    }
    
    setJuros(value) {
      this.juros = value;
    }
  
    setDataVenc(value) {
      this.dataVencimento = value;
    }

    getJuros() {
      return this.juros;
    }
  
    getDataVencimento() {
      return this.dataVencimento;
    }

    printPoupanca() {
      alert(`Nome: ${contaPoupanca.getNomeCorrentista()}
      \nBanco: ${contaPoupanca.getBanco()}  
      \nNumero da conta: ${contaPoupanca.getNumeroConta()} 
      \nSaldo: ${contaPoupanca.getSaldo()}  
      \nJuros: ${contaPoupanca.getJuros()}
      \nData de vencimento: ${contaPoupanca.getDataVencimento()}  \n`
      )
    }
  }
     
  for(x = 0; x < 2; x++){

    const nome = prompt("Insira o nome")
    const banco = prompt("Insira o o banco")
    const numConta = prompt("Insira o numero da conta")
    const tipoConta = prompt("Qual tipo de conta? 1 - Conta Corrente 2 - Conta Poupança")
  
      if(tipoConta == 1) {
        contaCorrente = new Corrente(nome, banco, numConta);
        contaCorrente.setSaldo(parseFloat(prompt("Insira o saldo da conta")));
        contaCorrente.setSaldoEspecial(parseFloat(prompt("Insira o limite do saldo especial")));
      } else if(tipoConta == 2) {
        contaPoupanca = new Poupanca(nome, banco, numConta);
        contaPoupanca.setSaldo(parseFloat(prompt("Insira o saldo da conta")));
        contaPoupanca.setJuros(parseFloat(prompt("Insira o juros em %")));
        contaPoupanca.setDataVenc(parseFloat(prompt("Insira a data do vencimento no formato dd/mm/yyyy")));
      } else {
        alert("Tipo de conta inválida")
      }
  }

  contaCorrente.printCorrente();
  contaPoupanca.printPoupanca();
  

  
  
  
  