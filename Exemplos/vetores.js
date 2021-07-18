let vetor = [10,20,30,40,50];

vetor[2] = "Trinta";

console.log(vetor[2]);

let vetor2 =[];

for(let i = 0; i < 4; i++){
    vetor2[i] = "0" + i;
    console.log(vetor2[i]);
}

//ou...

let vetor3 = [];

for(let i = 0; i < 4; i++){
    vetor3.push("0" + i);
}
console.log(vetor3);

//ou...

let vetor4 = [10,20,30,40,50,60];

for(let numero of vetor4){
    console.log(numero);
}

//ou...

let vetor5 = [0,1,2,3,4,5];

for(let i = 0; i < vetor5.length; i++){
    console.log(vetor[i]);
}

//ou...

let vetor6 = [10,20,30,40,50,60];

for(let indice in vetor6){
    console.log(vetor6[indice]);
}