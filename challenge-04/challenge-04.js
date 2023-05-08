/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
let isTruthy = (arg) => (arg ? true : false);

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(0));
console.log(isTruthy(-0));
console.log(isTruthy(""));
console.log(isTruthy(undefined));
console.log(isTruthy(NaN));
console.log(isTruthy(null));
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(1));
console.log(isTruthy(() => {}));
console.log(isTruthy({}));
console.log(isTruthy([]));
console.log(isTruthy("some text"));
console.log(isTruthy({ key: "value" }));
console.log(isTruthy([[], {}]));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
let car = {
  brand: "Chevrolet",
  model: "Agile",
  licensePlate: "JSX 123",
  year: 2011,
  color: "gray",
  doorsQuantity: 4,
  seats: 5,
  personsInCar: 0,
};
/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
car.setColor = (newColor) => {
  car.color = newColor;
};
/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
car.getColor = () => car.color;

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
car.getModel = () => car.model;
/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
car.getBrand = () => car.brand;
/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
car.getBrandAndModel = () => `Esse carro é um ${car.brand} ${car.model}`;

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
car.addPersonInCar = (quantity) => {
  if (!quantity) return null;

  let allPersons = car.personsInCar + quantity;
  let howManyPersonIsPossible = car.seats - car.personsInCar;
  let pluralOuSingular = howManyPersonIsPossible === 1 ? "pessoa" : "pessoas";

  if (car.personsInCar === car.seats && allPersons >= car.seats) {
    return "O carro já está lotado";
  }

  if (allPersons > car.seats) {
    return `Só cabem mais ${howManyPersonIsPossible} ${pluralOuSingular} !`;
  }

  car.personsInCar += quantity;

  return `Já temos ${car.personsInCar} pessoas no carros`;
};
/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.
*/
// Qual a cor atual do carro?
console.log(car.getColor());

// Mude a cor do carro para vermelho.
car.setColor("red");

// E agora, qual a cor do carro?
console.log(car.getColor());

// Mude a cor do carro para verde musgo.
car.setColor("green");

// E agora, qual a cor do carro?
console.log(car.getColor());

// Qual a marca e modelo do carro?
console.log(car.getBrandAndModel());

// Adicione 2 pessoas no carro.
console.log(car.addPersonInCar(2));

// Adicione mais 4 pessoas no carro.
console.log(car.addPersonInCar(4));

// Faça o carro encher.
console.log(car.addPersonInCar(3));

// Tire 4 pessoas do carro.
console.log(car.addPersonInCar(-4));

// Adicione 10 pessoas no carro.
console.log(car.addPersonInCar(10));

// Quantas pessoas temos no carro?
console.log(car.personsInCar);
