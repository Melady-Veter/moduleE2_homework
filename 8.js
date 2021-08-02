let me = new Map([
  ["name", "Mary"],
  ["age", 35],
  ["married", true]
]);

for (let elem of me)

   console.log(elem);

for (let position of me) {
  console.log(`Ключ - ${position[0]}, значение - ${position[1]}`);
}
