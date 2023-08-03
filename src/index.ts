import { Temporal } from '@js-temporal/polyfill';
async function getWeatherAndTimezone() {
  let response = await fetch('https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&APPID={API KEY}')
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

let seconds: number = 3600

// converting seconds to utc format in the hackiest way known to man.
// @ts-ignore SIlence this for now since i'll probably delete it later.
const date: Date = new Date(null);
date.setSeconds(seconds);
let result: string = date.toISOString().slice(11, 16);
result = "+" + result;

console.log(result)
let tz = Temporal.TimeZone.from(result)
let timestamp = Temporal.Instant.fromEpochSeconds(0);
console.log(tz.getOffsetNanosecondsFor(timestamp))
