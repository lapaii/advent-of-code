export function check(line: Array<number>): boolean {
  const differences: Array<number> = [];
  for (let index = 0; index < line.length - 1; index++) {
    differences.push(line[index] - line[index + 1]);
  }

  const sortedDifferences = differences.toSorted((a, b) => a - b);
  if (!(sortedDifferences[0] > 0 === sortedDifferences[sortedDifferences.length - 1] > 0)) {
    return true;
  }

  // now check if the differences are within the correct range or not
  const absSortedDiff = sortedDifferences.map((value) => Math.abs(value)).sort((a, b) => a - b);
  if (absSortedDiff[0] < 1 || absSortedDiff[absSortedDiff.length - 1] > 3) {
    return true;
  }

  return false;
}
