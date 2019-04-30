# Things to improve with more time:

## Build Process

- Introduce the usual good stuff such as lining, sonarQube, etc
- PropTypes or use React TypeScript
- Use Cypress for end-to-end testing
- Use react-testing-library when testing the hooks, as opposed to Jest/Enzyme

## Product

- ~~~Use SVG instead of weather font for overall consistency~~~
- ~~~Package up SVGS into a block, so we can `<use>` them.~~~
- The weather data is used locally in the <WeatherSummary> component, but should be passed to the global store via dispatch for other components consumption potentially

- Store Lat & Long in object literal to avoid them getting swapped erroneously
- Don't need a module for reading geolocation
- Not assume there is only 1 weather code
- Map all icons
- Better responsive design
