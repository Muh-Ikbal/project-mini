const btnSearch = document.querySelector(".btn-search");
const inputText = document.querySelector(".input-text");

btnSearch.addEventListener("click", function () {
    const weatherDescriptions = {
        Clear: "Cerah",
        Clouds: "Berawan",
        Drizzle: "Gerimis",
        Rain: "Hujan",
        Thunderstorm: "Badai Petir",
        Snow: "Salju",
        Mist: "Kabut",
        "overcast clouds": "Awan Mendung",
        "few clouds": "sedikit berawan",
        "light rain": "hujan ringan",
        // Tambahkan deskripsi cuaca lain sesuai kebutuhan
    };

    // Fungsi untuk mengembalikan deskripsi cuaca dalam bahasa Indonesia
    function translateWeatherDescription(englishDescription) {
        return weatherDescriptions[englishDescription] || englishDescription;
    }
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
            inputText.value +
            "&appid=5b642dd25967404d70b0641701abacac&units=metric"
    )
        .then((response) => response.json())
        .then((data) => {
            let result = document.querySelector(".content");
            result.style.opacity = "1";
            result.innerHTML = `<div class="located">
                    <h2 class="city">${data.name},<span class="country">${
                data.sys.country
            }</span></h2>
                    <img src="https://openweathermap.org/images/flags/${data.sys.country.toLowerCase()}.png" alt="">
                </div>
                <div class="weather">
                    <div class="icon">
                        <img src="https://openweathermap.org/img/wn/${
                            data.weather[0].icon
                        }.png" alt="">
                    </div>
                    <div class="weather-info">
                        <h2 class="temp">${data.main.temp}°C</h2>
                        <h2 class="desc">${translateWeatherDescription(
                            data.weather[0].description
                        )}</h2>
                    </div>
                </div>
                <div class="information">
                    <div class="wind">
                        <p>Angin</p>
                        <span>${data.wind.speed}m/s</span>
                    </div>
                    <div class="humidity">
                        <p>kelembapan</p>
                        <span>${data.main.humidity}%</span>
                    </div>
                    <div class="presure">
                        <p>tekanan</p>
                        <span>${data.main.pressure}mb</span>
                    </div>
                    <div class="visibility">
                        <p>Jarak Pandang</p>
                        <span>${data.visibility}m</span>
                    </div>
                </div>`;
        })
        .catch((error) => {
            let result = document.querySelector(".content");
            result.style.opacity = "1";
            result.innerHTML = error.message;
        });

    inputText.value = "";
});
