export const urutAngkaDariTerbesar = (num: number[]): number[] => {
  const numLength = num.length;

  for (let i = 0; i < numLength - 1; i++) {
    for (let j = i + 1; j < numLength; j++) {
      if (num[i] < num[j]) {
        let temp = num[i];
        num[i] = num[j];
        num[j] = temp;
      }
    }
  }

  return num;
};

console.log(urutAngkaDariTerbesar([1, 2, 4, 3, 5, 3, 2, 1]));
