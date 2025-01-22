function generateFibonacci(n) {
  if (n < 0) {
    return [];
  }
  if (n == 0) {
    return [0];
  }

  const tab = [0, 1];

  for (let i = 2; i < n; i++) {
    tab[i] = tab[i - 1] + tab[i - 2];
  }

  return tab;
}
