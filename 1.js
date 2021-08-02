let x = prompt ('Введите число: ')
x = +x
if (typeof x === 'number' && x % 2 === 0){
  console.log('Вы ввели чётное число')
}
else if (typeof x === 'number' && x % 2 === 1){
  console.log('Вы ввели нечётное число')
}
else if (typeof x === 'number' && x !== x) {
  console.log('Упс, кажется, вы ошиблись')
}
else {
  console.log('Упс, кажется, вы ошиблись')
}
