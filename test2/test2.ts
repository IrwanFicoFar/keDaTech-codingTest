export const maxSubArray = (arr: number[], numLength: number) => {
  const arrLength = arr.length;

  let totalMax = 0;
  for (let i = 0; i < numLength; i++) {
    totalMax += arr[i];
  }

  let tempSum = totalMax;

  for (let i = numLength; i < arrLength; i++) {
    tempSum = tempSum + arr[i] - arr[i - numLength];
    totalMax = Math.max(totalMax, tempSum);
  }

  return totalMax;
};

// console.log(maxSubArray([100, 200, 300, 400], 2));
// console.log(maxSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
// console.log(maxSubArray([-3, 4, 0, -2, 6, -1], 2));
