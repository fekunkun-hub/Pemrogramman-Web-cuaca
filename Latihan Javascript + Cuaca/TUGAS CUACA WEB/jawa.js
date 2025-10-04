// Simulasi data cuaca
const DataCuaca = {
  "Surabaya": {
    temperature: 33,
    condition: "Panas Terik"
  },
  "Samarinda": {
    temperature: 100,
    condition: "Mendung"
  },
  "Jakarta": {
    temperature: 30,
    condition: "Cerah"
  },
  "Bontang": {
    temperature: 20,
    condition: "Hujan"
  },
  "Banjarmasin": {
    temperature: 25,
    condition: "Mendung"
  },
  "Balikpapan": {
    temperature: 39,
    condition: "Mendung"
  },
  "Bandung": {
    temperature: 25,
    condition: "Hujan Ringan"
  },
  "Tenggarong": {
    temperature: 29,
    condition: "Mendung"
  },
  "Tulung Agung": {
    temperature: 24,
    condition: "Hujan"
  }
};

document.getElementById('show-weather').addEventListener('click', function() {
  const cityInput = document.getElementById('city-input').value.trim();
  
  if (DataCuaca[cityInput]) {
    const data = DataCuaca[cityInput];
    console.log(`Cuaca di ${cityInput}:`);
    console.log(`Suhu: ${data.temperature}°C`);
    console.log(`Kondisi: ${data.condition}`);
  } else {
    console.log(`Data cuaca untuk ${cityInput} tidak tersedia.`);
  }
});