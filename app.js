document.querySelector('.search button').addEventListener('click', ()=>{
    weather.search()
  })
document.querySelector('.search-bar').addEventListener('keyup', (event)=>{
    if(event.key=="Enter"){weather.search()}
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
        document.querySelector('.city').innerText="Weather in "+name;
        document.querySelector('.icon').src="https://openweathermap.org/img/wn/"+ icon +".png"
    document.querySelector('.description').innerText=description;
    document.querySelector('.humidity').innerText=`humidity: ${humidity}%`;
    document.querySelector('.temp').innerText=` ${temp} °F`;
    document.querySelector('.wind').innerText= `wind speed : ${speed}km/hr`;
    document.querySelector('.Weather').classList.remove("loading");
    document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+description+"')"
},
    search: function(){
        this.fetchWeather(document.querySelector('.search-bar').value);

    }
};
weather.fetchWeather("afikpo");