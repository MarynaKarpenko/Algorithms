function sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)]; 
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); 
    } else if (arr[i] > pivot) {
      right.push(arr[i]); 
    }
  }

  return [...sort(left), pivot, ...sort(right)];
}

const unsortedArray = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = sort(unsortedArray);
console.log(sortedArray); 