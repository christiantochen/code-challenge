const posiblity = require("./posibility.json");

function minimumCost(s) {
  let minCost = Number.MAX_SAFE_INTEGER;

  posiblity.forEach((p) => {
    let posibilityCost = 0;

    // compare all the possibilities with input
    for (let i = 0; i < p.length; i++)
      for (let j = 0; j < p[i].length; j++)
        posibilityCost += Math.abs(s[i][j] - p[i][j]);

    // we only want the mininum cost
    if (posibilityCost < minCost) minCost = posibilityCost;
  });

  return minCost;
}

const sampleTestCase1 = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
];

console.log(sampleTestCase1, minimumCost(sampleTestCase1));

const sampleTestCase2 = [
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6],
];

console.log(sampleTestCase2, minimumCost(sampleTestCase2));
