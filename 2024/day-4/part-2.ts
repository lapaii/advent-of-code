const input = (await Bun.file("test.txt").text()).trim().split("\n");
const lineCount = input.length;
const lineLength = input[0].length;

let runningSum = 0;
for (let lineIdx = 0; lineIdx < lineCount - 2; lineIdx++) {
  const line = input[lineIdx];

  for (let charIdx = 0; charIdx < lineLength - 2; charIdx++) {
    const char = line[charIdx];

    let test: string[] = [];
    test.push(
      char,
      line[charIdx + 2],
      input[lineIdx + 1][charIdx + 1],
      input[lineIdx + 2][charIdx],
      input[lineIdx + 2][charIdx + 2],
    );
    if (
      test.join("") === "MSAMS" ||
      test.join("") === "MMASS" ||
      test.toReversed().join("") === "MSAMS" ||
      test.toReversed().join("") === "MMASS"
    ) {
      runningSum++;
    }
  }
}

console.log(runningSum);
