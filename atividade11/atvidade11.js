var funcionario1 = new Object();
funcionario1.matricula = "1234";
funcionario1.nome = "jojo";
funcionario1.funcao = "Programador"


class Funcionario {
    constructor(x,y,z) {
        this.matricula = x;
        this.nome = y;
        this.funcao = z;
    }
    getMatricula() {
        return this.matricula;
    }
    getNome() {
        return this.nome;
    }
    getFuncao() {
        return this.funcao;
    }
}

var funcionario2 = new Funcionario("1234","Carina","FrontEnd");



var funcionario3 = {
    matricula:"123455",
    nome:"Vitor",
    funcao:"Full Stack"
};


alert(`Matricula:${funcionario1.matricula} \nNome:${funcionario1.nome} \nFunção:${funcionario1.funcao}`);

alert(`Matricula:${funcionario2.getMatricula()} \nNome:${funcionario2.getNome()} \nFunção:${funcionario2.getFuncao()}`);

alert(`Matricula:${funcionario3.matricula} \nNome:${funcionario3.nome} \nFunção:${funcionario3.funcao}`);