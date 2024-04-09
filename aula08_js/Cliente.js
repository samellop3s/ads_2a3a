class Pessoa {
    _nome;
    _endereco;

    constructor(nome, endereco) {
        this._nome = nome;
        this._endereco = endereco;
    }

    setNome(nome) {
        this._nome = nome;
    }

    getNome() {
        return this._nome;
    }

    setEndereco(endereco) {
        this._endereco = endereco;
    }

    getEndereco() {
        return this._endereco;
    }
}

class Juridica extends Pessoa {
    _cnpj;
    _razaoSocial;

    constructor(nome, endereco, cnpj, razaoSocial) {
        super(nome, endereco);
        this._cnpj = cnpj;
        this._razaoSocial = razaoSocial;
    }

    setCnpj(cnpj) {
        this._cnpj = cnpj;
    }

    getCnpj() {
        return this._cnpj;
    }

    setRazaoSocial(razaoSocial) {
        this._razaoSocial = razaoSocial;
    }

    getRazaoSocial() {
        return this._razaoSocial;
    }
}

class Fisica extends Pessoa {
    _cpf;
    _dtNascimento;

    constructor(nome, endereco, cpf, dtNascimento) {
        super(nome, endereco);
        this._cpf = cpf;
        this._dtNascimento = dtNascimento;
    }

    setCpf(cpf) {
        this._cpf = cpf;
    }

    getCpf() {
        return this._cpf;
    }

    setDtNascimento(dtNascimento) {
        this._dtNascimento = dtNascimento;
    }

    getDtNascimento() {
        return this._dtNascimento;
    }
}

let pessoaJuridica = new Juridica("Empresa AION", "Rua VAG, 123", "12.345.678/0001-99", "AION Ltda");
let pessoaFisica = new Fisica("Marcos Eric", "Rua ANDRE, 888", "123.456.789-00", "02/07/2004");

console.log(pessoaJuridica);
console.log(pessoaFisica);
