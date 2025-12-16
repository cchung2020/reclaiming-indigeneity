import { useState } from "react";
import logo from "./assets/casa-romero-logo.jpg";
import { useTranslation } from "react-i18next";

const weather_url =
  "https://api.open-meteo.com/v1/forecast?latitude=3.3761&longitude=-74.8015&hourly=temperature_2m&forecast_days=1&temperature_unit=fahrenheit";

async function get_cur_temp() {
  try {
    const resp = await fetch(weather_url);
    if (!resp.ok) {
      throw new Error("response status " + resp.status);
    }
    const weather_json = await resp.json();
    return weather_json.hourly.temperature_2m[0];
  } catch (error) {
    console.log("API call failed");
    console.log(error.message);
  }
}

const cur_temp_outer = await get_cur_temp();
console.log(cur_temp_outer);

export default function Footer() {
  const { i18n, t } = useTranslation();
  const [cur_temp, setTemp] = useState("");

  if (cur_temp !== cur_temp_outer) {
    setTemp(cur_temp_outer);
  }

  return (
    <footer aria-label="Site footer">
      <div className="footer-brand">
        <img className="footer-logo" src={logo} alt={t("footer.logoAlt")} />
        <p>
          &copy; Reclaiming Indigeneity
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          {t("footer.tempLabel")}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <a
          href="https://reclaimingindigeneity.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
          aria-label="Subscribe to the Reclaiming Indigeneity Substack newsletter"
        >
          {t("footer.subscribe")}
        </a>
      </div>
    </footer>
  );
}
