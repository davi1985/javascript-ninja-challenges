/*
Crie um array com 5 items (tipos variados).
*/
const myArray = [1, "dois", [], {}, function () {}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
const addItem = (newItem) => {
  myArray.push(newItem);

  return myArray;
};

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
const newArray = ["letters", false, () => []];
myArray.push(newArray);

console.log(myArray);
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(
  `O segundo elemente do segundo array é ${myArray[myArray.length - 1][1]}`
);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${myArray.length} itens.`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${myArray[myArray.length - 1].length} itens.`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log("Números pares entre 10 e 20:");
let count = 10;

const isEven = (number) => number % 2 === 0;

while (count <= 20) {
  if (isEven(count)) {
    console.log(count);
  }

  count++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log("Números ímpares entre 10 e 20:");
count = 10;

const isOdd = (number) => number % 2 !== 0;

while (count <= 20) {
  if (isOdd(count)) {
    console.log(count);
  }

  count++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log("Números pares entre 100 e 120:");
for (let i = 100; i <= 120; i++) {
  if (isEven(i)) {
    console.log(i);
  }
}

console.log("Números ímpares entre 111 e 125:");
for (let i = 111; i <= 125; i++) {
  if (isOdd(i)) {
    console.log(i);
  }
}
