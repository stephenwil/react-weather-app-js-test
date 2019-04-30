import React, { useContext } from "react";
import styles from "./Leaflet.module.scss";
import { Map as LeafletMap, TileLayer, Circle } from "react-leaflet";
import { StoreContext } from "../../containers/Context/Context";
import WeatherSummary from "../../components/WeatherSummary/WeatherSummary";

const Leaflet = () => {
  const { state } = useContext(StoreContext);
  const { mapCentre } = state;

  const map = (
    <LeafletMap className={styles.map} center={mapCentre} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Circle center={mapCentre} fillColor="blue" radius={200} />
      <WeatherSummary />
    </LeafletMap>
  );

  return map;
};

export default Leaflet;
