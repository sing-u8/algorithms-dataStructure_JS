/*
	Multiple Pointers - countUniqueValues

	Implement a function called countUniqueValues, which accepts a sorted array,
	and counts the unquew values in the array.
	There can be negative numbers in the array, but it will always be sorted.

	countUniqueValues([1,1,1,1,1,2]) //2
	countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7
	countUniqueValues([]) // 0
	countUniqueValues([-2, -1, -1, 0, 1]) //4

	Time Complexity - O(n)
	Space Complexity - O(n)
*/

function countUniqueValues(sortedArr) {
  let cpArr = [].concat(sortedArr);
  let leftPtr = 0;
  let rightPtr = 1;

  if (!cpArr.length) return 0;
  if (cpArr.length === 1) return 1;
  while (rightPtr < cpArr.length) {
    if (cpArr[leftPtr] !== cpArr[rightPtr]) {
      leftPtr++;
      cpArr[leftPtr] = cpArr[rightPtr];
      rightPtr++;
    } else {
      rightPtr++;
    }
  }
  return leftPtr + 1;
}

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
