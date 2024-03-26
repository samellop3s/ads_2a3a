class conta{
    constructor(){
        this.Saldo=0
    }

    get Saldo(){return this.saldp;}
    set Saldo(pSaldo){this.saldo = pSaldo}

    imprimir(){
        return "Saldo: " + this.saldo;
    }
}

class Corrente extends Conta {
    constructor(pLimite){
        super();
        this.Limite = pLimite
    }

    get Limite(){return this.Limite;}
    set Limite(pLimite){this.limite = pLimite;}
}

var obj_conta = new Conta(1000);
obj_conta.saldo = 700;
console.log(obj_conta.imprimir());