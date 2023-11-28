const input =
  "41222600244102566074424681473310882255792931305537202808677137862125412633159102808720760401114861034438031043635996619399744100221146001622307859519260753990";

function mostCommon(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string[i] + string[i + 1]);
  }
  let obj = {};
  for (const pair of array) {
    if (obj[pair]) {
      obj[pair] += 1;
    } else {
      obj[pair] = 1;
    }
  }

  let maxCount = 0;
  for (const pair in obj) {
    if (obj[pair] > maxCount) {
      maxCount = obj[pair];
    }
  }
  const maxPairs = Object.keys(obj).filter((pair) => obj[pair] === maxCount);
  return `Poros: ${maxPairs} pasikartojimas: ${maxCount}`;
}
console.log(mostCommon(input));
