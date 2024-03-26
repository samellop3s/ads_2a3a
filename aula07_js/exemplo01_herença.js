class conta{
    constructor(){
        this.Saldo=0
    }

    get Saldo(){return this.saldp;}
    set Saldo(pSaldo){this.saldo = pSaldo}
}

var obj_conta = new Conta();
console.log(obj_conta.conta); 