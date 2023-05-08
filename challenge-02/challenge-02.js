// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum(num1, num2) {
  return num1 + num2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let result = sum(2, 3) + 5;

// Qual o valor atualizado dessa variável?
console.log(result); // 10

// Declare uma nova variável, sem valor.
let myVar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValue(value) {
  myVar = value;
  return `O valor da variável agora é ${myVar}`;
}

// Invoque a função criada acima.
addValue(5);

// Qual o retorno da função? (Use comentários de bloco).
5;

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function addThreeValues(n1, n2, n3) {
  if (arguments.length < 3) {
    return "Preencha todos o valores";
  }
  return n1 * n2 * n3 + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
addThreeValues(1, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
("Preencha todos os valores");

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
addThreeValues(1, 2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
8;

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function threeArgs(n1, n2, n3) {
  if (arguments.length < 1) return false;
  if (arguments.length <= 1) return n1;
  if (arguments.length === 2) return n1 + n2;
  if (arguments.length === 3) return n1 + n2 / n3;
  if (arguments === null || arguments === undefined) return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(threeArgs());
console.log(threeArgs(1));
console.log(threeArgs(1, 2));
console.log(threeArgs(1, 2, 3));
console.log(threeArgs(null));
