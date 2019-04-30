import React from "react";
import Leaflet from "../../components/Leaflet/Leaflet";
import ConnectedUserInputForm from "../../components/UserInputForm/UserInputForm";
import StoreContextProvider from "../../containers/Context/Context";

import styles from "./AppContainer.module.scss";

const initialState = {
  mapCentre: [51, 1],
  weatherData: null
};

const AppContainer = () => {
  return (
    <StoreContextProvider initialState={initialState}>
      <div className={styles.area}>
        <Leaflet />
        <ConnectedUserInputForm />
      </div>
    </StoreContextProvider>
  );
};

export default AppContainer;
