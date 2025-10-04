const tombol = document.getelemenbyid("btn");
const teks = document.getelementbyid("teks");

tombol.addeventlistener("click", funcition () {
    teks.textcontent = "teks berhasil diubah dengan  java script";
    teks.style.color = "green";
});