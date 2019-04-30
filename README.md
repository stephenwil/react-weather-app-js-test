# React Weather

This application gives you a forecast for any location around the world.

You can search for any location, or enter a latitude and longitude, or use your current, and the map will take you there.

Click on the marker to see a forecast of the next few hours, and a graph of the current temperature and windspeed.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to use this application

Enter a location to find a place to get the weather forecast. Just click on the marker and a short forecast will show in the popup.

A chart is provided, showing the temperature and windspeed, with a datatable showing the next few hours forecasted weather.

## Demo

See the application hosted at https://breakable-skate.surge.sh

# Developers

## Getting Started

### Prerequisites

This application makes use of 2 external APIs for weather and location data:

1. Open Weather API (https://openweathermap.org/api)

2. Algolia Places API (for geocoding - https://community.algolia.com/places/documentation.html)

If you clone this repo, please create a file 'env.local' in the root of the project folder, with the following variables:

REACT_APP_OPEN_WEATHERMAP_API=`<your open weathermap API Key>`

REACT_APP_ALGOLIA_API=`<Your Algolia places API name>`

REACT_APP_ALGOLIA_API_KEY=`<Your Algolia places API Key>`

## SVG Symbol Set

All svgs are collected into a symbol set which is imported into the DOM. This is done for svg effeciency.

The created file is held in `/src/assets/svg/wi-symbol.svg`

See the folder /scripts/svg-to-symbol for more detail.

### Installing

Use yarn or npm to install the package dependancies:

```

yarn

```

or

```

npm install

```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

You will also see any lint errors in the console.

## Running the tests

Unit tests using Jest/Enzyme are run by:

`yarn test` or `npm test`

## Deployment

Run `yarn build` or `npm build` to create a production build. The build in /build can then be hosted anywhere.
