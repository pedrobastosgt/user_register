class Pessoa {
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa ("Pedro", 23);
pessoa1.idade = 24;

const pessoa2 = new Pessoa ("Cintia", 20);

console.log(pessoa1, pessoa2);