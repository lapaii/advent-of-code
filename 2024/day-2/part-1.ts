import { check } from "./shared";

const input = (await Bun.file("day-2.txt").text()).trim();
const reports = input.split("\n");

let answerp1 = 0;
let answerp2 = 0;

for (const report of reports) {
  const levels: Array<number> = report.split(" ").map(Number);

  let failure;
  failure = check(levels);
  if (!failure) {
    answerp1 += 1;
    answerp2 += 1;
    continue;
  }

  failure = false;
  for (let index = 0; index < levels.length; index++) {
    const partial = levels.toSpliced(index, 1);
    failure = check(partial);
    if (!failure) break;
  }

  if (!failure) answerp2 += 1;
}

console.log(`answer part 1: ${answerp1}`);
console.log(`answer part 2: ${answerp2}`);
