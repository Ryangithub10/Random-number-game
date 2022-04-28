// sambutan
alert(`Selamat datang di game sederhana!

Cara mainnya adalah kau cukup menebak angka dari 1 sampai 10!

Semoga beruntung!`);

// mengulangi permainan
do {
  // generate angka random
  var angkaRand = 1.0 + Math.random() * 10;
  angkaRand = Math.floor(angkaRand);
  
  // tebak angka
  var tebak = prompt('Masukan angka 1-10');
  
  // pengkondisian/perulangan
  for (var i = 2; i >= 0; i--) {
    //kondisi jika variable bernilai null
    if (tebak == null) {
      break;
    }
    
    if (tebak < angkaRand && i != 0) {
      alert('angka mu terlalu kecil!\nKesempatan anda sisa ' + i);
    } else if (tebak > angkaRand && i != 0) {
      alert('angka mu terlalu besar!\nKesempatan anda sisa ' + i);
    } else if (tebak == angkaRand || i != 0) {
      alert('SELAMAT! Angka yang anda masukan benar!');
      break;
    }
    
    if (i > 0) {
      tebak = prompt('Masukan angka 1-10');
    }
    
    // kondisi jika kesempatan sudah habis
    if (i == 0) {
      alert('yah, angka yang anda masukan salah! angka yang benar adalah ' + angkaRand);
    }
  }
  
  if (tebak == null) {
    break;
  }
  
  var ulangi = confirm('ulangi lagi?');
}  while (ulangi)