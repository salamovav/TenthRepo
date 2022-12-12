fetch('https://api.openweathermap.org/data/2.5/weather?lat=59.9421696&lon=30.3160677&appid=e06c3f471c998f93bcb37a60d844a9da')
.then(function(resp){return resp.json()})
.then(function(data){
    console.log(data);
    document.querySelector('.name').innerHTML=data.name;
    document.querySelector('.temp').textContent=Math.round(data.main.temp-274)+ '°C';
    document.querySelector('.weather').innerHTML=data.weather[0]['description'];
    document.querySelector('.icon').innerHTML="<img src='http://cdn2.iconfinder.com/data/icons/weather-74/24/weather-07-512.png'>";
    document.querySelector('.wind').innerHTML=data.wind.speed+ ' м/с';
    document.querySelector('.humidity').innerHTML=data.main.humidity+ '%';
    document.querySelector('.country').innerHTML=data.sys.country;
    document.querySelector('.sunrise').innerHTML=data.sys.sunrise;
    document.querySelector('.sunset').innerHTML=data.sys.sunset;
})
