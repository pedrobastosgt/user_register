const pessoa = {
    nome : "Pedro",
    idade : 23
};

console.log(pessoa.nome+pessoa.idade);

const quadrado = {
    base : 20,
    altura : 20,
    area : function(){return this.base*this.altura}
};

console.log(quadrado.area());