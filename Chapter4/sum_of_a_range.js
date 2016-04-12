function range(start, end, step=1) {
  rangeArray = []
  for (i = start; i <= end; i += step) {
    rangeArray.push(i);
  }
  return rangeArray;
}

function sum(numbers) {
  var total = numbers.reduce(function(a, b) {
    return a + b;
  });
  console.log(total);
}

sum(range(1, 10));
sum(range(1, 10, 2));
