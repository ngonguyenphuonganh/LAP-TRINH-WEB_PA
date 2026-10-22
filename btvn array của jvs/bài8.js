function countGreaterThan(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      count++;
    }
  }
  return count;
}
console.log(countGreaterThan([1, 5, 7, 2, 3], 3));
console.log(countGreaterThan([2, 3, 1, -6, 8], 5)); 
console.log(countGreaterThan([], 5)); 