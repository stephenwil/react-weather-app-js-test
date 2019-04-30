import React, { useState, useContext } from "react";

import styles from "./UserInputForm.module.scss";

import { Form, Card, Button } from "react-bootstrap";
import WithGeolocate from "../Geolocate/Geolocate";
import AlgoliaPlacesComponent from "../AlgoliaPlacesComponent/AlgoliaPlacesComponent";
import {
  StoreContext,
  UPDATE_MAP_CENTRE
} from "../../containers/Context/Context";

export const UserInputForm = props => {
  const { dispatch, state } = useContext(StoreContext);
  const { mapCentre } = state;

  const [geoLatFormValue, setGeoLatForm] = useState(mapCentre[0]);
  const [geoLongFormValue, setGeoLongForm] = useState(mapCentre[1]);
  const { isGeolocationAvailable, isGeolocationEnabled } = props;

  const geoAllowed = isGeolocationAvailable && isGeolocationEnabled;

  const handleSubmit = ev => {
    ev.preventDefault();
  };

  const handleGeoLoc = ev => {
    if (props.coords) {
      const { longitude, latitude } = props.coords;
      if (longitude && latitude) {
        setGeoLongForm(longitude);
        setGeoLatForm(latitude);
        dispatch({ type: UPDATE_MAP_CENTRE, mapCentre: [latitude, longitude] });
      }
    }
  };

  const updateMapFromForm = (lat, long) => {
    let geoLat = parseInt(lat);
    let geoLong = parseInt(long);

    if (!isNaN(geoLong) && !isNaN(geoLat)) {
      dispatch({ type: UPDATE_MAP_CENTRE, mapCentre: [geoLat, geoLong] });
    }
  };

  const handleLatChange = ev => {
    setGeoLatForm(ev.target.value);
    updateMapFromForm(ev.target.value, geoLongFormValue);
  };

  const handleLongChange = ev => {
    setGeoLongForm(ev.target.value);
    updateMapFromForm(geoLatFormValue, ev.target.value);
  };

  return (
    <Card className={styles.container}>
      <Card.Title>Weather Forecaster</Card.Title>
      <Card.Subtitle>Choose your location for a 5 day forecast</Card.Subtitle>
      <Card.Body>
        <Form name="geoInput" onSubmit={handleSubmit} autoComplete="off">
          <Form.Group controlId="geo_lat">
            <Form.Label>Geo Latitude</Form.Label>
            <Form.Control
              type="number"
              step="any"
              placeholder="Latitude"
              onChange={handleLatChange}
              value={geoLatFormValue}
            />
          </Form.Group>
          <Form.Group controlId="geo_long">
            <Form.Label>Geo Longtitude</Form.Label>
            <Form.Control
              type="number"
              step="any"
              placeholder="Longtitude"
              onChange={handleLongChange}
              value={geoLongFormValue}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>or&nbsp;</Form.Label>

            <Button
              variant="primary"
              onClick={handleGeoLoc}
              disabled={!geoAllowed}
            >
              Use my location
            </Button>
          </Form.Group>
          <Form.Group>
            <AlgoliaPlacesComponent />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

const ConnectedUserInputForm = WithGeolocate(UserInputForm);

export default ConnectedUserInputForm;
