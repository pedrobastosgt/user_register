function escreva(){
    console.log("Olá");
}

escreva();

//ou.. 


let texto = "olá";


function escrevaisso(texto){
    console.log(texto);
}

escrevaisso("Olá");
escrevaisso("Cara de bunda");


//ou...


function somar(a, b){
    return a+b;
}
//const somar = function(a,b){return a+b};

console.log(somar(5,6));

//arrow function

const multiplicar = (a, b) => a*b;

console.log(multiplicar(5, 8));
