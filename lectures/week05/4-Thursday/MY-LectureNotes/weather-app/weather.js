const apikey = "edc88ac70761d79e9b684659a636f123"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city){
    const response = await fetch(apiurl+city+ `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.main.wind.speed + "km/h";
    if(data.weather[0].main == " Clouds"){
        weatherIcon.src = "images/images/clouds.png";
        
    }else if(data.weather[0].main == " Rain"){
        weatherIcon.src = "images/images/rain.png";
    }else if(data.weather[0].main == " Drizzle"){
        weatherIcon.src = "images/images/drizzle.png";
    
    
    }

    }



searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value); 
} )

