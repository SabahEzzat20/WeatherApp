const apiKey = 'c2c86d3965843e44f8b252b051c9334d';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

let searchBox = document.querySelector('.search input');
let searchButton = document.querySelector('.search button');
let weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    let data =  await response.json();
    console.log(data);
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
        document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`;
        switch (data.weather[0].main) {
            case 'Clear':
                weatherIcon.src = 'images/clear.png';
                break;
            case 'Clouds':
                weatherIcon.src = 'images/clouds.png';
                break;
            case 'Rain':
                weatherIcon.src = 'images/rain.png';
                break;
            case 'Drizzle':
                weatherIcon.src = 'images/drizzle.png';
                break;
            case 'Mist':
                weatherIcon.src = 'images/mist.png';
                break;
            case 'Snow':
                weatherIcon.src = 'images/snow.png';
                break;
        }
    }
}

searchButton.addEventListener('click', () => {
    checkWeather(searchBox.value);
})