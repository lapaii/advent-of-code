const wholeInput = await Bun.file("day-1.txt").text();
const lines = wholeInput.split("\n");

const listA: Array<number> = [];
const listB: Array<number> = [];

for (const line of lines) {
  const split = line.split("   ");

  listA.push(Number(split[0]));
  listB.push(Number(split[1]));
}

listA.sort((a, b) => a - b);
listB.sort((a, b) => a - b);

let similarityScore = 0;

for (const number of listA) {
  let amount = 0;
  for (const compare of listB) {
    if (compare === number) amount++;
  }
  similarityScore += number * amount;
}

console.log(similarityScore);
