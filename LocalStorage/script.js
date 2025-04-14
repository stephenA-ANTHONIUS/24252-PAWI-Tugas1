let data; // Deklarasi Variabel Data
let daftar_tamu = document.getElementById('daftar_tamu'); // ambil element event darfat tamu dari index

// panggil fungsi tampil
tampil();

function simpan() {
    let nama = document.getElementById ('nama').value; // ambil value dari input (CARA LIAT LOCAL STORAGE, CONSOLE DHTU BAGIAN ATAS AD APLICATION PILIH LOCALSTORAGE)
    let keperluan = document.getElementById('keperluan').value;
    console.log(nama);
    let JK = document.getElementById('JK').value;
    console.log(JK);

    // cek apakah local storagenya kosong
    if(localStorage.getItem('ls_bukutamu') == null) {
        data = []; // buat array kosong
    } else {
        // ambil data dari local storage
        data = JSON.parse(localStorage.getItem('ls_bukutamu'))
    }

    // massukan value input nama kedalam array
    data.push({nama_pengunjung: nama, perlu: keperluan, JK:JK}); // jadi nama pengunjung ambil nama dari id di index dan seterusnya


    // buat sipan ke local storage
    localStorage.setItem('ls_bukutamu', JSON.stringify(data));

    // kosongkan isi elemen daftar tamu]
    daftar_tamu.innerHTML = '';
    // pannggil fungsi tampil
    tampil();
}

function tampil(){
    localStorage.getItem('ls_bukutamu') == null ?
    data = [] : data = JSON.parse(localStorage.getItem('ls_bukutamu')); 
    // cek apakah local storage kosong

    console.log(data.length); // tampilkan jumlah data di konsol

    document.getElementById('total_tamu').innerHTML = `Total Tamu : ${data.length}`;

    let total_laki = 0;
    let total_perempuan = 0;

    data.forEach((item) => {
        if(item.JK == 'L'){
            total_laki++;
        } else if(item.JK == 'P') {
            total_perempuan++;
        }

        daftar_tamu.innerHTML += `<li>
        ${item.nama_pengunjung} - ${item.perlu}
        </li>`
    });

    document.getElementById('tamu_laki').innerHTML = `Total Tamu Laki-Laki : ${total_laki}`;
    document.getElementById('tamu_perempuan').innerHTML = `Total Tamu Perempuan : ${total_perempuan}`;
}