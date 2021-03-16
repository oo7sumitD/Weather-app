const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`

async function getWeather(location)
{
    const response = await fetch(url(location),{
        origin:"cors"})
        const responseData = await response.json()

        showeather(responseData)
}

function showeather(data)
{
    const temp = KelvinToCelcius(data.main.temp)
    const weather = document.createElement("div")
    weather.classList.add("weather")

    weather.innerHTML = `
        <h1><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}&deg; C</h1>
        <h3>in ${search.value}</h3>
        
    `

    main.innerHTML = ""

    main.appendChild(weather)
}

function KelvinToCelcius(k)
{
    return (k - 273.15).toFixed(1) //ToFixed is used to get decimal values upto given args.
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const location = search.value
    if(location)
    {
        getWeather(location)
    }
})