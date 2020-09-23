import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const launchHeader = () => {
  import("home/mountHeader").then((mountHeader) => {
    mountHeader.default("#header");
  });
};

const App = () => (
  <div>
    Hi there, I'm React from Webpack 5.
    <div>
      <button onClick={launchHeader}>Launch Header</button>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
