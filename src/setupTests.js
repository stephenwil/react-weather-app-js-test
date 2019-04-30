import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Leaflet from "./components/Leaflet/Leaflet";

configure({ adapter: new Adapter() });

const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementationOnce(success =>
    Promise.resolve(
      success({
        coords: {
          latitude: 51.1,
          longitude: 45.3
        }
      })
    )
  ),
  watchPosition: jest.fn()
};
global.navigator.geolocation = mockGeolocation;

jest.mock("./components/Leaflet/Leaflet", () => {
  return jest.fn().mockImplementation(() => null);
});
