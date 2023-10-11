 function convertTemperature() {
            var temperatureInput = document.getElementById("temperature").value;
            var unit = document.getElementById("unit").value;
            var resultElement = document.getElementById("result");

            if (temperatureInput === "") {
                resultElement.innerHTML = "Masukkan suhu terlebih dahulu";
                return;
            }

            if (unit === "fahrenheit") {
                var fahrenheit = (temperatureInput * 9 / 5) + 32;
                resultElement.innerHTML = "Hasil konversi: " + fahrenheit.toFixed(2) + " °F";
            } else if (unit === "kelvin") {
                var kelvin = parseFloat(temperatureInput) + 273.15;
                resultElement.innerHTML = "Hasil konversi: " + kelvin.toFixed(2) + " K";
            }
        }