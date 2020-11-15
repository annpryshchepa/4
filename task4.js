function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    var removed = arr.shift();
    return removed; // Change this line
  }
  console.log(nextInLine(1,2,3,4,5, 9))