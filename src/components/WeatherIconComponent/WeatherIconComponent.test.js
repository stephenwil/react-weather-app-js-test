import React from "react";
import { shallow } from "enzyme";
import WeatherIconComponent, { lookupIcon } from "./WeatherIconComponent";
import iconMapping from "../../utils/code-to-icon-mapping.json";

jest.mock("../../utils/code-to-icon-mapping.json", () => {
  return {
    "200": {
      label: "test-label",
      icon: "test-icon"
    }
  };
});

describe("lookupIcon function", () => {
  it("lookupIcon works correctly and finds icon based on code", () => {
    expect(lookupIcon(200)).toEqual("test-icon");
  });

  it("lookupIcon works correctly and finds icon based on code", () => {
    expect(lookupIcon("x")).toBeUndefined();
  });
});

describe("WeatherIconComponent", () => {
  it("Component doesn't render", () => {
    const wrapper = shallow(<WeatherIconComponent />);
    expect(wrapper.html()).toEqual(null);
  });

  it("Component renders correctly", () => {
    const wrapper = shallow(<WeatherIconComponent iconCode={"200"} />);

    const svg = wrapper.find("svg");
    expect(svg).toBeTruthy();
    expect(svg.props()).toMatchObject({ className: "svg-200 icon" });
    const use = svg.find("use");

    expect(use.props()).toEqual({ xlinkHref: "#test-icon" });
  });
});
