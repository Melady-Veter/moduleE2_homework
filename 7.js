let tall = [5, 10, 15, 0, 20, 25, 30, 35, 40, 45, 50, 62, 'ljfioefjron', 0];

if (tall.includes (0)) {
  indices = [];
  element = 0;
  idx = tall.indexOf(element);
  while (idx != -1) {
  indices.push(idx+1);
  idx = tall.indexOf(element, idx + 1);
}
console.log("В массиве есть нулевые элементы на следующих позициях: " + indices);
}

tall = tall.filter(value => { return value !== 0});
tall = tall.filter(function(value) { return typeof(value) === 'number'})

function list(tall) {
  sumOdd = 0;
  sumPar = 0;

  for (i = 0; i < tall.length; i++) {
    if (tall[i] % 2 === 0) {
      sumPar++;
    } else {
      sumOdd++;
    }
  }
  
  console.log("Нечётных чисел в массиве: " + sumOdd);
  console.log("Чётных чисел в массиве: " + sumPar);
  console.log(tall)
}
list(tall);
