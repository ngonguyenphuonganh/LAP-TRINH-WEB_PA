function alternateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      sum += arr[i]; 
      sum -= arr[i]; 
    }
  }
  return sum;
}
console.log(alternateSum([10, 5, 6, 3]));
console.log(alternateSum([1, 2, 3, 4, 5])); 