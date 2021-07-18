class Pessoa {
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa {
    constructor(nome, idade, rg, cpf){
        super (nome, idade);
        this.rg = rg;
        this.cpf = cpf;
    }
}

const cidadao = new Cidadao("Pedro", 23, 00000000, 0123456000);

console.log(cidadao);
