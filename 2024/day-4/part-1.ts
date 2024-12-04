const input = (await Bun.file("test.txt").text()).trim().split("\n");
const lineCount = input.length;
const lineLength = input[0].length;

const XMAS = "XMAS";
let runningSum = 0;

for (let lineIdx = 0; lineIdx < lineCount; lineIdx++) {
  const line = input[lineIdx];

  for (let charIdx = 0; charIdx < lineLength; charIdx++) {
    const char = line[charIdx];

    // vertical (up/down)
    if (lineIdx + 3 < lineCount) {
      const test = [
        char,
        input[lineIdx + 1][charIdx],
        input[lineIdx + 2][charIdx],
        input[lineIdx + 3][charIdx],
      ].join("");
      if (test === XMAS || test.split("").reverse().join("") === XMAS) {
        runningSum++;
      }
    }

    // horizontal (left/right)
    if (charIdx + 3 < lineLength) {
      const test = [
        char,
        line[charIdx + 1],
        line[charIdx + 2],
        line[charIdx + 3],
      ].join("");
      if (test === XMAS || test.split("").reverse().join("") === XMAS) {
        runningSum++;
      }
    }

    // Diagonal down-right
    if (lineIdx + 3 < lineCount && charIdx + 3 < lineLength) {
      const test = [
        char,
        input[lineIdx + 1][charIdx + 1],
        input[lineIdx + 2][charIdx + 2],
        input[lineIdx + 3][charIdx + 3],
      ].join("");
      if (test === XMAS || test.split("").reverse().join("") === XMAS) {
        runningSum++;
      }
    }

    // Diagonal up-right
    if (lineIdx - 3 >= 0 && charIdx + 3 < lineLength) {
      const test = [
        char,
        input[lineIdx - 1][charIdx + 1],
        input[lineIdx - 2][charIdx + 2],
        input[lineIdx - 3][charIdx + 3],
      ].join("");
      if (test === XMAS || test.split("").reverse().join("") === XMAS) {
        runningSum++;
      }
    }
  }
}

console.log(runningSum);
