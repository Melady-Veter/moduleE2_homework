let x = prompt ('������� �����: ')
x = +x
if (typeof x === 'number' && x % 2 === 0){
  console.log('�� ����� ������ �����')
}
else if (typeof x === 'number' && x % 2 === 1){
  console.log('�� ����� �������� �����')
}
else if (typeof x === 'number' && x !== x) {
  console.log('���, �������, �� ��������')
}
else {
  console.log('���, �������, �� ��������')
}