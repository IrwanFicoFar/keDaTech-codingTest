/*
  - looping huruf dengan batasan panjang huruf tersebut
  - jika huruf index ke i-1 ada spasi, maka huruf pertama + index ke i (jika ada spasi sebelumnya)
  - masukkan ke varibale penampung lalu return
*/

export const acronym = (phrase: string) => {
  // simpen huruf yang sebelumnya ada spasi
  let afterSpace = "";
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i - 1] == " ") {
      afterSpace += phrase[i];
    }
  }
  // phrase index pertama ditambah dengan huruf yang sudah di simpan di afterSpace lalu di upperCase
  let finalDisplay = phrase[0] + afterSpace;
  return finalDisplay.toUpperCase();
};
