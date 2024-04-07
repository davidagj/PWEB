const conditionals = {
  tesoura: {
    papel: 'vitoria',
    pedra: 'derrota' ,
    tesoura: 'empate'
  },
  papel: {
    tesoura: 'derrota',
    pedra: 'vitoria' ,
    papel: 'empate'
  },
  pedra: {
    tesoura: 'vitoria',
    papel: 'derrota' ,
    pedra: 'empate'
  }
};

function sort() {
  const escolhas = ['pedra' , 'papel', 'tesoura'];
  var numero = Math.floor(Math.random() * 3);
  return escolhas[numero];
}

const pc = sort()
const pessoa = prompt("Escolha entre pedra, papel ou tesoura").toLocaleLowerCase();


alert(`O computador escolheu: ${pc}`)

const resultado =  conditionals[pessoa][pc]

if(resultado) {
  alert(resultado);
} 