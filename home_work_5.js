function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

function random(max = 10) {
  return Math.floor(Math.random() * max);
}

const n = 10;
const a = Array(n).fill(0).map(() => random());
console.log(`a = [${a.join(', ')}]`);

const sortedArray = mergeSort(a);

console.log(`Sorted Array: [${sortedArray.join(', ')}]`);





