/*
Crie uma IIFE que envolva todo o código desse arquivo. Faça também a
indentação correta do código, para ficar dentro da IIFE.
*/

/*
Analise as funções abaixo (`myFunction`, `myFunction2` e `myFunction3`, e
ajuste o posicionamento das variáveis e funções internas, para que os códigos
dentro de `console.log` que estão retornando `undefined` retornem o valor
correto da variável ou função chamada.
*/
(() => {
  const myFunction = () => {
    const number1 = 10;
    const number2 = 20;

    console.log("Na função `myFunction`, o primeiro número é", number1);

    console.log("Na função `myFunction`, o segundo número é", number2);

    return number1 + number2;
  };

  myFunction();

  const myFunction2 = () => {
    const number1 = 10;
    const number2 = 20;

    const sum = () => number1 + number2;

    console.log("A soma de 10 e 20 é igual a", sum ? sum() : undefined);

    return sum();
  };

  myFunction2();

  const myFunction3 = () => {
    const number1 = 40;
    const number2 = 50;

    const sum = () => number1 + number2;

    console.log("Na função myFunction3, number1 é igual a", number1);
    console.log("A soma de 40 e 50 é igual a", sum());

    return sum();
  };
  myFunction3();

  /*
No desafio anterior criamos uma calculadora, usando uma estrutura funcional.
Agora vamos criar uma outra calculadora, usando uma outra abordagem :D
- Crie uma função `calculator` que recebe dois valores (números)
por parâmetro.
- Essa função deve retornar uma outra função, que recebe um parâmetro
chamado `callback`.
- Esse `callback` será uma função, que passaremos por parâmetro ao invocar
o retorno de `calculator`.
- O retorno dessa segunda função deve ser a função de `callback` passada
por parâmetro, INVOCADA, e passando a ela por parâmetro os dois valores
que foram passadas para a primeira função `calculator`.
*/
  const calculator = (num1, num2) => (callback) => callback(num1, num2);

  /*
Declare uma variável chamada `sum`, e atribua a ela a função `calculator`,
passando dois números por parâmetro.
*/
  const sum = calculator(5, 3);

  /*
Sabemos que `sum` agora tem uma função atribuída a ela, que é o retorno de
`calculator`. E essa função espera um parâmetro `callback`. O `callback`
tem dois parãmetros disponíveis, que são os números que você acabou de passar
para a chamada à `calculator` acima.
- Mostre no console o retorno da invocação de `sum`, passando por parâmetro
uma função anônima que irá retornar a soma dos dois números que essa função
anônima tem como seus argumentos.
*/
  console.log("O resultado da soma é:");
  console.log(sum((num1, num2) => num1 + num2));

  /*
Agora declare outra variáveis chamadas `subtraction`, `multiplication`,
`division` e `mod`, e atribua à elas `calculator`, passando números
diferentes para cada chamada.
*/
  const multiplication = calculator(5, 3);
  const subtraction = calculator(5, 3);
  const division = calculator(5, 3);
  const mod = calculator(5, 3);

  /*
Mostre as variáveis acima no `console` (uma chamada de console por variável),
criando a função de `callback` que faz o cálculo para subração, multiplicação,
divisão e módulo (resto de divisão), conforme a função utilizada.
As suas respostas devem estar abaixo dos `console.log` referentes à cada
chamada.
*/
  console.log("O resultado da subtração é:");
  console.log(subtraction((num1, num2) => num1 - num2));

  console.log("O resultado da multiplicação é:");
  console.log(multiplication((num1, num2) => num1 * num2));

  console.log("O resultado da divisão é:");
  console.log(division((num1, num2) => num1 / num2));

  console.log("O resto da modulo é:");
  console.log(mod((num1, num2) => num1 % num2));
})();
