const input = (await Bun.file("input.txt").text()).trim().split("\n");

let runningSum = 0;
for (const line of input) {
  let first: number | null = null;
  let last: number | null = null;
  for (const char of line) {
    const int = parseInt(char);
    if (!isNaN(int) && first === null) {
      first = int;
    } else if (!isNaN(int)) {
      last = int;
    }
  }

  if (first === null) {
    console.log(`ok now we're cooked`);
    break;
  }

  if (last === null) {
    last = first;
  }

  console.log(first * 10 + last);
  runningSum += first * 10 + last;
}

console.log(runningSum);
