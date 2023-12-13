const apiKey = "0701dcf585c9f14c071c12eda8e7939e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const text = document.querySelector('.search input');
const btn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const url = `${apiUrl}${city}&appid=${apiKey}`
    const res = await fetch(url);
    let data = await res.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.degree').innerHTML = `${data.main.temp}°C`;
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`;

    switch (data.weather[0].main) {
        case "Rain":
            weatherIcon.src = "imgs/raining.png";
            break;
        case "Clear":
            weatherIcon.src = "imgs/raining.png";
            break;            
        case "Drizzle":
            weatherIcon.src = "imgs/rain-drops.png";
            break;            
        case "Mist":
            weatherIcon.src = "imgs/wind.png";
            break;            
        case "Clouds":
            weatherIcon.src = "imgs/cloudy-day.png";
            break;            
        case "Snow":
            weatherIcon.src = "imgs/snowing.png";
            break;            
        default:
            weatherIcon.src = "imgs/moon.png";
            break;
    }
}

btn.addEventListener('click', ()=>{
    checkWeather(text.value);
})
// console.log("hello from app");
// checkWeather(washington);