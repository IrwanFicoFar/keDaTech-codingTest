/*
  - split angka
  - bikin variable pangkat untuk menampung panjang number, digunakan sebagai pangkat nantinya
  - jumlahkan angka index ke i^pangkat , pakai for looping, tampung ke sebuah variable
  - bandingkan apakah jumlah variable penampung point 3 diatas sama dengan number awal, jika sama true, sebaliknya false 
  perkembangan ide :
   - karena ini adalah typscript perlu menyamakan banget datanya, seperti saat perulangan untuk menjumlahkan masing2 index^pangkat, maka splitNum nya harus diubah dulu ke number
*/

export const isArmstrongNumber = (num: number) => {
  // deklarasi
  let pangkat: number = num.toString().length;
  let splitNum: string[] = num.toString().split("");

  // menjumlahkan num index ke i ^ pangkat
  let sum = 0;
  for (let i = 0; i < pangkat; i++) {
    sum += Number(splitNum[i]) ** pangkat;
  }

  // membandingkan sum dengan inputan num
  if (sum === num) {
    return true;
  }

  return false;
};
