// Ambil elemen dengan getElementById
const judul = document.getElementById("judul");
const paragraf = document.getElementById("paragraf");
const tombol = document.getElementById("btn");

// Event saat tombol diklik
tombol.addEventListener("click", function () {
  // 1. .textContent -> ubah teks dalam elemen
  judul.textContent = "Judul Berubah!";
  paragraf.textContent = "Teks paragraf juga berubah setelah klik tombol.";

  // 2. .style -> ubah tampilan elemen secara dinamis
  judul.style.color = "red"; // ubah warna jadi merah
  judul.style.fontSize = "32px"; // ubah ukuran font
  paragraf.style.backgroundColor = "#fef3c7"; // kasih background
  paragraf.style.padding = "10px"; // tambah padding
});