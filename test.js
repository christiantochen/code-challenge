const converter = (input, base, result = []) => {
  if (input <= 0) {
    console.log(result.reverse().join(""));
    return result.reverse().join("");
  }

  //   result.push(Math.floor(input % base));
  result.push((input % base).toString().split(".")[0]);

  //   input = Math.floor(input / base);
  input = (input / base).toString().split(".")[0];
  converter(input, base, result);
};

// HEXADECIMAL: BASE = 16
// OCTAL: BASE = 8
// BINER: BASE = 2

const input = 100;

console.log(`Input: ${input}`);

const test = converter(100, 16);
console.log(`HEXADECIMAL ${test}`);

console.log("OCTAL");
converter(100, 8);

console.log("BINER");
converter(100, 2);
