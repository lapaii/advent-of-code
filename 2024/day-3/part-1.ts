const file = (await Bun.file("day-3.txt").text()).trim();

const matches = file.matchAll(/(mul\((\d+),(\d+)\))/g);

const multiplications: Array<number> = [];
for (const match of matches) {
  multiplications.push(Number(match[2]) * Number(match[3]));
}

console.log(multiplications.reduce((a, b) => a + b));
