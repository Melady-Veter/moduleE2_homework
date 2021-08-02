let x = 'Java Script'
if (typeof x === 'number'){
  console.log('X - число')
}
else if (typeof x === 'string'){
  console.log('X - строка')
}
else if (typeof x === 'boolean') {
  console.log('X - логическая переменная')
}
else {
  console.log('Тип Х не определён')
}

// В качестве x вводила: 'Java Script' (X - строка)
// true (X - логическая переменная)
// 23658 (X - число)
// Symbol() (Тип Х не определён)
// {} (Тип Х не определён)
// null (Тип Х не определён)
// function(){} (Тип Х не определён)