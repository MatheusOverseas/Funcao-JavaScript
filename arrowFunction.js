let dobro = function (a) {
  return a * 2;
};

dobro = (a) => {
  return a * 2;
};

dobro = (a) => 2 * a; // return está implicito
console.log(dobro(Math.PI));

let ola = function () {
  return "Olá";
};

ola = () => "Olá";
console.log(ola());
