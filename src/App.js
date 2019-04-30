import React, { Component } from "react";
import "./App.css";
import "./assets/css/weather-icons.min.css";
import "react-vis/dist/style.css";

import AppContainer from "./containers/AppContainer/AppContainer";
import { ReactComponent as SvgSymbolSet } from "../src/assets/svg/wi-symbol.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SvgSymbolSet />
        <AppContainer />
      </div>
    );
  }
}

export default App;
