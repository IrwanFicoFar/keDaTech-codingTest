/*
  - bikin variable huruf berisikan abjad a-z
  - buat looping dengan batasan panjang abjad
  - jika menampilkan huruf index ke i, maka yang ditampilkan adalah index paling akhir di kurang index i
  - masukkan ke variable penampung kemudian di return
  perkembangan ide :
    - bikin variable huruf dengan isi a-z dan huruf caiptal dengan isi A-Z dan juga regex untuk menghilangkan semua karakter
    - lowerCase cipherTex dan remove Regex
    - lakukan convert huruf dengan menggunakan nested for looping , jika menampilkan huruf index ke i, maka yang ditampilkan adalah huruf index.length -1 - index i
    - untuk cek huruf capital , lakukan nested for looping dengan membandingkan chiper yang sudah di lower case, dengan huruf capital yang sudah di deklarasikan diawal, 
      jika ada index ke i terdeteksi ada huruf capital, variable tampung dari point ke 3, diubah dengan huruf capital index ke (panjang huruf capital-1)- index ke i
*/

export const decryptAtbash = (cipherText: string) => {
  // deklarasi
  const huruf: string = "abcdefghijklmnopqrstuvwxyz";
  const hurufCapital: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const regex = /[^A-Za-z0-9]/g;

  let removeRegex = cipherText.replace(regex, "");
  let cipherTextToLowerCase = removeRegex.toLowerCase();

  // untuk convert huruf sesuai prinsip Atbash Cipher
  let displayChanged = "";
  for (let i = 0; i < cipherTextToLowerCase.length; i++) {
    for (let j = 0; j < huruf.length; j++) {
      if (cipherTextToLowerCase[i] === huruf[j]) {
        displayChanged += huruf[huruf.length - 1 - j];
      }
    }
  }

  // untuk mengecek huruf Capital
  let splitDisplayChanged = displayChanged.split("");
  for (let i = 0; i < removeRegex.length; i++) {
    for (let j = 0; j < hurufCapital.length; j++) {
      if (removeRegex[i] === hurufCapital[j]) {
        splitDisplayChanged[i] = hurufCapital[hurufCapital.length - 1 - j];
      }
    }
  }

  // kembalikan ke string
  let finalDisplay = splitDisplayChanged.join("");
  return finalDisplay;
};
