function prime(x) {
  let count = 0;

  for (let i = 0; i <= x; i++) {
    if (x % 2 == 0) {
      count++;
    }
  }
  if (count > 2) {
    return "number is not prime ";
  } else {
    return "number is prime ";
  }
}
