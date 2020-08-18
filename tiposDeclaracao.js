// function declaration
/*Posso chamar a função antes dela ser declarada*/
console.log(soma(3, 4));
function soma(x, y) {
  return x + y;
}


// declarar uma função anônima e atribuir ela para uma variavel - expression
/* só posso chamar a função depois dela ser declarada*/
const sub = function (x, y) {
  return x - y
}
console.log(sub(4, 3));


// misturar as duas ideias de functions - named function expression
/*só posso chamar a função depois de ser declarada. */
const mult = function mult(x, y) {
  return x * y;
}
console.log(mult(4, 5));