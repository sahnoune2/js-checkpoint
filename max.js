function max(tab) {
  var max = tab[0];
  for (i = 1; i < tab.length; i++) {
    if (tab[i] > max) {
      max = tab[i];
    }
  }
  return max;
}
