function beautifulQuadruples(a, b, c, d) {
  [a, b, c, d] = [a, b, c, d].sort((a, b) => a - b);

  const quadruplesArray = Array(4200).fill(0);
  let count = 0,
    total = 0;

  // a^b == c^d then it's 0
  for (let i = 1; i <= c; i++)
    for (let j = i; j <= d; j++) {
      quadruplesArray[i ^ j] += 1;
      total++;
    }

  for (let i = 1; i <= b; i++) {
    for (let j = 1; j <= Math.min(a, i); j++) {
      count += total - quadruplesArray[i ^ j];
    }

    for (let k = i; k <= d; k++) {
      quadruplesArray[i ^ k] -= 1;
      total--;
    }
  }

  return count;
}

// console.log(beautifulQuadruples(1, 2, 3, 4));
console.log(beautifulQuadruples(3000, 3000, 3000, 3000));
