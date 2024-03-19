class Livro {
    constructor(pNome){
        this.nome = pNome;
    }
       get Nome() {return this.Nome;}
       set Nome(pNome) {this.nome = pNome;}
}

var obj_livro1 = new Livro(" use a cabeça Java");
console.log("Nome do livro:" + obj_livro1.nome);