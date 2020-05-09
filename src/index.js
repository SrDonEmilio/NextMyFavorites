import React from "react";
import ReactDOM from "react-dom";
import List from "./containers/List";

// import "bootswatch/dist/lux/bootstrap.min.css";

const App = () => {
  return (
    <main>
        <List />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
