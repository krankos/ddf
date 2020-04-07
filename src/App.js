import React from "react";
import "./App.css";
import Topbar from "./topbar.js";
import Text_intro from "./text-intro.js";
import Cards from "./cards.js";
import Jumbo from "./jumbo.js";
import Cardimg from "./cardimg.js";
import Footer from "./footer.js";
import Where from "./where.js";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="big">
        <Text_intro />
        <Cards />
        <Where />{" "}
      </div>{" "}
      <Jumbo />
      <div className="big">
        <Cardimg />{" "}
      </div>{" "}
      <Footer />{" "}
    </div>
  );
}

export default App;
