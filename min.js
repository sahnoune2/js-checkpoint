function min(tab) {
  var min = tab[0];
  for (i = 1; i < tab.length; i++) {
    if (tab[i] < min) {
      min = tab[i];
    }
  }
  return min;
}
