const button =document.querySelector("button");
const SearchBar=document.querySelector('.search-bar');
const Weathercity =document.querySelector('.city');
const weathericon =document.querySelector('.icon');
const weatherdescription =document.querySelector('.description');
const weatherhumidity=document.querySelector('.humidity');
const weatherTemp = document.querySelector('.temp');
const weatherWind =document.querySelector('.wind');
const mainWeather = document.querySelector('.Weather');
document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+description+"')"

button.addEventListener('click', ()=>
    {
    weather.search()
    })
    
SearchBar.addEventListener('keyup', (event)=>{
    if(event.key=="Enter")
    {
    weather.search()
    }
  })

let weather = {
    apikey:"69bbeb705b15b037e961d93295031e73",

    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=metric&appid="
        + this.apikey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data){
        const {name}=data;
        const {icon, description}=data.weather[0];
        const {temp, humidity}=data.main;
        const{speed}= data.wind;
        Weathercity.innerText="Weather in "+name;
        weathericon.src="https://openweathermap.org/img/wn/"+ icon +".png"
        weatherdescription.innerText=description;
        weatherhumidity.innerText=`humidity: ${humidity}%`;
        weatherTemp.innerText=` ${temp} °F`;
        weatherWind.innerText= `wind speed : ${speed}km/hr`;
        mainWeather.classList.remove("loading");
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+description+"')"
},
    search: function(){
        this.fetchWeather(SearchBar.value);

    }
};
weather.fetchWeather("afikpo");
