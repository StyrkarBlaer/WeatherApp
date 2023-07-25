import { Temporal } from '@js-temporal/polyfill';

console.log("Hi")

//async function getWeatherAndTimezone() {
 // let response = await fetch('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ab1831ff378ed52138a811ff0f60dc1f')
  //let weather = await response.json()
  //return weather
//}

//getWeatherAndTimezone().then(data => console.log(data));

let seconds: number = -7200

// converting seconds to utc format in the hackiest way known to man.
const date: Date = new Date(null);
date.setSeconds(seconds);
let result: string = date.toISOString().slice(11, 16);
result = "+" + result;

console.log(result)
let tz = Temporal.TimeZone.from(result)
let timestamp = Temporal.Instant.fromEpochSeconds(0);
console.log(tz.getOffsetNanosecondsFor(timestamp))

// The suffering is excellent