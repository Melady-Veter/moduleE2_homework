let me = new Map([
  ["name", "Mary"],
  ["age", 35],
  ["married", true]
]);

for (let elem of me)

   console.log(elem);

for (let position of me) {
  console.log(`���� - ${position[0]}, �������� - ${position[1]}`);
}