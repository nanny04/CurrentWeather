const APIkey = 'b9b68804ac0f7403783151a0e1be1376'
const url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const searchBox = document.querySelector('.searchdiv input')
const searchBtn = document.querySelector('.searchdiv button')
const weatherIcon = document.querySelector('.weathericon')

document.querySelector('.error').style.display = 'none'

async function checkWeather(cityName){
    const response = await fetch(url + cityName + `&appid=${APIkey}`)
    var data = await response.json();

    if(response.status == '404'){
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    } else {
        document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('.wind').innerHTML = data.wind.speed + 'Km/h'

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'images/clouds.png'
    } else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear.png'
    } else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png'
    } else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/mist.png'
    } else if(data.weather[0].main == 'rain'){
        weatherIcon.src = 'images/rain.png'
    } else if(data.weather[0].main == 'snow'){
        weatherIcon.src = 'images/snow.png'
    } 

    document.querySelector('.weather').style.display = 'block'
    document.querySelector('.error').style.display = 'none'
    } 
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
    searchBox.value = ''
})

document.addEventListener('keydown', (e) => {
    if(e.code === 'Enter'){
        e.preventDefault()
        searchBtn.click()
    }
})
