import React, { useContext } from "react";
import { Marker, Popup } from "react-leaflet";

import {
  XYPlot,
  XAxis,
  YAxis,
  DiscreteColorLegend,
  HorizontalGridLines,
  VerticalGridLines,
  LineMarkSeries,
  VerticalBarSeries
} from "react-vis";

import dayjs from "dayjs";
import { times } from "lodash";

import { StoreContext } from "../../containers/Context/Context";

import useAxios from "axios-hooks";
import styles from "./WeatherSummary.module.scss";
import WeatherIconComponent from "../WeatherIconComponent/WeatherIconComponent";

const WeatherSummary = () => {
  const { state } = useContext(StoreContext);
  const { mapCentre } = state;
  const url = `${
    window.location.protocol
  }//api.openweathermap.org/data/2.5/forecast?lat=${mapCentre[0]}&lon=${
    mapCentre[1]
  }&APPID=${process.env.REACT_APP_OPEN_WEATHERMAP_API}&units=metric`;

  const [{ data, loading, error }] = useAxios(url);

  let city, seriesData;

  if (data) {
    city = { ...data.city };

    seriesData = {
      temperature: data.list.map(item => ({
        x: item.dt,
        y: item.main.temp
      })),
      wind: data.list.map(item => ({
        x: item.dt,
        y: item.wind.speed
      }))
    };
  }

  const XtickFormatter = date => {
    return dayjs(new Date(date * 1000)).format("ddd HH:00");
  };

  const WeatherTableComponent = ({ data }) => {
    if (!data) return null;
    const { list } = data;

    const forecasts = 8;

    return (
      <table className={styles.weatherDataTable}>
        <thead>
          <tr>
            <th colSpan={forecasts}>Forecast in the next few hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {times(forecasts, idx => (
              <td key={list[idx].dt}>{list[idx].weather[0].description}</td>
            ))}
          </tr>
          <tr>
            {times(forecasts, idx => (
              <td key={list[idx].dt}>
                {dayjs(new Date(list[idx].dt * 1000)).format("ddd HH:00 ")}
              </td>
            ))}
          </tr>
          <tr>
            {times(forecasts, idx => (
              <td key={list[idx].dt}>
                <span className={styles.icon}>
                  <WeatherIconComponent
                    timeStamp={list[idx].dt}
                    iconCode={list[idx].weather[0].id}
                  />
                </span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    !loading && (
      <Marker position={mapCentre}>
        {data && (
          <Popup className={styles.weatherSummary} maxWidth={800}>
            <h6>
              {city.name} (Pop. {city.population})
            </h6>
            <WeatherTableComponent data={data} />
            <XYPlot height={400} width={500}>
              <XAxis tickFormat={XtickFormatter} />
              <YAxis />
              <DiscreteColorLegend
                items={["Temp (degC)", "Wind Speed (km)"]}
                className={styles.weatherSummary__legend}
              />
              <VerticalGridLines />
              <HorizontalGridLines />
              <VerticalBarSeries
                stroke="#ffff00"
                strokeStyle="solid"
                opacity={1}
                style={{}}
                data={seriesData.temperature}
              />
              <LineMarkSeries
                size={3}
                stroke="#0000ff"
                strokeStyle="solid"
                opacity={1}
                style={{}}
                data={seriesData.wind}
              />
            </XYPlot>
          </Popup>
        )}
        {error && <div>Error loading weather data for this location</div>}
      </Marker>
    )
  );
};

export default WeatherSummary;
