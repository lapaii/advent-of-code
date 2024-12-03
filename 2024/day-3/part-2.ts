const file = (await Bun.file("day-3.txt").text()).trim();

const matches = file.matchAll(/(mul\((\d+),(\d+)\))|(don't\(\))|(do\(\))/g);

const multiplications: Array<number> = [];
let shouldMult = true;
for (const match of matches) {
  if (match[0] === "don't()") {
    shouldMult = false;
    continue;
  } else if (match[0] === "do()") {
    shouldMult = true;
    continue;
  }

  if (shouldMult) {
    multiplications.push(Number(match[2]) * Number(match[3]));
  }
}

console.log(multiplications.reduce((a, b) => a + b));
