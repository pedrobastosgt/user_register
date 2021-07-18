class Quadrado {
    constructor (base, altura){
        if(isNaN(base)||isNaN(altura)) throw "Informação não númerica!!";
            this.base = base;
            this.altura = altura;
            this.cor = undefined;
        }
}

const quadrado1 = new Quadrado (12, 8);
const quadrado2 = new Quadrado (12, 8);

console.log(quadrado1,quadrado2);
