class Operações {
    constructor(){

    }

    Somar(valorA, valorB){
        console.log("Resultado: "(valorA + valorB));
    }
    Somar(valorA, valorB, valorC){
        console.log("Resultado: "(valorA + valorB + valorC));
    }
}

var objerto = new Operações();
objerto.Somar(10,20,10);