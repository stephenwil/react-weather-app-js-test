import React, { useContext } from "react";
import AlgoliaPlaces from "algolia-places-react";
import {
  StoreContext,
  UPDATE_MAP_CENTRE
} from "../../containers/Context/Context";

const AlgoliaPlacesComponent = () => {
  const { dispatch } = useContext(StoreContext);
  return (
    <AlgoliaPlaces
      placeholder="Enter a location"
      options={{
        appId: process.env.REACT_APP_ALGOLIA_API,
        apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
        language: "en",
        countries: [],
        type: "city"
      }}
      onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
        if (suggestion && suggestion.latlng) {
          const { latlng } = suggestion;
          dispatch({
            type: UPDATE_MAP_CENTRE,
            mapCentre: [latlng.lat, latlng.lng]
          });
        }
      }}
    />
  );
};

export default AlgoliaPlacesComponent;
