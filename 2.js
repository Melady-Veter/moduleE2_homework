let x = 'Java Script'
if (typeof x === 'number'){
  console.log('X - �����')
}
else if (typeof x === 'string'){
  console.log('X - ������')
}
else if (typeof x === 'boolean') {
  console.log('X - ���������� ����������')
}
else {
  console.log('��� � �� ��������')
}

// � �������� x �������: 'Java Script' (X - ������)
// true (X - ���������� ����������)
// 23658 (X - �����)
// Symbol() (��� � �� ��������)
// {} (��� � �� ��������)
// null (��� � �� ��������)
// function(){} (��� � �� ��������)