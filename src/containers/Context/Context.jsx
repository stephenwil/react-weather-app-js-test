import React, { useReducer } from "react";

export const StoreContext = React.createContext(); // Create Context to store a reference to the state

export const UPDATE_MAP_CENTRE = "UPDATE_MAP_CENTRE";
export const UPDATE_WEATHER_DATA = "UPDATE_WEATHER_DATA";

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_MAP_CENTRE:
      return {
        ...state,
        mapCentre: action.mapCentre
      };
    case UPDATE_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.weatherData
      };
    default:
      throw new Error("Unexpected action");
  }
};

const StoreContextProvider = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
