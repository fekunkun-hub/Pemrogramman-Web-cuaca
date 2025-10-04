// --- Latihan 5: Logika + DOM ---
console.log("Latihan 5 Dijalankan!");

// Data atau kondisi awal
let lampuMenyala = true; // Coba ganti nilainya menjadi false

// 1. Tangkap elemen kotak status
const kotakStatus = document.getElementById('status-box');

// 2. Gunakan if...else untuk mengubah DOM
if (lampuMenyala === true) {
  // Jika lampu menyala, ubah teks dan background
  kotakStatus.textContent = 'Lampu SEDANG MENYALA';
  kotakStatus.style.backgroundColor = 'yellow';
  kotakStatus.style.color = 'black';
} else {
  // Jika tidak, kembalikan ke state semula
  kotakStatus.textContent = 'Lampu MATI';
  kotakStatus.style.backgroundColor = 'grey';
  kotakStatus.style.color = 'white';
}