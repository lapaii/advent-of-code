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

let runningSum = 0;

// listA and listB are always the same so using listA.length doesn't matter
for (let index = 0; index < listA.length; index++) {
  let difference = listA[index] - listB[index];

  if (difference < 0) {
    difference = difference * -1;
  }

  runningSum += difference;
}

console.log(runningSum);
