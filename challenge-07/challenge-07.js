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
var numbers = 10;

while (numbers <= 20) {
  if (numbers % 2 === 0) {
    console.log(numbers);
  }

  numbers++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log("Números ímpares entre 10 e 20:");
var numbers = 10;

while (numbers <= 20) {
  if (numbers % 2 !== 0) {
    console.log(numbers);
  }

  numbers++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log("Números pares entre 100 e 120:");
for (let i = 100; i <= 120; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("Números ímpares entre 111 e 125:");
for (let i = 111; i <= 125; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
