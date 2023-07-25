import { Temporal } from '@js-temporal/polyfill';

console.log("Hi")

async function getWeatherAndTimezone() {
  let response = await fetch('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ab1831ff378ed52138a811ff0f60dc1f')
  let weather = await response.json()
  return weather
}

getWeatherAndTimezone().then(data => console.log(data));

console.log(Temporal.Now.timeZoneId())