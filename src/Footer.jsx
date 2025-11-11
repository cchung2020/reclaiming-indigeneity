import { useState } from 'react';


const weather_url = "https://api.open-meteo.com/v1/forecast?latitude=3.3761&longitude=-74.8015&hourly=temperature_2m&forecast_days=1&temperature_unit=fahrenheit";

export default function Footer() {
  const [cur_temp, setTemp] = useState('');

  fetch(weather_url)
    .then(x => x.json())
    .then(data => {
        setTemp(data.hourly.temperature_2m[0]);
      }
    )

  return (
    <footer>
      <p>&copy; Reclaiming Indigeneity 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         Current temperature in Colombia: {cur_temp} &deg; F
         </p>
    </footer>
  );
}