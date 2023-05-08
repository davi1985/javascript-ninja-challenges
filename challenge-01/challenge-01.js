// Declarar uma variável chamada `myvar`, sem valor.
let myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
let sum = 15 + 8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
sum += 1;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
sum *= 3;

// Qual é o valor da variável `soma` até aqui?
72;

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
let iAmNinja = true;

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
let food = ["arroz", "feijão", "ovo"];

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(food[1]);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
console.log(sum === myvar); // false

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
console.log(myvar <= sum); // true

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
const division = (num1, num2) => num1 + num2;

// Invoque a função criada acima, passando os parâmetros 10 e 2.
console.log(division(10, 2)); // 12
