
export const dateBuilder = () => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = new Date();

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date}, ${year}`
  }

export const forecastParser = (data) => {
    let fiveDays = {}
    for (let i = 0; i < data.list.length; i++) {
        let day = data.list[i].dt_txt.substring(5, 10);
        if (!fiveDays[day] && data.list[i].dt_txt.includes("18:00:00")) {
            fiveDays[day] = data.list[i];
        }
    }
    return fiveDays
}


  const backgroundSwitcher = (weather) => {
    const types = {"Thunderstorm": "thunder.jpeg", "Drizzle": "drizzle.jpeg" , "Rain": "rain.jpeg", "Snow": "snow.jpeg", "Clear": "clear.jpeg", "Clouds": "clouds.jpeg", "Mist": "mist.jpeg", "Smoke": "smoke.jpeg", "Haze": "haze.jpeg", "Dust": "dust.jpeg", "Fog": "fog.jpeg", "Sand": "sand.jpeg", "Ash": "ash.jpeg", "Squall": "squall.jpeg", "Tornado": "tornado.jpeg"};
    let weatherType = weather.weather[0].main;
    console.log(weatherType)
    document.querySelector('.app').style.backgroundImage = `url(./assets/${types[weatherType]}`;
  }