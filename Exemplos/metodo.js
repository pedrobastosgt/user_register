class Quadrado {
    constructor (base, altura){
        if(isNaN(base)||isNaN(altura)) throw "Informação não númerica!!";
            this.base = base;
            this.altura = altura;
            this.cor = undefined;
        }
        area (){
            return this.base*this.altura;
        }
        duplicaBase(){
            this.base = 2* this.base;
        }
}

const quadrado1 = new Quadrado (11, 12);

quadrado1.duplicaBase();

console.log(quadrado1.area())
