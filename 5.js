let nums = [10, 20, 30, 45, 100, 84];
console.log('Кол-во элементов: ' + nums.length + ':');
result = nums.map(function (num, index, arr) {
  return console.log(num + " ");
})
