const input = await Bun.file("day-2.txt").text();
const reports = input.split("\n");

let safeCount = 0;
for (const report of reports) {
  const levels: Array<number> = report.split(" ").map(Number);

  // check if all increasing or decreasing
  const differences: Array<number> = [];
  for (let index = 0; index < levels.length - 1; index++) {
    differences.push(levels[index] - levels[index + 1]);
  }

  const sortedDifferences = differences.toSorted((a, b) => a - b);
  if (!(sortedDifferences[0] > 0 === sortedDifferences[sortedDifferences.length - 1] > 0)) {
    continue;
  }

  // now check if the differences are within the correct range or not
  const absSortedDiff = sortedDifferences.map((value) => Math.abs(value)).sort((a, b) => a - b);
  if (absSortedDiff[0] < 1 || absSortedDiff[absSortedDiff.length - 1] > 3) {
    continue;
  }

  safeCount += 1;
}

console.log(`safe count: ${safeCount}`);
