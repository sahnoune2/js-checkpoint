function reverse(str) {
  var tab = [];
  for (i = str.length - 1; i >= 0; i--) {
    tab.push(str[i]);
  }
  return tab;
}
