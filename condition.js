function keep(array, condition) {
  var tab = [];
  for (i = 0; i < array.length; i++) {
    if (condition(array[i])) {
      tab.push(array[i]);
    }
  }
  return tab;
}

function evens(array) {
  return keep(array, function (x) {
    return x % 2 == 0;
  });
}
