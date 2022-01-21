const EMPTY_STRING = "Empty String";

function superReducedString(s) {
  // use hash map to sum the number of the letter appearing in the sentence
  const map = s
    .split("")
    .reduce(
      (hashMap, char) => hashMap.set(char, (hashMap.get(char) || 0) + 1),
      new Map()
    );

  let changes = 0;
  // loop while there's changes
  // changes mean there's still replacing operation going on
  // we're going to loop until there's nothing to replace
  while (changes >= 0) {
    changes = 0;
    // destructuring has map entries to array and loop every letter
    [...map.entries()].forEach(([letter, numberOfAppearance]) => {
      // we're going to delete all pair of adjacent letters that match
      // loop according to how much of that letter appear in the sentence
      while (numberOfAppearance >= 2) {
        // "remove" pair of letter from the sentence
        s = s.replace(`${letter}${letter}`, () => {
          // add counter to changes if replacement happen
          changes++;
          return "";
        });
        numberOfAppearance -= 2;
      }
    });
    // stop the looping if there's no more changes
    if (changes === 0) changes = -1;
  }

  return s.length == 0 ? EMPTY_STRING : s;
}

// TESTCASE
console.log("Sample Test Case 1", superReducedString("aaabccddd"));
console.log("Sample Test Case 2", superReducedString("aa"));
console.log("Sample Test Case 3", superReducedString("baab"));
