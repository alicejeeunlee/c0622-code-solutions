function getRangeReport(start, end) {
  var obj = {};
  var total = 0;
  var odds = [];
  var evens = [];
  var range = [];
  var average;
  for (var i = start; i < end + 1; i++) {
    range.push(i);
    total += i;
    if (i === 0 || i % 2 === 0) {
      evens.push(i);
    } else {
      odds.push(i);
    }
  }
  average = total / range.length;
  obj.total = total;
  obj.evens = evens;
  obj.odds = odds;
  obj.range = range;
  obj.average = average;
  return obj;
}

getRangeReport(1, 5);
