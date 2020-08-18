// factory simples

function criaPessoa() {
  return {
    nome: 'Matheus',
    sobrenome: 'Cunha'
  }
}

console.log(criaPessoa());

function produto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(produto('Corta vento Primitive', 300));