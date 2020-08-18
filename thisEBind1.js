const pessoa = {
    saudacao: 'Boma dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OD

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa();