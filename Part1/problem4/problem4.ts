/*
  - bikin variable alphabet dengan isi a-z lower case
  - ubah texts ke lowercase
  - removeRegex
  - cek dengan menggunakan nested for looping dengan membandingkan texts dengan alphabet
  perkembangan ide :
    - ternyata tidak cukup mengeluarkan hasil dengan melakukan perbadingan di nested for looping, perlu adanya tambahan perintah lainnya lagi
    - hasil dari nested di simpen dalam sebuah variabel compare
    - kemudain hapus huruf2 yang duplikat, dengan cara ubah ke array, kemudian di new set untuk menghapus duplikat, setelah itu ubah lagi ke string
    - cek apakah panjang compare yang sudah dihapus duplikasinya sama dengan variable aplhabet, jika sama brrti return true, sebaliknya return false
*/

export const isPangram = (texts: string) => {
  // deklrasi
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  const regex = /[^A-Za-z0-9]/g;

  // hapus Regex dan ubah text ke lowercase
  let removeRegex = texts.replace(regex, "");
  let textsToLowerCase = removeRegex.toLowerCase();

  // menyimpan huruf alphabet yang sama dengan inputan texts
  let compare = "";
  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < textsToLowerCase.length; j++) {
      if (alphabet[i] == textsToLowerCase[j]) {
        compare += alphabet[i];
      }
    }
  }

  // remove duplikasi
  let splitCompare = compare.split("");
  let removeDuplcate = [...new Set(splitCompare)];
  let joinCompare = removeDuplcate.join("");

  // compare antara hasil panjang joinCompare dengan panjang alphabet
  return joinCompare.length == alphabet.length ? true : false;
};
