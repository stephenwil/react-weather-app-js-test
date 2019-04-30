import { geolocated } from "react-geolocated";

const WithGelocate = WrappedComponent =>
  geolocated({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 5000,
    geolocationProvider: navigator.geolocation
  })(WrappedComponent);

export default WithGelocate;
