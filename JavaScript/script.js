// buat part body "getelementsbyname"
document.getElementsByTagName('body')[0].style.backgroundColor = 'cyan';
// Variabel
let nama = "Stephen";
let umur = 20;

document.getElementById('nama').innerHTML = "Nama Saya : " + nama;
// ini cara ke 2 pake kutip di sebelah angka 1 dan dolar
document.getElementById('umur').innerHTML = `umur : ${umur}`; 

// cara untuk menampilkan list nama (tapi bikin jugo di indexny baris ke 14)
let mahasiswa = [
    "Stephen", "Budi", "Caca", "Dedi"
];
mahasiswa.forEach( (mhs) => {
    document.getElementById('mahasiswa').innerHTML += `<li>${mhs}</li>`;
} )

let nilai = [
    {nama: "Stephen", nilai: 90},
    {nama: "Budi", nilai: 70},
    {nama: "Caca", nilai: 80},
    {nama: "Dedi", nilai: 50},
];
nilai.forEach( (data) => {
    document.getElementById('nilai').innerHTML += `<tr>
    <td>${data.nama}</td>
    <td>${data.nilai}</td>
    </tr>`;
});

fetch('https://dummyjson.com/quotes')
.then(res => res.json())
.then(data => { 
    console.log(data.quotes) 
    data.quotes.forEach( (q) => { document.getElementById('quotes').innerHTML += ` <li>${q.quote} - ${q.author}</li>` })
});