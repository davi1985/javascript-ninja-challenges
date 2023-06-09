/*
Envolva todo o código desse desafio em uma IIFE.
Crie um arquivo chamado index.html e adicione esse script ao HTML.
*/
(() => {
  /*
Crie uma função construtora chamada "Person". Esse construtor deve ter
as seguintes características:
- Deve receber 3 parâmetros: `name`, `lastName` e `age`;
- Deverá ter 3 propriedades:
  - `name` - que receberá o valor do parâmetro `name`;
  - `lastName` - que receberá o valor do parâmetro `lastName`;
  - `age` - que receberá o valor do parâmetro `age`;
- Deverá ter 3 métodos:
  - `getFullName` - que deve retornar o nome completo do objeto criado,
  no formato:
    - "[NAME] [LASTNAME]"
  - `getAge` - que deverá retornar a idade (age);
  - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
  iremos passar um único argumento, que é a quantidade de anos que devem ser
  adicionados à idade original (age). Esse método deverá retornar o objeto
  que será instanciado.
*/
  function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = () => `${this.name} ${this.lastName}`;
    this.getAge = () => this.age;
    this.addAge = (newAge) => {
      this.age += newAge;
    };
  }

  /*
Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
parâmetros corretamente para o construtor para criar as novas pessoas.
Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
*/
  console.log("Novas pessoas criadas à partir de Person:");
  const personOne = new Person("steve", "vai", 54);
  const personTwo = new Person("joe", "satriani", 56);
  const personThree = new Person("jimmy", "hendrix", 35);

  console.log({ personOne, personTwo, personThree });

  /*
Mostre no console o nome completo de cada pessoa.
*/
  console.log("\nNomes das pessoas:");
  console.log(personOne.getFullName());
  console.log(personTwo.getFullName());
  console.log(personThree.getFullName());

  /*
Mostre no console as idades de cada pessoa, com a frase:
- "[NOME COMPLETO] tem [IDADE] anos."
*/
  console.log("\nIdade das pessoas:");
  console.log(`${personOne.getFullName()} tem ${personOne.getAge()} anos`);
  console.log(`${personTwo.getFullName()} tem ${personTwo.getAge()} anos`);
  console.log(`${personThree.getFullName()} tem ${personThree.getAge()} anos`);

  /*
Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
cada um. A frase deverá ser no formato:
- "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
*/
  console.log("\nNova idade das pessoas:");
  personOne.addAge(2);
  personTwo.addAge(3);
  personThree.addAge(4);

  console.log(
    `${personOne.getFullName()} agora tem ${personOne.getAge()} anos`
  );
  console.log(
    `${personTwo.getFullName()} agora tem ${personTwo.getAge()} anos`
  );
  console.log(
    `${personThree.getFullName()} agora tem ${personThree.getAge()} anos`
  );
})();
