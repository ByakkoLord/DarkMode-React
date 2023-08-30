import React, { Component } from "react";
import Header from "./components/Header";
import Zoom from 'react-reveal/Zoom';

class App extends Component {

  handleButtonClick = (event) => {
    const clickedComponentClass = event.target.className;

    if (clickedComponentClass.includes("projectBox1")) {
      this.setState({ textProject: "Project Box 1" });
    } else if (clickedComponentClass.includes("projectBox2")) {
      this.setState({ textProject: "Project Box 2" });
    }
  };

  render() {
    return (
      <Zoom>
        <div className="flex justify-center items-center h-screen gap-4">
          <Header />
        </div>
      </Zoom>
    );
  }
}

export default App;
