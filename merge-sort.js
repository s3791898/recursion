const arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
const arr2 = [105, 79, 100, 110];

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const middleOfArray = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleOfArray);
  const rightArr = arr.slice(middleOfArray);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(mergeSort(arr1)); // [0, 1, 1, 2, 3, 5, 8, 13]
// Initial call: mergeSort([3, 2, 1, 13, 8, 5, 0, 1])

// Call mergeSort with [3, 2, 1, 13, 8, 5, 0, 1]
// Divide the array into [3, 2, 1, 13] and [8, 5, 0, 1]
// Recursion on left half: mergeSort([3, 2, 1, 13])

// Call mergeSort with [3, 2, 1, 13]
// Divide the array into [3, 2] and [1, 13]
// Recursion on left sub-left half: mergeSort([3, 2])

// Call mergeSort with [3, 2]
// Divide the array into [3] and [2]
// Base case - [3] and [2] are returned as they are single-element arrays.

// Merge step: merge([3], [2]) returns [2, 3].

// Recursion on left sub-right half: mergeSort([1, 13])

// Call mergeSort with [1, 13]
// Divide the array into [1] and [13]
// Base case - [1] and [13] are returned as they are single-element arrays.

// Merge step: merge([1], [13]) returns [1, 13].

// Merge step for the left half: merge([3, 2], [1, 13]) returns [1, 2, 3, 13].

// Recursion on right half: mergeSort([8, 5, 0, 1])

// Call mergeSort with [8, 5, 0, 1]
// Divide the array into [8, 5] and [0, 1]
// Recursion on right sub-left half: mergeSort([8, 5])

// Call mergeSort with [8, 5]
// Divide the array into [8] and [5]
// Base case - [8] and [5] are returned as they are single-element arrays.

// Merge step: merge([8], [5]) returns [5, 8].

// Recursion on right sub-right half: mergeSort([0, 1])

// Call mergeSort with [0, 1]
// Divide the array into [0] and [1]
// Base case - [0] and [1] are returned as they are single-element arrays.

// Merge step: merge([0], [1]) returns [0, 1].

// Merge step for the right half: merge([8, 5], [0, 1]) returns [0, 1, 5, 8].

// Merge step for the entire array: merge([1, 2, 3, 13], [0, 1, 5, 8]) returns [0, 1, 1, 2, 3, 5, 8, 13].

// The final sorted array is [0, 1, 1, 2, 3, 5, 8, 13].

console.log(mergeSort(arr2)); // [79, 100, 105, 110]
