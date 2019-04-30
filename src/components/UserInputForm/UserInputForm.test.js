import React from "react";
import { shallow, render } from "enzyme";
import { UserInputForm } from "./UserInputForm";

import { Form, Card, Button } from "react-bootstrap";

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
  )
};
global.navigator.geolocation = mockGeolocation;

const mockContext = {
  dispatch: jest.fn(),
  state: {
    mapCentre: [50, 1]
  }
};

const mockProps = {
  children: null
};

const MockContext = React.createContext();

it("renders without crashing", () => {
  const TestComponent = () => (
    <MockContext.Provider value={mockContext}>
      <UserInputForm />
    </MockContext.Provider>
  );
  const wrapper = shallow(<TestComponent />);
});
