function findMax(arr) {
    if (arr.length === 0) return undefined; // Xử lý mảng rỗng
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];``
    }
  }
  return max;
}
console.log(findMax([1, 3, 5, 7, 9])); // 9
console.log(findMax([10, 20, 30, 40, 50])); // 50
console.log(findMax([-5, -2, -1, -3])); // -1