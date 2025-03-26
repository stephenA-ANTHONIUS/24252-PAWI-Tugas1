let data; // Deklarasi Variabel Data
let daftar_tamu = document.getElementById('daftar_tamu'); // ambil element event darfat tamu dari index

// panggil fungsi tampil
tampil();

function simpan() {
    let nama = document.getElementById ('nama').value; // ambil value dari input (CARA LIAT LOCAL STORAGE, CONSOLE DHTU BAGIAN ATAS AD APLICATION PILIH LOCALSTORAGE)
    let keperluan = document.getElementById('keperluan').value;
    console.log(nama);

    // cek apakah local storagenya kosong
    if(localStorage.getItem('ls_bukutamu') == null) {
        data = []; // buat array kosong
    } else {
        // ambil data dari local storage
        dataata = JSON.parse(localStorage.getItem('ls_bukutamu'))
    }

    // massukan value input nama kedalam array
    data.push({nama_pengunjung: nama, perlu: keperluan}); // jadi nama pengunjung ambil nama dari id di index dan seterusnya


    // buat sipan ke local storage
    localStorage.setItem('ls_bukutamu', JSON.stringify(data));
    tampil();
}

function tampil(){
    localStorage.getItem('ls_bukutamu') == null ?
    data = [] : data = JSON.parse(localStorage.getItem('ls_bukutamu')); 
    // cek apakah local storage kosong

    data.forEach((item) => {
        daftar_tamu.innerHTML += `<li>
        ${item.nama_pengunjung} - ${item.perlu}
        </li>`
    });
}