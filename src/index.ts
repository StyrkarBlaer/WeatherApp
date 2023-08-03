import { Temporal } from '@js-temporal/polyfill';
let apikey = ""

async function getWeatherAndTimezone() {
  let response = await fetch('https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&APPID=' + apikey)
  let weather = await response.json()
  return weather
}

var response: object = await getWeatherAndTimezone()


//a bunch of ts ignores for now while i figure things out.
// right now i'm not really sure how to put loop some html code through typescript
// i don't really want to do a <script> tag in the html, it feels like the wrong thing to do.
// right now it seems like the ONLY way to do it tbh.

// @ts-ignore response has the .cnt and .list properties
for (let i = 0; i < response.cnt; i++) {
  // @ts-ignore
  //console.log(response.list[i].sys.timezone)
  console.log(response.list[i].name)
  // @ts-ignore
  console.log(response.list[i].main.temp)
  // @ts-ignore
  console.log(response.list[i])
}


let htmlNotelet: string = '<div id="notelet"> <div class="weatherCard"> <div class="currentTemp"><span class="temp">25°</span><span class="location">Brussels</span></div><div class="currentWeather"><span class="conditions">&#xf0e7;</span><div class="info"><span class="rain">1.3 MM</span><span class="wind">10 MPH</span></div></div><div class="time">MONDAY | SEP 12 | 12:34</div></div></div>';
