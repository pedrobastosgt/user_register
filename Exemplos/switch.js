let semaforo = "vede";

switch(semaforo){
    case "verde" :
        console.log("Pode Seguir");
        break;
    
    case "amarelo" :
        console.log("Fechando! reduza a velocidade");
        break;
    
    case "vermelho" :
        console.log("Fechado, Aguarde!");
        break;
    
    default:
        console.log("Valor inválido");
        break;
}
