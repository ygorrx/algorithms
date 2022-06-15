function sumOfParts(str) {
  return str.split('').reduce((a, b) => a + +b, 0);
}

function orderWeight(string) {
  return string
    .split(' ')
    .sort((a, b) => sumOfParts(a) - sumOfParts(b) || a > b || -(a < b))
    .join(' ');
}

console.log(orderWeight('103 123 4444 99 2000'));
