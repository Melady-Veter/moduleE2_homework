let arr = [5, 5, 5, 5, 5];

function sameElements(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[0]) return !1;
  }
  return !0;
}

console.log(sameElements(arr));