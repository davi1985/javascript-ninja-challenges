/*
Envolva todo o código desse desafio em uma IIFE.
*/
(() => {
  /*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
  const myArray = [2, 3, "a"];

  console.log("O array em formato de string é:");
  console.log(myArray.toString());

  /*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
  const south = ["Paraná", "Santa Catarina", "Rio Grande do Sul"];
  const southeast = [
    "Espírito Santo",
    "Minas Gerais",
    "São Paulo",
    "Rio de Janeiro",
  ];

  /*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
  console.log("\nAlguns Estados do Brasil:");
  let brazil = south.concat(southeast);
  console.log(brazil);
  /*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
  console.log("\nMais estados adicionados:");
  brazil.unshift("Acre", "Amapá", "Amazonas");

  console.log(brazil);

  /*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/
  console.log("\nEstado removido:");
  console.log(brazil.shift());

  /*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
  const newSouth = brazil.slice(2, 5);
  /*
Mostre no console os estados que estão em `newSul`.
*/
  console.log("\nEstados do Sul do Brasil:");
  console.log(newSouth);

  /*
Mostre no console todos os estados que estão em `brasil`.
*/
  console.log("\nAlguns Estados do Brasil:");
  for (const state of brazil) {
    console.log(state);
  }

  /*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
  const northeast = [
    "Alagoas",
    "Bahia",
    "Ceará",
    "Maranhão",
    "Paraíba",
    "Pernambuco",
    "Piauí",
    "Rio Grande do Norte",
    "Sergipe",
  ];

  /*
Mostre no console os estados do nordeste.
*/
  console.log("\nEstados do Nordeste:");
  for (const state of northeast) {
    console.log(state);
  }

  /*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
  const newSoutheast = brazil.slice(2, 6);

  /*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
  brazil = brazil.concat(northeast);
  /*
Mostre no console os estados em `newSudeste`.
*/
  console.log("\nEstados em newSudeste:");
  for (const state of newSouth) {
    console.log(state);
  }

  /*
Mostre no console os estados do `brasil`.
*/
  console.log("\nAlguns estados do Brasil:");
  for (const state of brazil) {
    console.log(state);
  }

  /*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
  const newBrazil = [];

  brazil.forEach((element, index) => {
    newBrazil.push({
      id: index,
      state: element,
    });
  });

  /*
Mostre o array `newBrasil` no console
*/
  console.log("\nnewBrasil:");
  for (const state of newBrazil) {
    console.log(state);
  }

  /*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
  console.log("\nTodos os estados de `brasil` tem mais de 7 letras?");

  const every = brazil.every((item) => item.length > 7);

  console.log(
    every
      ? "Sim, todos os estados tem mais de 7 letras!"
      : "Nem todos os estados tem mais de 7 letras!"
  );
  /*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
  console.log("\nCeará está incluído em `brasil`?");
  const some = brazil.some((item) => item === "Ceará");

  console.log(some ? "Ceará está incluído!" : "Ceará não foi incluído :(");

  /*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
  const brazilData = brazil.map((state, index) => ({
    id: index + 1,
    state: `${state} pertence ao Brasil`,
  }));

  /*
Mostre no console o array criado acima:
*/
  console.log("\nnewBrasil agora com mais informações:");
  console.log(brazilData);

  /*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
  const isEven = (number) => number % 2 === 0;
  const filter = brazilData.filter((state) => isEven(state.id));

  /*
Mostre o array filtrado acima no console.
*/
  console.log("\nEstados com ID par:");
  console.log(filter);
})();
