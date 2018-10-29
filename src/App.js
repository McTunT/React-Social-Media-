import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "./components/SocialMeida";

library.add(faGhost, fab);

class App extends Component {
  render() {
    return (
      <div>
        <SocialMedia />
      </div>
    );
  }
}

export default App;
