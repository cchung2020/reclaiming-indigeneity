import { useState } from 'react';


const weather_url = "https://api.open-meteo.com/v1/forecast?latitude=3.3761&longitude=-74.8015&hourly=temperature_2m&forecast_days=1&temperature_unit=fahrenheit";


async function get_cur_temp() {
  const a = await fetch(weather_url);
  const weather_json = await(a.json());
  return weather_json.hourly.temperature_2m[0];
}

const cur_temp_outer = await get_cur_temp();
console.log(cur_temp_outer);


export default function Footer() {
  const [cur_temp, setTemp] = useState('');

  // fetch(weather_url)
  //   .then(x => x.json())
  //   .then(data => {
  //       setTemp(data.hourly.temperature_2m[0]);
  //     }
  //   )

  if (cur_temp != cur_temp_outer) {
    setTemp(cur_temp_outer);
  }
  // const weather_json = await(a.json());
  // console.log(weather_json)

  return (
    <footer>
      <p>&copy; Reclaiming Indigeneity 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         Current temperature in Colombia: {cur_temp} &deg; F
         </p>
    </footer>
  );
}